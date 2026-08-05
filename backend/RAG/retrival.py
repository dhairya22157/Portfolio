"""Portfolio-specific semantic retrieval from the Pinecone index.

The filename keeps the project's existing ``retrival.py`` spelling so current
imports continue to work.
"""

from __future__ import annotations

from dataclasses import dataclass
import re
from typing import Any

try:  # Supports both direct scripts and `from RAG import retrival` in FastAPI.
    from .embeddings import embed_query
    from .vector_store import NAMESPACE, get_index
except ImportError:
    from embeddings import embed_query
    from vector_store import NAMESPACE, get_index


DEFAULT_TOP_K = 6
DEFAULT_CANDIDATES = 24
MAX_CHUNKS_PER_SOURCE = 2
MAX_CONTEXT_CHARS = 12_000
STOP_WORDS = {
    "a", "about", "an", "and", "are", "can", "did", "do", "does", "for", "has", "he",
    "dhairya", "his", "i", "in", "is", "me", "of", "on", "please", "tell", "the", "to", "what", "with",
}


@dataclass(frozen=True)
class RetrievedChunk:
    id: str
    score: float
    text: str
    source: str
    title: str


def _value(item: Any, key: str, default: Any = None) -> Any:
    """Read fields from either Pinecone SDK objects or dictionary responses."""
    if isinstance(item, dict):
        return item.get(key, default)
    return getattr(item, key, default)


def _terms(text: str) -> set[str]:
    """Normalize simple English keywords without a heavyweight NLP dependency."""
    terms = set(re.findall(r"[a-z0-9+]+", text.lower()))
    normalized: set[str] = set()
    for term in terms:
        if term in STOP_WORDS or len(term) < 2:
            continue
        normalized.add(term[:-1] if term.endswith("s") and len(term) > 3 else term)
    return normalized


def _rerank_score(query_terms: set[str], raw_score: float, metadata: dict[str, Any]) -> float:
    """Mix dense similarity with exact portfolio-title/source relevance."""
    source_terms = _terms(str(metadata.get("source", "")))
    title_terms = _terms(str(metadata.get("title", "")))
    text_terms = _terms(str(metadata.get("text", "")))
    if not query_terms:
        return raw_score

    # Filename/title matches are highly meaningful in this small curated corpus
    # (for example, "projects", "experience", "education", and "contact").
    source_hits = len(query_terms & source_terms)
    title_hits = len(query_terms & title_terms)
    text_overlap = len(query_terms & text_terms) / len(query_terms)
    return raw_score + (0.18 * source_hits) + (0.12 * title_hits) + (0.06 * text_overlap)


def retrieve(query: str, top_k: int = DEFAULT_TOP_K, candidates: int = DEFAULT_CANDIDATES) -> list[RetrievedChunk]:
    """Retrieve diverse, high-scoring evidence for a portfolio question."""
    query = query.strip()
    if not query:
        raise ValueError("Query cannot be empty.")
    if top_k <= 0:
        raise ValueError("top_k must be positive.")

    # Search a larger candidate set first. This prevents one long document from
    # consuming all context while keeping the best semantic matches.
    candidate_count = max(candidates, top_k)
    response = get_index().query(
        vector=embed_query(query),
        top_k=candidate_count,
        namespace=NAMESPACE,
        include_metadata=True,
        include_values=False,
    )
    raw_matches = _value(response, "matches", []) or []
    query_terms = _terms(query)
    ranked_matches = sorted(
        raw_matches,
        key=lambda match: _rerank_score(
            query_terms,
            float(_value(match, "score", 0.0)),
            _value(match, "metadata", {}) or {},
        ),
        reverse=True,
    )

    selected: list[RetrievedChunk] = []
    selected_per_source: dict[str, int] = {}
    for match in ranked_matches:
        metadata = _value(match, "metadata", {}) or {}
        text = str(metadata.get("text", "")).strip()
        source = str(metadata.get("source", "unknown source"))
        if not text or selected_per_source.get(source, 0) >= MAX_CHUNKS_PER_SOURCE:
            continue

        selected.append(
            RetrievedChunk(
                id=str(_value(match, "id", "")),
                score=float(_value(match, "score", 0.0)),
                text=text,
                source=source,
                title=str(metadata.get("title", source)),
            )
        )
        selected_per_source[source] = selected_per_source.get(source, 0) + 1
        if len(selected) == top_k:
            break
    return selected


def build_context(matches: list[RetrievedChunk], max_chars: int = MAX_CONTEXT_CHARS) -> str:
    """Format retrieved chunks with stable numbered citations for Gemini."""
    sections: list[str] = []
    used = 0
    for number, match in enumerate(matches, start=1):
        section = f"[Source {number}: {match.title} | {match.source}]\n{match.text}"
        if sections and used + len(section) > max_chars:
            break
        sections.append(section)
        used += len(section) + 2
    return "\n\n".join(sections)


if __name__ == "__main__":
    results = retrieve("Tell me about Dhairya's AI projects")
    for result in results:
        print(f"\n[{result.score:.3f}] {result.title} ({result.source})")
        print(result.text)
