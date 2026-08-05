import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import girl from "./Assistant.png";

export default function AssistantAvatar({ open, setOpen }) {
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    if (open) {
      setShowBubble(false);
      return;
    }

    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <div className="fixed bottom-0 right-0 z-50 pointer-events-none">
      <div className="relative flex items-end pointer-events-auto">
        {/* Welcome Bubble */}
        <AnimatePresence>
          {!open && showBubble && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.35 }}
              className="
                absolute
                bottom-28
                right-16
                sm:right-20
                md:right-24
              "
            >
              <div
                className="
                  relative
                  w-52
                  rounded-3xl
                  bg-white/95
                  backdrop-blur-xl
                  border
                  border-pink-200
                  shadow-2xl
                  p-4
                "
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={18} className="text-pink-500" />
                  <span className="font-semibold text-gray-900">Hi there!</span>
                </div>

                <p className="text-sm text-gray-700 leading-6">
                  I'm <b>Divya</b>.
                  <br />
                  Tap me if you need help 🚀
                </p>

                <div
                  className="
                    absolute
                    right-5
                    -bottom-2
                    w-4
                    h-4
                    bg-white
                    rotate-45
                    border-r
                    border-b
                    border-pink-200
                  "
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Assistant Avatar Button */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-transparent border-none outline-none cursor-pointer p-0"
        >
          {/* Glow */}
          <div
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              w-28
              h-28
              rounded-full
              bg-pink-400/20
              blur-3xl
            "
          />

          <img
            src={girl}
            alt="Assistant"
            draggable={false}
            className="
              relative
              select-none
              object-contain
              w-[110px]
              sm:w-[140px]
              md:w-[170px]
              lg:w-[190px]
              translate-x-5
              sm:translate-x-8
              drop-shadow-2xl
            "
          />
        </motion.button>
      </div>
    </div>
  );
}

// import girl from "./assistant.png";
// import { Sparkles } from "lucide-react";
// import { motion } from "framer-motion";

// export default function AssistantAvatar({ open, setOpen }) {
//   return (
//     <div
//       className="
//         fixed
//         text-black
//         bottom-3
//         right-2
//         sm:bottom-4
//         sm:right-4
//         md:bottom-6
//         md:right-6
//         z-40
//         pointer-events-none
//       "
//     >
//       <div className="relative flex items-end pointer-events-auto">

//         {/* Chat Bubble */}
//         {!open && (
//           <motion.div
//             initial={{ opacity: 0, x: 15 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.35 }}
//             className="
//               sm:block

//               absolute
//               right-full
//               mr-3
//               bottom-16
//               md:bottom-20
//             "
//           >
//             <div
//               className="
//                 relative

//                 w-[220px]
//                 md:w-[260px]

//                 rounded-3xl

                
//                 backdrop-blur-xl

//                 border
//                 border-pink-200

//                 shadow-xl

//                 p-2
//               "
//             >
//               <div className="flex items-center gap-2 mb-2">
//                 <Sparkles
//                   size={18}
//                   className="text-pink-500"
//                 />

//                 <span className="font-semibold text-gray-900">
//                   Hi there!
//                 </span>
//               </div>

//               <p className="text-gray-900 leading-7">
//                 <b>I'm Divya</b>, your AI Assistant 💕
//               </p>

//               <p className="text-gray-600 text-sm mt-2">
//                 Ask me anything about your projects,
//                 interview preparation,
//                 coding or roadmap.
//               </p>

//               <div
//                 className="
//                   absolute
//                   right-[-7px]
//                   bottom-10

//                   w-4
//                   h-4

//                   rotate-45

//                   bg-white

//                   border-r
//                   border-b
//                   border-pink-200
//                 "
//               />
//             </div>
//           </motion.div>
//         )}

//         {/* Assistant */}
//         <motion.button
//           whileHover={{ scale: 1.03 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => setOpen(!open)}
//           className="relative bg-transparent border-none"
//         >
//           {/* Glow */}
//           <div
//             className="
//               absolute
//               bottom-2
//               left-1/2
//               -translate-x-1/2

//               w-16
//               h-18

//               sm:w-24
//               sm:h-24

//               bg-pink-400/20

//               rounded-full

//               blur-2xl
//             "
//           />

//           <img
//             src={girl}
//             alt="Divya"
//             draggable={false}
//             className="
//               relative

//               object-contain

//               w-[72px]
//               sm:w-[95px]
//               md:w-[120px]
//               lg:w-[150px]

//               h-auto

//               select-none

//               drop-shadow-xl
//             "
//           />
//         </motion.button>

//       </div>
//     </div>
//   );
// }


// new 

// import girl from "./assistant.png"; 
// import { Sparkles } from "lucide-react";
// import { motion } from "framer-motion";

// export default function AssistantAvatar({ open, setOpen }) {
//   return (
//    <div className="relative flex items-end justify-end w-full h-full">

//   {/* Chat Bubble */}
//   {!open && (
//     <motion.div
//       initial={{ opacity: 0, x: 20 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.5 }}
//       className="
//         absolute
//         right-[120px]
//         sm:right-[150px]
//         md:right-[180px]
//         bottom-32
//         sm:bottom-36
//         z-20
//       "
//     >
//       <div
//         className="
//           relative
//           w-[200px]
//           sm:w-[240px]
//           md:w-[270px]

//           rounded-3xl
          

//           text-black

//           px-5
//           py-4

//           border
         

//           backdrop-blur-xl

//           shadow-[0_0_40px_rgba(255,105,180,.35)]
//         "
//       >
//         <div className="flex items-center gap-2 mb-2">
//           <Sparkles size={18} fill="white" />

//           <span className="font-semibold">
//             Hi there!
//           </span>
//         </div>

