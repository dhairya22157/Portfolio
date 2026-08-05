"""Gemini embedding helpers for the portfolio RAG pipeline."""

from __future__ import annotations

import os
from functools import lru_cache
from pathlib import Path

from dotenv import load_dotenv


PROJECT_ROOT = Path(__file__).resolve().parents[2]
load_dotenv(PROJECT_ROOT / ".env")

EMBEDDING_MODEL = os.getenv("EMBEDDING_MODEL", "gemini-embedding-001")
EMBEDDING_DIMENSION = int(os.getenv("EMBEDDING_DIMENSION", "3072"))


@lru_cache(maxsize=1)
def _get_client():
    """Create one Gemini client and keep it alive for the complete process."""
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        raise RuntimeError("GOOGLE_API_KEY is missing from the project .env file.")

    try:
        from google import genai
    except ImportError as error:
        raise RuntimeError(
            "Missing google-genai. Run: pip install google-genai pinecone"
        ) from error
    # Do not return a short-lived temporary Client from the request expression.
    # The SDK closes its HTTP client when the Client is garbage-collected, which
    # can otherwise interrupt a retry with "client has been closed".
    return genai.Client(api_key=api_key)


def _embed(contents: str | list[str], task_type: str, title: str | None = None) -> list[list[float]]:
    """Embed text for the requested retrieval task using a consistent dimension."""
    try:
        from google.genai import types
    except ImportError as error:
        raise RuntimeError(
            "Missing google-genai. Run: pip install google-genai pinecone"
        ) from error

    config = types.EmbedContentConfig(
        task_type=task_type,
        output_dimensionality=EMBEDDING_DIMENSION,
        title=title if task_type == "RETRIEVAL_DOCUMENT" else None,
    )
    response = _get_client().models.embed_content(
        model=EMBEDDING_MODEL,
        contents=contents,
        config=config,
    )
    vectors = [list(item.values) for item in response.embeddings]
    if not vectors or any(len(vector) != EMBEDDING_DIMENSION for vector in vectors):
        raise RuntimeError(
            f"Gemini returned an unexpected embedding dimension; expected {EMBEDDING_DIMENSION}."
        )
    return vectors


def embed_documents(texts: list[str], title: str | None = None) -> list[list[float]]:
    """Embed portfolio chunks for storage and semantic retrieval."""
    if not texts:
        return []
    return _embed(texts, task_type="RETRIEVAL_DOCUMENT", title=title)


def embed_query(text: str) -> list[float]:
    """Embed a user's search question with Gemini's retrieval-query task type."""
    if not text.strip():
        raise ValueError("Query text cannot be empty.")
    return _embed(text, task_type="RETRIEVAL_QUERY")[0]


if __name__ == "__main__":
    vector = embed_query("What machine learning projects has Dhairya built?")
    print(f"Created an embedding with {len(vector)} dimensions.")
