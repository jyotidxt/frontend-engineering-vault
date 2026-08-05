import { useEffect, useRef, useState } from "react";
import useChat from "../hooks/useChat";
import Message from "./Message";
import TypingIndicator from "./TypingIndicator";

export default function ChatWindow({ setOpen }) {
  const { messages, send, loading } = useChat();

  const [text, setText] = useState("");

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = () => {
    if (!text.trim()) return;

    send(text);

    setText("");
  };

  return (
    <div
      className="
      w-[390px]
      h-[650px]
      rounded-[30px]
      border
      border-pink-500/40
      bg-[#111111]/95
      backdrop-blur-3xl
      shadow-[0_0_50px_rgba(236,72,153,.25)]
      flex
      flex-col
      overflow-hidden
      "
    >
      {/* Header */}

      <div
        className="
        h-20
        px-6
        border-b
        border-white/10
        flex
        justify-between
        items-center
        "
      >
        <div className="flex gap-3 items-center">
          <div
            className="
            w-12
            h-12
            rounded-full
            bg-gradient-to-r
            from-pink-500
            to-fuchsia-500
            flex
            items-center
            justify-center
            text-xl
            "
          >
            💖
          </div>

          <div>
            <h2 className="text-white font-bold text-lg">
              Divya
            </h2>

            <p className="text-green-400 text-xs">
              ● Online
            </p>
          </div>
        </div>

        <div className="flex gap-2">

          <button
            className="
            w-10
            h-10
            rounded-full
            bg-white/5
            hover:bg-white/10
            text-white
            "
          >
            —
          </button>

          <button
            onClick={() => setOpen(false)}
            className="
            w-10
            h-10
            rounded-full
            bg-pink-500
            hover:bg-pink-600
            text-white
            "
          >
            ✕
          </button>

        </div>
      </div>

      {/* Quick Buttons */}

      <div className="flex gap-2 px-4 py-3 overflow-x-auto">

        <button className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
          React
        </button>

        <button className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
          Machine Coding
        </button>

        <button className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
          Interview
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto px-4 py-3">

        {messages.map((m, i) => (
          <Message
            key={i}
            message={m}
          />
        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />

      </div>

      {/* Input */}

      <div
        className="
        p-4
        border-t
        border-white/10
        "
      >
        <div
          className="
          bg-white/5
          rounded-full
          flex
          items-center
          px-4
          "
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && handleSend()
            }
            placeholder="Ask Divya anything..."
            className="
            flex-1
            bg-transparent
            py-4
            outline-none
            text-white
            placeholder:text-gray-500
            "
          />

          <button
            onClick={handleSend}
            className="
            w-11
            h-11
            rounded-full
            bg-pink-500
            hover:bg-pink-600
            text-white
            text-lg
            "
          >
            ➜
          </button>

        </div>
      </div>

    </div>
  );
}