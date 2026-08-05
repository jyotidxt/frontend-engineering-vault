export default function Message({ message }) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex my-4 ${
        isUser
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`
        max-w-[75%]
        px-5
        py-3
        rounded-3xl
        text-sm
        leading-6
        ${
          isUser
            ? "bg-pink-500 text-white rounded-br-md"
            : "bg-white/10 text-white rounded-bl-md"
        }
        `}
      >
        {message.text}
      </div>
    </div>
  );
}