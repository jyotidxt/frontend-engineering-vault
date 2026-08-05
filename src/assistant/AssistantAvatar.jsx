import girl from "./assistant.png";

export default function AssistantAvatar({ open, setOpen }) {
  return (
    <div className="relative flex flex-col items-center">

      {!open && (
        <div className="absolute -top-20 right-6 animate-bounce">

          <div className="relative">

            <div className="bg-pink-500 text-white rounded-2xl px-5 py-3 shadow-2xl border border-pink-300">

              <p className="font-semibold">
                Hi there 👋
              </p>

              <p className="text-sm mt-1">
                I'm <b>Divya</b>
              </p>

              <p className="text-xs opacity-90">
                Ask me anything 💕
              </p>

            </div>

            <div className="absolute left-8 -bottom-2 w-4 h-4 rotate-45 bg-pink-500"></div>

          </div>

        </div>
      )}

      <img
        src={girl}
        alt="Divya"
        onClick={() => setOpen(!open)}
        className="
        w-44
        cursor-pointer
        hover:scale-105
        transition
        duration-300
        drop-shadow-[0_0_25px_rgba(255,105,180,.5)]
        "
      />

    </div>
  );
}