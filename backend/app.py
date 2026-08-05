r"""FastAPI server for the portfolio RAG chatbot.

Start from the project root:
    venv/Scripts/python.exe -m uvicorn backend.app:app --reload
"""

from __future__ import annotations

import os

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

# Render starts this file as the top-level `app` module because its Root
# Directory is `backend`, so these imports must not use a leading dot.
from RAG.embeddings import PROJECT_ROOT
from RAG.full_pipeline import answer_question


load_dotenv(PROJECT_ROOT / ".env")

app = FastAPI(title="Dhairya Portfolio Chatbot API", version="1.0.0")

# Set CORS_ORIGINS to your Vercel URL in production. Wildcard is safe here
# because the API does not authenticate users or accept browser credentials.
origins = [origin.strip() for origin in os.getenv("CORS_ORIGINS", "*").split(",") if origin.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


class ChatRequest(BaseModel):
    question: str = Field(min_length=2, max_length=1000, description="Portfolio question")
    top_k: int = Field(default=6, ge=1, le=8, description="Evidence chunks to retrieve")


class Source(BaseModel):
    number: int
    title: str
    source: str
    score: float


class ChatResponse(BaseModel):
    answer: str
    sources: list[Source]


@app.get("/health")
def health() -> dict[str, str]:
    """Lightweight endpoint for deployment and frontend connectivity checks."""
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
def chat(request: ChatRequest) -> ChatResponse:
    """Answer a portfolio question with Pinecone-backed Gemini RAG."""
    try:
        result = answer_question(request.question, top_k=request.top_k)
        return ChatResponse(**result)
    except ValueError as error:
        raise HTTPException(status_code=400, detail=str(error)) from error
    except Exception as error:
        # Do not expose provider credentials, SDK traces, or index details to browsers.
        raise HTTPException(
            status_code=502,
            detail="The portfolio assistant is temporarily unavailable. Please try again.",
        ) from error
