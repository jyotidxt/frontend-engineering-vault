    import divya from "./assistant.png";
    // import useChat from '../hooks/useChat.js'
    import { askGemini } from "./api.js";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Minus,
  Send,
  Sparkles,
  Search,
  Code2,
  Briefcase,
  SmilePlus,
} from "lucide-react";

export default function ChatWindow({ open, setOpen }) {
  const [message, setMessage] = useState("");
  const [minimized, setMinimized] = useState(false);
  const [typing, setTyping] = useState(false);
  // const { messagess, loading, sendMessages } = useChat();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hi 👋 I'm Divya. I can help you find machine coding questions, frontend components, projects, React topics and interview preparation. What would you like to explore today?",
      time: new Date(),
    },
  ]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (!minimized && open) {
      inputRef.current?.focus();
    }
  }, [minimized, open]);

  const formatTime = (date) =>
    date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const quickPrompts = [
    {
      icon: Search,
      title: "Find Project",
      subtitle: "Search any project",
      prompt: "Show me frontend projects.",
    },
    {
      icon: Code2,
      title: "Machine Coding",
      subtitle: "Coding questions",
      prompt: "Open machine coding questions.",
    },
    {
      icon: Briefcase,
      title: "Interview",
      subtitle: "Prepare quickly",
      prompt: "Help me prepare for interviews.",
    },
    {
      icon: Sparkles,
      title: "Ask Anything",
      subtitle: "Gemini AI",
      prompt: "How can you help me?",
    },
  ];

  const sendMessage = async () => {


  if (!message.trim()) return;


  const userText = message;



  const userMessage = {

    id: Date.now(),

    sender:"user",

    text:userText,

    time:new Date(),

  };



  setMessages((prev)=>[
    ...prev,
    userMessage
  ]);



  setMessage("");

  setTyping(true);



  try {


    const reply = await askGemini(userText);



    const aiMessage = {

      id:Date.now()+1,

      sender:"assistant",

      text:reply,

      time:new Date(),

    };



    setMessages((prev)=>[
      ...prev,
      aiMessage
    ]);



  }

  catch(error){


    setMessages((prev)=>[

      ...prev,

      {

        id:Date.now()+2,

        sender:"assistant",

        text:"Sorry, Gemini is not responding right now.",

        time:new Date(),

      }

    ]);



  }


  finally{

    setTyping(false);

  }


};

 const handleQuickPrompt = (promptText)=>{

  setMessage(promptText);

  setTimeout(()=>{

    sendMessage();

  },100);

};

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.35 }}
        className="
          fixed bottom-4 right-4 z-50
          w-[calc(100vw-20px)] sm:w-[390px] md:w-[430px] lg:w-[450px]
          max-h-[85vh] flex flex-col
          rounded-[32px] overflow-hidden
          bg-[#111]/95 backdrop-blur-3xl
          border border-pink-500/20
          shadow-[0_20px_80px_rgba(236,72,153,.25)]
        "
      >
        {/* HEADER */}
        <div className="h-20 px-6 border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={divya}
                alt="Divya"
                className="  w-14 h-14 rounded-full border-2 border-pink-400 object-cover
                [object-position:center_0%]"
              />
              <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-green-400 border-2 border-[#111]" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Divya</h2>
              <p className="text-xs text-gray-400">AI Assistant</p>
            </div>
          </div>

          {/* HEADER ACTIONS */}
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setMinimized(!minimized)}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
            >
              <Minus size={18} className="text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 hover:shadow-lg hover:shadow-pink-500/30 flex items-center justify-center transition"
            >
              <X size={18} className="text-white" />
            </motion.button>
          </div>
        </div>

        {minimized ? (
          <div className="h-16 flex items-center justify-center text-gray-400 text-sm">
            Chat Minimized
          </div>
        ) : (
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* SCROLLABLE CONTENT AREA */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
              {/* WELCOME CARD */}
              <div className="rounded-3xl bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 p-[1px]">
                <div className="rounded-3xl bg-[#1a1a1a] p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Sparkles size={20} className="text-pink-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">Hello 👋</h3>
                      <p className="text-gray-400 text-xs">Your Personal AI Assistant</p>
                    </div>
                  </div>
                  <p className="mt-5 text-gray-300 leading-7 text-sm">
                    I'm <span className="text-pink-400 font-semibold"> Divya </span>
                    and I can instantly help you search components, frontend projects, machine coding questions, React concepts and interview preparation.
                  </p>
                </div>
              </div>

              {/* QUICK ACTIONS */}
              <div className="grid grid-cols-2 gap-3">
                {quickPrompts.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ y: -4, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleQuickPrompt(item.prompt)}
                      className="rounded-2xl bg-white/5 hover:bg-pink-500 transition-all p-4 text-left group"
                    >
                      <Icon size={20} className="text-pink-400 group-hover:text-white mb-3 transition-colors" />
                      <h4 className="text-white font-medium text-sm">{item.title}</h4>
                      <p className="text-gray-400 group-hover:text-pink-100 text-xs mt-1 transition-colors">{item.subtitle}</p>
                    </motion.button>
                  );
                })}
              </div>

              {/* MESSAGES */}
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={msg.sender === "assistant" ? "flex gap-3 items-end" : "flex justify-end"}
                >
                  {msg.sender === "assistant" ? (
                    <>
                      <img
                        src={divya}
                        alt="Divya"
                        className="w-10 h-10 rounded-full border border-pink-400 object-cover flex-shrink-0
                         [object-position:center_0%]"
                      />
                      <div>
                        <div className="max-w-[270px] sm:max-w-[300px] rounded-3xl rounded-tl-md bg-white/5 border border-white/10 backdrop-blur-xl px-5 py-4">
                          <p className="text-sm leading-7 text-gray-200 whitespace-pre-wrap">{msg.text}</p>
                        </div>
                        <p className="text-[11px] text-gray-500 mt-2 ml-2">{formatTime(msg.time)}</p>
                      </div>
                    </>
                  ) : (
                    <div>
                      <div className="max-w-[270px] sm:max-w-[300px] rounded-3xl rounded-br-md bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-4">
                        <p className="text-sm text-white leading-7 whitespace-pre-wrap">{msg.text}</p>
                      </div>
                      <p className="text-[11px] text-right text-gray-500 mt-2 mr-2">{formatTime(msg.time)}</p>
                    </div>
                  )}
                </motion.div>
              ))}

              {/* TYPING INDICATOR */}
              <AnimatePresence>
                {typing && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex gap-3 items-end"
                  >
                    <img src={divya} alt="" className="w-10 h-10 rounded-full border border-pink-400" />
                    <div className="rounded-3xl rounded-tl-md bg-white/5 border border-white/10 px-5 py-4">
                      <div className="flex gap-2">
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-2 h-2 rounded-full bg-pink-400" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.15 }} className="w-2 h-2 rounded-full bg-pink-400" />
                        <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }} className="w-2 h-2 rounded-full bg-pink-400" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="border-t border-white/10 bg-[#141414] p-5 shrink-0">
              <div className="flex items-end gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-3 focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500/20 transition">
                <textarea
                  ref={inputRef}
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Divya anything..."
                  className="flex-1 resize-none bg-transparent outline-none text-white placeholder:text-gray-500 text-sm leading-6 max-h-36"
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    message.trim()
                      ? "bg-gradient-to-r from-pink-500 to-fuchsia-500 shadow-lg shadow-pink-500/30"
                      : "bg-white/10 cursor-not-allowed"
                  }`}
                >
                  <Send size={18} className="text-white" />
                </motion.button>
              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <SmilePlus size={14} className="text-pink-400" />
                  <span>Made with 💕 by </span>
                </div>
                <span> Jyoti Dixit ↵</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
// import divya from "./assistant.png";
// import { useState } from "react";
// import {
//   X,
//   Minus,
//   Send,
//   Sparkles,
//   Search,
//   Code2,
//   Briefcase,
// } from "lucide-react";

// export default function ChatWindow({ setOpen }) {
//   const [message, setMessage] = useState("");

//   return (
//     <div
//       className="
//       w-full
//       max-w-[calc(100vw-24px)]

//       sm:w-[390px]
//       md:w-[420px]
//       lg:w-[440px]

//       h-[82vh]
//       max-h-[760px]

//       sm:h-[680px]
//       md:h-[720px]

//       rounded-[24px]
//       sm:rounded-[30px]
//       md:rounded-[32px]

//       overflow-hidden

//       bg-[#111111]/95
//       backdrop-blur-3xl

//       border
//       border-pink-500/30

//       shadow-[0_0_45px_rgba(236,72,153,.25)]

//       flex
//       flex-col
//       "
//     >
//       {/* HEADER */}

//       <div
//         className="
//         h-20
//         sm:h-24

//         border-b
//         border-white/10

//         px-4
//         sm:px-6

//         flex
//         justify-between
//         items-center
//         "
//       >
//         <div className="flex items-center gap-3 sm:gap-4">
//           <img
//             src={divya}
//             alt="Divya"
//             className="
//             w-12
//             h-12

//             sm:w-14
//             sm:h-14

//             rounded-full
//             object-cover
//             border-2
//             border-pink-400
//             "
//           />

//           <div>
//             <h2 className="text-white font-bold text-lg sm:text-xl">
//               Divya
//             </h2>

//             <div className="flex items-center gap-2 mt-1">
//               <div className="w-2 h-2 rounded-full bg-green-400"></div>

//               <span className="text-[11px] sm:text-xs text-gray-400">
//                 Online
//               </span>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-2">
//           <button
//             className="
//             w-9
//             h-9

//             sm:w-10
//             sm:h-10

//             rounded-full
//             bg-white/5
//             hover:bg-white/10

//             flex
//             items-center
//             justify-center
//             "
//           >
//             <Minus size={18} color="white" />
//           </button>

//           <button
//             onClick={() => setOpen(false)}
//             className="
//             w-9
//             h-9

//             sm:w-10
//             sm:h-10

//             rounded-full

//             bg-pink-500
//             hover:bg-pink-600

//             flex
//             items-center
//             justify-center
//             "
//           >
//             <X size={18} color="white" />
//           </button>
//         </div>
//       </div>

//       {/* WELCOME */}

//       <div className="px-4 sm:px-6 pt-4 sm:pt-5">
//         <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-fuchsia-500 p-[1px]">
//           <div className="rounded-3xl bg-[#1b1b1b] p-4 sm:p-5">
//             <div className="flex gap-3 items-center">
//               <Sparkles color="#ff5fa2" />

//               <h3 className="text-white font-semibold">
//                 Hello 👋
//               </h3>
//             </div>

//             <p className="text-gray-300 mt-3 text-sm leading-6">
//               I'm{" "}
//               <span className="text-pink-400 font-semibold">
//                 Divya
//               </span>
//               . I can help you find projects, machine coding questions,
//               interview preparation and explain concepts instantly.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* QUICK ACTIONS */}

//       <div className="px-4 sm:px-5 pt-4 sm:pt-5">
//         <div
//           className="
//           grid
//           grid-cols-2
//           gap-3
//           "
//         >
//           <button
//             className="
//             bg-white/5
//             hover:bg-pink-500
//             transition
//             rounded-2xl

//             p-3
//             sm:p-4

//             text-left
//             "
//           >
//             <Search className="text-pink-400 mb-2" size={20} />

//             <h4 className="text-white text-sm sm:text-base font-medium">
//               Find Project
//             </h4>

//             <p className="text-gray-400 text-[11px] sm:text-xs mt-1">
//               Open any project instantly
//             </p>
//           </button>

//           <button
//             className="
//             bg-white/5
//             hover:bg-pink-500
//             transition
//             rounded-2xl

//             p-3
//             sm:p-4

//             text-left
//             "
//           >
//             <Code2 className="text-pink-400 mb-2" size={20} />

//             <h4 className="text-white text-sm sm:text-base font-medium">
//               Machine Coding
//             </h4>

//             <p className="text-gray-400 text-[11px] sm:text-xs mt-1">
//               Search coding questions
//             </p>
//           </button>

//           <button
//             className="
//             bg-white/5
//             hover:bg-pink-500
//             transition
//             rounded-2xl

//             p-3
//             sm:p-4

//             text-left
//             "
//           >
//             <Briefcase className="text-pink-400 mb-2" size={20} />

//             <h4 className="text-white text-sm sm:text-base font-medium">
//               Interview
//             </h4>

//             <p className="text-gray-400 text-[11px] sm:text-xs mt-1">
//               Prepare quickly
//             </p>
//           </button>

//           <button
//             className="
//             bg-white/5
//             hover:bg-pink-500
//             transition
//             rounded-2xl

//             p-3
//             sm:p-4

//             text-left
//             "
//           >
//             <Sparkles className="text-pink-400 mb-2" size={20} />

//             <h4 className="text-white text-sm sm:text-base font-medium">
//               Ask Anything
//             </h4>

//             <p className="text-gray-400 text-[11px] sm:text-xs mt-1">
//               Gemini AI Assistant
//             </p>
//           </button>
//         </div>
//       </div>

//       {/* CHAT */}

//       <div
//         className="
//         flex-1

//         overflow-y-auto

//         px-4
//         sm:px-6

//         py-5
//         space-y-5
//         "
//       >
//         {/* AI */}

//         <div className="flex gap-3">
//           <img
//             src={divya}
//             alt=""
//             className="
//             w-9
//             h-9

//             sm:w-10
//             sm:h-10

//             rounded-full
//             "
//           />

//           <div>
//             <div
//               className="
//               bg-white/5

//               rounded-3xl
//               rounded-tl-md

//               px-4
//               py-3

//               sm:px-5
//               sm:py-4

//               max-w-[220px]
//               sm:max-w-[260px]
//               md:max-w-[280px]
//               "
//             >
//               <p className="text-white text-sm leading-6">
//                 Hi 👋 How can I help you today?
//               </p>
//             </div>

//             <p className="text-gray-500 text-xs mt-2">
//               2:40 PM
//             </p>
//           </div>
//         </div>

//         {/* USER */}

//         <div className="flex justify-end">
//           <div>
//             <div
//               className="
//               bg-pink-500

//               rounded-3xl
//               rounded-br-md

//               px-4
//               py-3

//               sm:px-5
//               sm:py-4

//               max-w-[220px]
//               sm:max-w-[260px]
//               md:max-w-[280px]
//               "
//             >
//               <p className="text-white text-sm">
//                 Open Weather App
//               </p>
//             </div>

//             <p className="text-right text-gray-500 text-xs mt-2">
//               2:41 PM ✓✓
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* INPUT */}

//       <div
//         className="
//         border-t
//         border-white/10

//         p-4
//         sm:p-5
//         "
//       >
//         <div
//           className="
//           flex
//           items-center
//           gap-3

//           bg-white/5

//           rounded-full

//           px-4
//           sm:px-5
//           "
//         >
//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Ask Divya..."
//             className="
//             flex-1

//             bg-transparent

//             outline-none

//             py-3
//             sm:py-4

//             text-sm
//             sm:text-base

//             text-white

//             placeholder:text-gray-500
//             "
//           />

//           <button
//             className="
//             w-10
//             h-10

//             sm:w-12
//             sm:h-12

//             rounded-full

//             bg-gradient-to-r
//             from-pink-500
//             to-fuchsia-500

//             flex
//             items-center
//             justify-center

//             hover:scale-110

//             transition
//             "
//           >
//             <Send size={18} color="white" />
//           </button>
//         </div>

//         <p className="text-center text-gray-500 text-[11px] sm:text-xs mt-3 sm:mt-4">
//           Made with 💕 by Divya
//         </p>
//       </div>
//     </div>
//   );
// }


// ui 

// import divya from "./assistant.png";
// import { useState } from "react";
// import {
//   X,
//   Minus,
//   Send,
//   Sparkles,
//   Search,
//   Code2,
//   Briefcase,
// } from "lucide-react";

// export default function ChatWindow({ setOpen }) {
//   const [message, setMessage] = useState("");

//   return (
//     <div
//       className="
//       w-[420px]
//       h-[720px]
//       rounded-[32px]
//       overflow-hidden
//       bg-[#111111]/95
//       backdrop-blur-3xl
//       border border-pink-500/30
//       shadow-[0_0_45px_rgba(236,72,153,.25)]
//       flex flex-col
//       "
//     >
//       {/* HEADER */}

//       <div className="h-24 border-b border-white/10 px-6 flex justify-between items-center">

//         <div className="flex items-center gap-4">

//           <img
//             src={divya}
//             className="w-14 h-14 rounded-full object-cover border-2 border-pink-400"
//           />

//           <div>

//             <h2 className="text-white font-bold text-xl">
//               Divya
//             </h2>

//             <div className="flex items-center gap-2">

//               <div className="w-2 h-2 rounded-full bg-green-400"></div>

//               <span className="text-xs text-gray-400">
//                 Online
//               </span>

//             </div>

//           </div>

//         </div>

//         <div className="flex gap-2">

//           <button className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center">
//             <Minus size={18} color="white" />
//           </button>

//           <button
//             onClick={() => setOpen(false)}
//             className="w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 flex items-center justify-center"
//           >
//             <X size={18} color="white" />
//           </button>

//         </div>

//       </div>

//       {/* Welcome */}

//       <div className="px-6 pt-5">

//         <div className="rounded-3xl bg-gradient-to-r from-pink-500 to-fuchsia-500 p-[1px]">

//           <div className="rounded-3xl bg-[#1b1b1b] p-5">

//             <div className="flex gap-3 items-center">

//               <Sparkles color="#ff5fa2" />

//               <h3 className="text-white font-semibold">
//                 Hello 👋
//               </h3>

//             </div>

//             <p className="text-gray-300 mt-3 text-sm leading-6">
//               I'm <span className="text-pink-400 font-semibold">Divya</span>.
//               I can help you find projects, machine coding questions,
//               interview preparation and explain concepts instantly.
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* QUICK ACTIONS */}

//       <div className="px-5 pt-5">

//         <div className="grid grid-cols-2 gap-3">

//           <button className="bg-white/5 hover:bg-pink-500 transition rounded-2xl p-4 text-left">

//             <Search className="text-pink-400 mb-2" />

//             <h4 className="text-white font-medium">
//               Find Project
//             </h4>

//             <p className="text-gray-400 text-xs mt-1">
//               Open any project instantly
//             </p>

//           </button>

//           <button className="bg-white/5 hover:bg-pink-500 transition rounded-2xl p-4 text-left">

//             <Code2 className="text-pink-400 mb-2" />

//             <h4 className="text-white font-medium">
//               Machine Coding
//             </h4>

//             <p className="text-gray-400 text-xs mt-1">
//               Search coding questions
//             </p>

//           </button>

//           <button className="bg-white/5 hover:bg-pink-500 transition rounded-2xl p-4 text-left">

//             <Briefcase className="text-pink-400 mb-2" />

//             <h4 className="text-white font-medium">
//               Interview
//             </h4>

//             <p className="text-gray-400 text-xs mt-1">
//               Prepare quickly
//             </p>

//           </button>

//           <button className="bg-white/5 hover:bg-pink-500 transition rounded-2xl p-4 text-left">

//             <Sparkles className="text-pink-400 mb-2" />

//             <h4 className="text-white font-medium">
//               Ask Anything
//             </h4>

//             <p className="text-gray-400 text-xs mt-1">
//               Gemini AI Assistant
//             </p>

//           </button>

//         </div>

//       </div>

//       {/* CHAT AREA */}

//       <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">

//         {/* AI */}

//         <div className="flex gap-3">

//           <img
//             src={divya}
//             className="w-10 h-10 rounded-full"
//           />

//           <div>

//             <div className="bg-white/5 rounded-3xl rounded-tl-md px-5 py-4 max-w-[260px]">

//               <p className="text-white text-sm leading-6">
//                 Hi 👋 How can I help you today?
//               </p>

//             </div>

//             <p className="text-gray-500 text-xs mt-2">
//               2:40 PM
//             </p>

//           </div>

//         </div>

//         {/* USER */}

//         <div className="flex justify-end">

//           <div>

//             <div className="bg-pink-500 rounded-3xl rounded-br-md px-5 py-4 max-w-[260px]">

//               <p className="text-white text-sm">
//                 Open Weather App
//               </p>

//             </div>

//             <p className="text-right text-gray-500 text-xs mt-2">
//               2:41 PM ✓✓
//             </p>

//           </div>

//         </div>

//       </div>

//       {/* INPUT */}

//       <div className="border-t border-white/10 p-5">

//         <div className="flex items-center gap-3 bg-white/5 rounded-full px-5">

//           <input
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Ask Divya..."
//             className="flex-1 bg-transparent outline-none py-4 text-white placeholder:text-gray-500"
//           />

//           <button
//             className="
//             w-12
//             h-12
//             rounded-full
//             bg-gradient-to-r
//             from-pink-500
//             to-fuchsia-500
//             flex
//             items-center
//             justify-center
//             hover:scale-110
//             transition
//             "
//           >
//             <Send size={18} color="white" />
//           </button>

//         </div>

//         <p className="text-center text-gray-500 text-xs mt-4">
//           Made with 💕 by Divya
//         </p>

//       </div>

//     </div>
//   );
// }

// OLD UI

// import { useEffect, useRef, useState } from "react";
// import useChat from "../hooks/useChat";
// import Message from "./Message";
// import TypingIndicator from "./TypingIndicator";

// export default function ChatWindow({ setOpen }) {
//   const { messages, send, loading } = useChat();

//   const [text, setText] = useState("");

//   const bottomRef = useRef();

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, loading]);

//   const handleSend = () => {
//     if (!text.trim()) return;

//     send(text);

//     setText("");
//   };

//   return (
//     <div
//       className="
//       w-[390px]
//       h-[650px]
//       rounded-[30px]
//       border
//       border-pink-500/40
//       bg-[#111111]/95
//       backdrop-blur-3xl
//       shadow-[0_0_50px_rgba(236,72,153,.25)]
//       flex
//       flex-col
//       overflow-hidden
//       "
//     >
//       {/* Header */}

//       <div
//         className="
//         h-20
//         px-6
//         border-b
//         border-white/10
//         flex
//         justify-between
//         items-center
//         "
//       >
//         <div className="flex gap-3 items-center">
//           <div
//             className="
//             w-12
//             h-12
//             rounded-full
//             bg-gradient-to-r
//             from-pink-500
//             to-fuchsia-500
//             flex
//             items-center
//             justify-center
//             text-xl
//             "
//           >
//             💖
//           </div>

//           <div>
//             <h2 className="text-white font-bold text-lg">
//               Divya
//             </h2>

//             <p className="text-green-400 text-xs">
//               ● Online
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-2">

//           <button
//             className="
//             w-10
//             h-10
//             rounded-full
//             bg-white/5
//             hover:bg-white/10
//             text-white
//             "
//           >
//             —
//           </button>

//           <button
//             onClick={() => setOpen(false)}
//             className="
//             w-10
//             h-10
//             rounded-full
//             bg-pink-500
//             hover:bg-pink-600
//             text-white
//             "
//           >
//             ✕
//           </button>

//         </div>
//       </div>

//       {/* Quick Buttons */}

//       <div className="flex gap-2 px-4 py-3 overflow-x-auto">

//         <button className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
//           React
//         </button>

//         <button className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
//           Machine Coding
//         </button>

//         <button className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">
//           Interview
//         </button>

//       </div>

//       {/* Messages */}

//       <div className="flex-1 overflow-y-auto px-4 py-3">

//         {messages.map((m, i) => (
//           <Message
//             key={i}
//             message={m}
//           />
//         ))}

//         {loading && <TypingIndicator />}

//         <div ref={bottomRef} />

//       </div>

//       {/* Input */}

//       <div
//         className="
//         p-4
//         border-t
//         border-white/10
//         "
//       >
//         <div
//           className="
//           bg-white/5
//           rounded-full
//           flex
//           items-center
//           px-4
//           "
//         >
//           <input
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             onKeyDown={(e) =>
//               e.key === "Enter" && handleSend()
//             }
//             placeholder="Ask Divya anything..."
//             className="
//             flex-1
//             bg-transparent
//             py-4
//             outline-none
//             text-white
//             placeholder:text-gray-500
//             "
//           />

//           <button
//             onClick={handleSend}
//             className="
//             w-11
//             h-11
//             rounded-full
//             bg-pink-500
//             hover:bg-pink-600
//             text-white
//             text-lg
//             "
//           >
//             ➜
//           </button>

//         </div>
//       </div>

//     </div>
//   );
// }