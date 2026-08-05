import { useState } from "react";
import { askAssistant } from "../assistant/api";

export default function useChat() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 I'm Divya... Ask me anything"
    }
  ]);

  const [loading, setLoading] = useState(false);

  async function send(text) {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);

    setLoading(true);

    const reply = await askAssistant(text);

    setMessages((prev) => [...prev, { sender: "bot", text: reply }]);

    setLoading(false);
  }

  return {
    messages,
    loading,
    send
  };
}