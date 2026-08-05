"""Load and chunk the portfolio knowledge base into a portable JSONL file.

Run from the portfolio_react directory:
    python backend/RAG/loader.py

The output is deliberately dependency-free so it can be used by LangChain,
LlamaIndex, or a custom vector-store ingestion script later.
"""

from __future__ import annotations

import hashlib
import json
import re
from dataclasses import asdict, dataclass
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[2]
BACKEND_DIR = Path(__file__).resolve().parents[1]
KNOWLEDGE_BASE_DIR = BACKEND_DIR / "knowledge_base"
OUTPUT_PATH = Path(__file__).resolve().parent / "data" / "portfolio_chunks.jsonl"

CHUNK_SIZE = 900
CHUNK_OVERLAP = 150


@dataclass
class Document:
    """A normalized source document, ready for chunking."""

    page_content: str
    metadata: dict[str, str]


def normalize_markdown(markdown: str) -> str:
    """Keep readable Markdown while removing whitespace noise."""
    text = markdown.replace("\r\n", "\n").replace("\r", "\n")
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def load_documents(source_dir: Path = KNOWLEDGE_BASE_DIR) -> list[Document]:
    """Read every Markdown file and enrich it with stable source metadata."""
    if not source_dir.is_dir():
        raise FileNotFoundError(f"Knowledge base directory not found: {source_dir}")

    documents: list[Document] = []
    for path in sorted(source_dir.rglob("*.md")):
        content = normalize_markdown(path.read_text(encoding="utf-8"))
        if not content:
            continue

        title_match = re.search(r"^#\s+(.+)$", content, flags=re.MULTILINE)
        documents.append(
            Document(
                page_content=content,
                metadata={
                    # Keep logical source paths stable after moving the folder
                    # into backend/, so Pinecone upserts reuse the same IDs.
                    "source": path.relative_to(BACKEND_DIR).as_posix(),
                    "filename": path.name,
                    "title": title_match.group(1).strip() if title_match else path.stem,
                },
            )
        )
    return documents


def split_text(text: str, chunk_size: int = CHUNK_SIZE, overlap: int = CHUNK_OVERLAP) -> list[str]:
    """Split on paragraph/sentence boundaries where possible, with overlap."""
    if chunk_size <= 0 or overlap < 0 or overlap >= chunk_size:
        raise ValueError("chunk_size must be positive and overlap must be smaller than chunk_size")

    chunks: list[str] = []
    start = 0
    length = len(text)
    while start < length:
        end = min(start + chunk_size, length)
        if end < length:
            boundary = max(
                text.rfind("\n\n", start, end),
                text.rfind("\n", start, end),
                text.rfind(". ", start, end),
            )
            if boundary > start + (chunk_size // 2):
                end = boundary + (2 if text.startswith("\n\n", boundary) else 1)

        chunk = text[start:end].strip()
        if chunk:
            chunks.append(chunk)
        if end == length:
            break
        next_start = max(end - overlap, start + 1)
        # Retain approximately the requested overlap without cutting a word in half.
        word_boundary = re.search(r"\s+", text[next_start : min(next_start + 100, end)])
        start = next_start + word_boundary.end() if word_boundary else next_start
    return chunks


def chunk_documents(documents: list[Document]) -> list[Document]:
    """Create retrieval-sized documents with parent and chunk identifiers."""
    chunked_documents: list[Document] = []
    for document in documents:
        for chunk_index, content in enumerate(split_text(document.page_content)):
            metadata = {
                **document.metadata,
                "chunk_index": str(chunk_index),
                "document_id": hashlib.sha256(
                    f"{document.metadata['source']}:{chunk_index}".encode("utf-8")
                ).hexdigest()[:16],
            }
            chunked_documents.append(Document(page_content=content, metadata=metadata))
    return chunked_documents


def save_documents(documents: list[Document], output_path: Path = OUTPUT_PATH) -> Path:
    """Persist one chunk per JSONL row for simple downstream ingestion."""
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8", newline="\n") as file:
        for document in documents:
            file.write(json.dumps(asdict(document), ensure_ascii=False) + "\n")
    return output_path


def main() -> None:
    source_documents = load_documents()
    chunks = chunk_documents(source_documents)
    output_path = save_documents(chunks)
    print(f"Loaded {len(source_documents)} source documents.")
    print(f"Created and saved {len(chunks)} chunks to {output_path}")


if __name__ == "__main__":
    main()
