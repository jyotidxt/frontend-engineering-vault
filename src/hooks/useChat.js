// import { useState } from "react";
// import { askAssistant } from "../assistant/api";

// export default function useChat() {
//   const [messages, setMessages] = useState([
//     {
//       sender: "bot",
//       text: "Hello 👋 I'm Divya... Ask me anything"
//     }
//   ]);

//   const [loading, setLoading] = useState(false);

//   async function send(text) {
//     if (!text.trim()) return;

//     setMessages((prev) => [...prev, { sender: "user", text }]);

//     setLoading(true);

//     const reply = await askAssistant(text);

//     setMessages((prev) => [...prev, { sender: "bot", text: reply }]);

//     setLoading(false);
//   }

//   return {
//     messages,
//     loading,
//     send
//   };
// }
import { useState } from "react";
import { askAssistant } from "./api";

export default function useChat() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hi Buddy 👋 How can I help you today?",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (message) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    const reply = await askAssistant(message);

    const aiMessage = {
      id: Date.now() + 1,
      role: "assistant",
      text: reply,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, aiMessage]);

    setLoading(false);
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}