//         <p className="leading-6">
//           <b>I'm Divya</b>, your AI Assistant 💕
//         </p>

//         <p className="text-sm opacity-90 mt-2">
//           Ask me anything about your projects,
//           interview preparation, coding or roadmap.
//         </p>

//         {/* Bubble Tail */}
//         <div
//           className="
//             absolute
//             right-[-8px]
//             bottom-10

//             w-4
//             h-4

//             rotate-45

//             bg-pink-500
//           "
//         />
//       </div>
//     </motion.div>
//   )}

//   {/* Girl */}
//   <motion.div
//     whileHover={{ scale: 1.03 }}
//     whileTap={{ scale: 0.97 }}
//     onClick={() => setOpen(!open)}
//     className="
//       relative
//       cursor-pointer
//       flex
//       items-end
//       justify-end
//     "
//   >
//     {/* Glow */}
//     <div
//       className="
//         absolute
//         bottom-6
//         left-1/2
//         -translate-x-1/2

//         w-32
//         h-32

//         rounded-full

//         bg-pink-500/30

//         blur-3xl

//         animate-pulse
//       "
//     />

//     <img
//       src={girl}
//       alt="Divya"
//       draggable={false}
//       className="
//         relative
//         object-contain
//         select-none

//         w-[150px]
//         sm:w-[180px]
//         md:w-[220px]
//         lg:w-[260px]

//         h-auto

//         drop-shadow-[0_30px_45px_rgba(255,105,180,.35)]
//       "
//     />
//   </motion.div>

// </div>
    
//   );
// }

// import girl from "./assistant.png";

// import { Sparkles } from "lucide-react";

// import { motion } from "framer-motion";

// export default function AssistantAvatar({
//   open,
//   setOpen,
// }) {
//   return (
//     <div className="relative flex flex-col items-center">

//       {!open && (
//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20
//           }}
//           animate={{
//             opacity: 1,
//             y: 0
//           }}
//           transition={{
//             duration: .5
//           }}
//           className="
//           absolute
//           -top-24
//           right-0
//           "
//         >

//           <div
//             className="
//             relative
//             bg-gradient-to-br
//             from-pink-500
//             to-pink-400
//             rounded-3xl
//             px-5
//             py-4
//             text-white
//             shadow-[0_0_40px_rgba(255,105,180,.45)]
//             border
//             border-pink-300/40
//             backdrop-blur-xl
//             w-[180px]
//             "
//           >

//             <div className="flex items-center gap-2">

//               <Sparkles
//                 size={18}
//                 fill="white"
//               />

//               <span className="font-semibold">
//                 Hi there!
//               </span>

//             </div>

//             <p className="mt-2 text-sm">
//               I'm <b>Divya</b>
//             </p>

//             <p className="text-xs mt-1 opacity-90 leading-5">
//               Ask me anything 💕
//             </p>

//             <div
//               className="
//               absolute
//               bottom-[-8px]
//               left-10
//               w-4
//               h-4
//               rotate-45
//               bg-pink-500
//               "
//             />

//           </div>

//         </motion.div>
//       )}

//      <motion.div
//   whileHover={{ scale: 1.03 }}
//   whileTap={{ scale: 0.97 }}
//   onClick={() => setOpen(!open)}
//   className="relative cursor-pointer flex justify-center"
// >
//   <div
//     className="
//       absolute
//       inset-0
//       rounded-full
//       blur-3xl
//       bg-pink-500/30
//       animate-pulse
//     "
//   />

//   <img
//     src={girl}
//     alt="Divya"
//     className="
//       relative
//       select-none
//       object-contain

//       w-[120px]
//       sm:w-[150px]
//       md:w-[180px]
//       lg:w-[210px]
//       xl:w-[240px]

//       h-auto

//       drop-shadow-[0_25px_35px_rgba(255,105,180,.35)]
//     "
//     draggable={false}
//   />
// </motion.div>

// {/* chat bubble */}
     
//      <motion.div
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   className="
//     absolute
//     -top-20
//     sm:-top-24
//     right-0
//     sm:right-2
//     z-20
//   "
// >
//   <div
//     className="
//       relative
//       bg-gradient-to-br
//       from-pink-500
//       to-pink-400
//       rounded-3xl

//       px-4
//       sm:px-5

//       py-3
//       sm:py-4

//       text-white

//       w-[150px]
//       sm:w-[180px]
//       md:w-[200px]

//       shadow-[0_0_40px_rgba(255,105,180,.45)]
//       border
//       border-pink-300/40
//       backdrop-blur-xl
//     "
//   >
//     ...
//   </div>
// </motion.div>

//     </div>
//   );
// }

// OLD UI

// import divya from "./assistant.png";

// export default function AssistantAvatar({ open, setOpen }) {
//   return (
//     <div className="relative flex flex-col items-center">

//       {!open && (
//         <div className="absolute -top-20 right-6 animate-bounce">

//           <div className="relative">

//             <div className="bg-pink-500 text-white rounded-2xl px-5 py-3 shadow-2xl border border-pink-300">

//               <p className="font-semibold">
//                 Hi there 👋
//               </p>

//               <p className="text-sm mt-1">
//                 I'm <b>Divya</b>
//               </p>

//               <p className="text-xs opacity-90">
//                 Ask me anything 💕
//               </p>

//             </div>

//             <div className="absolute left-8 -bottom-2 w-4 h-4 rotate-45 bg-pink-500"></div>

//           </div>

//         </div>
//       )}

//       <img
//         src={girl}
//         alt="Divya"
//         onClick={() => setOpen(!open)}
//         className="
//         w-44
//         cursor-pointer
//         hover:scale-105
//         transition
//         duration-300
//         drop-shadow-[0_0_25px_rgba(255,105,180,.5)]
//         "
//       />

//     </div>
//   );
// }