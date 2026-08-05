import os
from dotenv import load_dotenv
from google import genai

load_dotenv("../.env")

client = genai.Client(
    api_key=os.getenv("GOOGLE_API_KEY")
)

EMBEDDING_MODEL = "gemini-embedding-001"


def get_embedding(text: str):
    """
    Generate embedding for a single text chunk.
    """

    response = client.models.embed_content(
        model=EMBEDDING_MODEL,
        contents=text,
    )

    return response.embeddings[0].values

if __name__ == "__main__":

    text = """
    Hi, I am Dhairya.
    I graduated from IIIT Delhi.
    """

    embedding = get_embedding(text)

    print(len(embedding))
    print(embedding[:10])