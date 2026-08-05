import { useEffect, useRef, useState } from "react";
import "./Chatbot.css";

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000").replace(/\/$/, "");

const welcomeMessage = {
  role: "assistant",
  text: "Hi! I’m Dhairya’s portfolio assistant. Ask me about projects, skills, experience, or education.",
  sources: [],
};

function displayText(text) {
  // Keep the chat dependency-free while gracefully handling an occasional
  // Markdown-style response from an LLM.
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/^\s*[-*]\s+/gm, "• ")
    .replace(/^#{1,6}\s+/gm, "")
    // Citations remain in the API response to select the right source cards,
    // but are intentionally not shown inside the conversational answer.
    .replace(/\s*\[Source\s+\d+(?:\s*,\s*Source\s+\d+)*\]/gi, "");
}

function ChatbotLogo() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="chatbot-logo">
      <path d="M7 8.5A5.5 5.5 0 0 1 12.5 3h7A5.5 5.5 0 0 1 25 8.5v9a5.5 5.5 0 0 1-5.5 5.5h-4L10 27v-4.5A5.5 5.5 0 0 1 7 17.5z" />
      <circle cx="13" cy="13" r="1.5" />
      <circle cx="19" cy="13" r="1.5" />
      <path d="M12.5 17.5c1.7 1.4 5.3 1.4 7 0" />
    </svg>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([welcomeMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  async function sendMessage(event) {
    event?.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    setMessages((current) => [...current, { role: "user", text: question, sources: [] }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const payload = await response.json();
      if (!response.ok) throw new Error(payload.detail || "Unable to answer right now.");
      setMessages((current) => [
        ...current,
        { role: "assistant", text: payload.answer, sources: payload.sources || [] },
      ]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: error.message || "Unable to reach the portfolio assistant.", sources: [] },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <aside className="chatbot" aria-label="Portfolio assistant">
      {isOpen && (
        <section className="chatbot-panel" aria-live="polite">
          <header className="chatbot-header">
            <span className="chatbot-brand"><ChatbotLogo /> Portfolio Assistant</span>
            <button className="chatbot-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
          </header>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div className={`chatbot-message ${message.role}`} key={`${message.role}-${index}`}>
                <p>{displayText(message.text)}</p>
                {message.sources?.length > 0 && (
                  <div className="chatbot-sources">
                    {message.sources.slice(0, 3).map((source) => (
                      <span key={`${index}-${source.number}`}>{source.title}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isLoading && <div className="chatbot-message assistant chatbot-typing">Thinking<span>.</span><span>.</span><span>.</span></div>}
            <div ref={messagesEndRef} />
          </div>
          <form className="chatbot-form" onSubmit={sendMessage}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Dhairya…" aria-label="Ask a portfolio question" maxLength="1000" />
            <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send message">↑</button>
          </form>
        </section>
      )}
      <button className="chatbot-launcher" type="button" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}>
        <ChatbotLogo />
        <span>{isOpen ? "Close" : "Ask me"}</span>
      </button>
    </aside>
  );
}
