import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AssistantAvatar from "./AssistantAvatar";
import ChatWindow from "./ChatWindow";
import "./assistant.css";

export default function Assistant() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="
        fixed
        bottom-3
        right-3
        sm:bottom-5
        sm:right-5
        md:bottom-6
        md:right-6
        z-[9999]
      "
    >
      <div className="relative flex items-end justify-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="chat"
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.95,
              }}
              transition={{
                duration: 0.3,
              }}
              className="
                fixed
                inset-x-3
                bottom-3
                sm:absolute
                sm:bottom-0
                sm:right-[155px]
                sm:inset-x-auto
                md:right-[180px]
                lg:right-[210px]
              "
            >
              {/* Pass open and setOpen correctly */}
              <ChatWindow open={isOpen} setOpen={setIsOpen} />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <AssistantAvatar
            open={isOpen}
            setOpen={setIsOpen}
          />
        </motion.div>
      </div>
    </div>
  );
}

// ui main

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import AssistantAvatar from "./AssistantAvatar";
// import ChatWindow from "./ChatWindow";
// import "./assistant.css";

// export default function Assistant() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="
//       fixed
//       bottom-4
//       right-4

//       sm:bottom-5
//       sm:right-5

//       md:bottom-6
//       md:right-6

//       z-[9999]
//       "
//     >
//       <div className="relative flex items-end justify-end">

//         {/* Chat Window */}

//         <AnimatePresence mode="wait">

//           {isOpen && (
//             <motion.div
//               key="chat"

//               initial={{
//                 opacity: 0,
//                 scale: .9,
//                 x: 60,
//                 y: 20,
//               }}

//               animate={{
//                 opacity: 1,
//                 scale: 1,
//                 x: 0,
//                 y: 0,
//               }}

//               exit={{
//                 opacity: 0,
//                 scale: .9,
//                 x: 60,
//                 y: 20,
//               }}

//               transition={{
//                 duration: .35,
//                 ease: "easeOut",
//               }}

//               className="
//               absolute

//               bottom-0

//               right-0

//               sm:right-[165px]

//               md:right-[190px]

//               lg:right-[210px]
//               "
//             >
//               <ChatWindow close={() => setIsOpen(false)} />
//             </motion.div>
//           )}

//         </AnimatePresence>

//         {/* Girl */}

//         <motion.div

//           initial={{
//             opacity: 0,
//             y: 50,
//           }}

//           animate={{
//             opacity: 1,
//             y: 0,
//           }}

//           transition={{
//             duration: .6,
//           }}

//           className={`
//           ${isOpen ? "hidden sm:block" : "block"}
//           `}
//         >
//           <AssistantAvatar
//             isOpen={isOpen}
//             setIsOpen={setIsOpen}
//           />
//         </motion.div>

//       </div>
//     </div>
//   );
// }


// OLD UI 

// import { useState } from "react";
// import AssistantAvatar from "./AssistantAvatar";
// import ChatWindow from "./ChatWindow";

// export default function Assistant() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-[9999] flex items-end gap-4">

//       {/* Chat Window */}

//       <div
//         className={`transition-all duration-500 origin-bottom-right ${
//           open
//             ? "opacity-100 scale-100"
//             : "opacity-0 scale-90 pointer-events-none"
//         }`}
//       >
//         <ChatWindow
//           open={open}
//           setOpen={setOpen}
//         />
//       </div>

//       {/* Avatar */}

//       <AssistantAvatar
//         open={open}
//         setOpen={setOpen}
//       />

//     </div>
//   );
// }