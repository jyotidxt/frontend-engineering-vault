import { useState } from "react";
import AssistantAvatar from "./AssistantAvatar";
import ChatWindow from "./ChatWindow";

export default function Assistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-4">

      {/* Chat Window */}

      <div
        className={`transition-all duration-500 origin-bottom-right ${
          open
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <ChatWindow
          open={open}
          setOpen={setOpen}
        />
      </div>

      {/* Avatar */}

      <AssistantAvatar
        open={open}
        setOpen={setOpen}
      />

    </div>
  );
}