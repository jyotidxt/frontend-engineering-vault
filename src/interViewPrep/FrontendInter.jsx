import React, { useState } from "react";
import pdf1 from "./pdfQuestions/frontend1.pdf";
import pdf2 from "./pdfQuestions/frontend2.pdf";
const QuestionsData = [

  // IMAGE QUESTION SHEETS

  {
    title: "Frontend Interview — Set 01",
    type: "image",
    file: new URL("./imagesQuestions/img1.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 02",
    type: "image",
    file: new URL("./imagesQuestions/img2.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 03",
    type: "image",
    file: new URL("./imagesQuestions/img3.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 04",
    type: "image",
    file: new URL("./imagesQuestions/img4.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 05",
    type: "image",
    file: new URL("./imagesQuestions/img5.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 06",
    type: "image",
    file: new URL("./imagesQuestions/img6.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 07",
    type: "image",
    file: new URL("./imagesQuestions/img7.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 08",
    type: "image",
    file: new URL("./imagesQuestions/img8.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 09",
    type: "image",
    file: new URL("./imagesQuestions/img9.jpeg", import.meta.url).href,
  },
  {
    title: "Frontend Interview — Set 10",
    type: "image",
    file: new URL("./imagesQuestions/img10.jpeg", import.meta.url).href,
  },

  // PDF QUESTION SETS
  
  {
    title: "Frontend Questions & Answers — PDF 01",
    type: "pdf",
    file: pdf1,
  },

  {
    title: "Frontend Questions & Answers — PDF 02",
    type: "pdf",
    file: pdf2,
  },
];

export default function FrontendInter() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSet, setActiveSet] = useState(null);

  return (
    <div className="w-full">

   
        {/* //   MAIN FRONTEND INTERVIEW BOX */}
    

      <div
        className="rounded-3xl overflow-hidden
        border border-[#D8D0E8]
        bg-gradient-to-br from-[#FBF9FF]
        via-[#F7F4FC]
        to-[#F1ECF8]
        shadow-sm"
      >

        {/* HEADER */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6
          flex items-center justify-between
          text-left
          hover:bg-white/40
          transition-all"
        >

          <div className="flex items-center gap-4">

            {/* ICON */}

            <div
              className="w-12 h-12
              rounded-2xl
              bg-[#E8DDF3]
              border border-[#D6C6E5]
              flex items-center justify-center
              text-xl"
            >
              ✦
            </div>

            {/* TITLE */}

            <div>

              <p
                className="text-[10px]
                font-mono
                uppercase
                tracking-[0.2em]
                text-[#8A789E]
                mb-1"
              >
                Interview Archive
              </p>

              <h2
                className="text-lg
                font-bold
                text-[#30283A]"
              >
                Frontend Interview
              </h2>

              <p
                className="text-xs
                text-[#7B7185]
                mt-1"
              >
                Question sheets, interview notes & practice material
              </p>

            </div>

          </div>


          {/* OPEN / CLOSE BUTTON */}

          <div
            className={`w-9 h-9
            rounded-xl
            bg-white/80
            border border-[#DDD3E8]
            flex items-center justify-center
            text-[#756582]
            transition-transform
            ${isOpen ? "rotate-180" : ""}`}
          >
            ↓
          </div>

        </button>


            {/* CONTENT */}
        

        {isOpen && (

          <div className="px-5 pb-6">

            {/* DIVIDER */}

            <div
              className="h-px
              bg-[#DED5E8]
              mb-5"
            />


            {/* DESCRIPTION */}

            <div
              className="mb-5
              flex items-center
              justify-between"
            >

              <div>

                <p
                  className="text-xs
                  font-semibold
                  text-[#4C4257]"
                >
                  Your Frontend Question Archive
                </p>

                <p
                  className="text-[11px]
                  text-[#8A8092]
                  mt-1"
                >
                  Each sheet can contain multiple questions.
                </p>

              </div>


              {/* COUNT */}

              <span
                className="px-3 py-1.5
                rounded-full
                bg-[#EDE6F6]
                border border-[#DED2EB]
                text-[10px]
                font-mono
                font-bold
                text-[#79658D]"
              >
                {QuestionsData.length} ITEMS
              </span>

            </div>

                {/* QUESTION SHEETS GRID */}
           
            <div
              className="grid
              grid-cols-1
              sm:grid-cols-2
              gap-4"
            >

              {QuestionsData.map((item, index) => {

                const isActive = activeSet === index;

                return (

                  <div
                    key={index}
                    className="group
                    rounded-2xl
                    overflow-hidden
                    bg-white
                    border border-[#E2DCE9]
                    hover:border-[#C8B7D9]
                    hover:shadow-md
                    transition-all"
                  >
                        {/* IMAGE CARD */}.     

                    {item.type === "image" && (

                      <>

                        {/* IMAGE PREVIEW */}

                        <button
                          onClick={() =>
                            setActiveSet(
                              isActive ? null : index
                            )
                          }
                          className="w-full
                          text-left"
                        >

                          <div
                            className="relative
                            h-52
                            bg-[#F5F1F8]
                            overflow-hidden"
                          >

                            <img
                              src={item.file}
                              alt={item.title}
                              className="w-full
                              h-full
                              object-cover
                              object-top
                              group-hover:scale-[1.02]
                              transition-transform
                              duration-300"
                            />


                            {/* DARK GRADIENT */}

                            <div
                              className="absolute
                              inset-0
                              bg-gradient-to-t
                              from-[#241C2D]/70
                              via-transparent
                              to-transparent"
                            />


                            {/* SHEET NUMBER */}

                            <div
                              className="absolute
                              top-3
                              left-3
                              px-2.5
                              py-1
                              rounded-lg
                              bg-white/90
                              backdrop-blur-sm
                              text-[10px]
                              font-mono
                              font-bold
                              text-[#665573]"
                            >
                              SHEET{" "}
                              {String(index + 1).padStart(2, "0")}
                            </div>


                            {/* VIEW BUTTON */}

                            <div
                              className="absolute
                              bottom-3
                              right-3
                              px-3
                              py-1.5
                              rounded-lg
                              bg-white/90
                              backdrop-blur-sm
                              text-[10px]
                              font-semibold
                              text-[#44364D]"
                            >
                              {isActive
                                ? "Close"
                                : "View sheet"}{" "}
                              →
                            </div>

                          </div>


                          {/* CARD INFORMATION */}

                          <div className="p-4">

                            <h3
                              className="text-sm
                              font-semibold
                              text-[#30283A]"
                            >
                              {item.title}
                            </h3>


                            <div
                              className="flex
                              items-center
                              gap-2
                              mt-2"
                            >

                              <span
                                className="px-2
                                py-1
                                rounded-md
                                bg-[#F2ECF7]
                                text-[9px]
                                font-mono
                                uppercase
                                tracking-wider
                                text-[#796585]"
                              >
                                IMAGE
                              </span>

                              <span
                                className="text-[10px]
                                text-[#968B9D]"
                              >
                                Multiple questions
                              </span>

                            </div>

                          </div>

                        </button>


                        {/* FULL IMAGE */}

                        {isActive && (

                          <div
                            className="border-t
                            border-[#E5DFEA]
                            bg-[#F8F5FA]
                            p-4"
                          >

                            <div
                              className="rounded-xl
                              overflow-hidden
                              border border-[#DED6E6]
                              bg-white
                              shadow-sm"
                            >

                              <img
                                src={item.file}
                                alt={`${item.title} full view`}
                                className="w-full
                                h-auto"
                              />

                            </div>


                            <button
                              onClick={() =>
                                setActiveSet(null)
                              }
                              className="mt-3
                              w-full
                              py-2.5
                              rounded-xl
                              bg-[#EDE7F3]
                              hover:bg-[#E3D9EC]
                              text-[10px]
                              font-mono
                              font-bold
                              uppercase
                              tracking-wider
                              text-[#695675]
                              transition-all"
                            >
                              Close Sheet
                            </button>

                          </div>

                        )}

                      </>

                    )}


                    {/* =================================
                        PDF CARD
                    ================================= */}

                    {item.type === "pdf" && (

                      <>

                        {/* PDF HEADER */}

                        <button
                          onClick={() =>
                            setActiveSet(
                              isActive ? null : index
                            )
                          }
                          className="w-full
                          p-5
                          text-left
                          hover:bg-[#FBF9FD]
                          transition-all"
                        >

                          <div
                            className="flex
                            items-center
                            gap-4"
                          >

                            {/* PDF ICON */}

                            <div
                              className="w-12
                              h-12
                              rounded-2xl
                              bg-[#F1E7F6]
                              border border-[#E0D1E9]
                              flex items-center
                              justify-center
                              text-xl"
                            >
                              📄
                            </div>


                            {/* PDF INFO */}

                            <div className="flex-1">

                              <p
                                className="text-[9px]
                                font-mono
                                uppercase
                                tracking-wider
                                text-[#967FA5]
                                mb-1"
                              >
                                PDF DOCUMENT
                              </p>

                              <h3
                                className="text-sm
                                font-semibold
                                text-[#30283A]"
                              >
                                {item.title}
                              </h3>

                              <p
                                className="text-[10px]
                                text-[#968B9D]
                                mt-1"
                              >
                                Questions & Answers
                              </p>

                            </div>


                            {/* ARROW */}

                            <div
                              className={`w-8
                              h-8
                              rounded-lg
                              bg-[#F3EDF7]
                              flex items-center
                              justify-center
                              text-[#796585]
                              transition-transform
                              ${isActive
                                ? "rotate-180"
                                : ""}`}
                            >
                              ↓
                            </div>

                          </div>

                        </button>


                        {/* PDF VIEWER */}

                        {isActive && (

                          <div
                            className="border-t
                            border-[#E5DFEA]
                            bg-[#F8F5FA]
                            p-4"
                          >

                            <div
                              className="bg-white
                              border border-[#DED6E6]
                              rounded-2xl
                              overflow-hidden
                              shadow-sm"
                            >

                              {/* PDF TOP BAR */}

                              <div
                                className="p-4
                                flex
                                items-center
                                justify-between
                                border-b
                                border-[#E5DFEA]"
                              >

                                <div
                                  className="flex
                                  items-center
                                  gap-3"
                                >

                                  <div
                                    className="w-9
                                    h-9
                                    rounded-xl
                                    bg-[#EEE6F5]
                                    flex items-center
                                    justify-center"
                                  >
                                    📄
                                  </div>

                                  <div>

                                    <p
                                      className="text-xs
                                      font-semibold
                                      text-[#30283A]"
                                    >
                                      {item.title}
                                    </p>

                                    <p
                                      className="text-[9px]
                                      text-[#8A8092]
                                      mt-0.5"
                                    >
                                      Complete PDF
                                    </p>

                                  </div>

                                </div>


                                {/* OPEN PDF */}

                                <a
                                  href={item.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="px-3
                                  py-2
                                  rounded-lg
                                  bg-[#30283A]
                                  text-white
                                  text-[10px]
                                  font-semibold
                                  hover:bg-[#44364D]
                                  transition-all"
                                >
                                  Open ↗
                                </a>

                              </div>


                              {/* PDF */}

                              <iframe
                                src={item.file}
                                title={item.title}
                                className="w-full
                                h-[1200px]
                                border-0
                                bg-white"
                              />

                            </div>


                            {/* CLOSE */}

                            <button
                              onClick={() =>
                                setActiveSet(null)
                              }
                              className="mt-3
                              w-full
                              py-2.5
                              rounded-xl
                              bg-[#EDE7F3]
                              hover:bg-[#E3D9EC]
                              text-[10px]
                              font-mono
                              font-bold
                              uppercase
                              tracking-wider
                              text-[#695675]
                              transition-all"
                            >
                              Close PDF
                            </button>

                          </div>

                        )}

                      </>

                    )}

                  </div>

                );

              })}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}


// import React, { useState } from "react";

// const QuestionsData = [
//   {
//     title: "Frontend Interview — Set 01",
//     type: "image",
//     file: new URL("./imagesQuestions/img1.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 02",
//     type: "image",
//     file: new URL("./imagesQuestions/img2.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 03",
//     type: "image",
//     file: new URL("./imagesQuestions/img3.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 04",
//     type: "image",
//     file: new URL("./imagesQuestions/img4.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 05",
//     type: "image",
//     file: new URL("./imagesQuestions/img5.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 06",
//     type: "image",
//     file: new URL("./imagesQuestions/img6.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 07",
//     type: "image",
//     file: new URL("./imagesQuestions/img7.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 08",
//     type: "image",
//     file: new URL("./imagesQuestions/img8.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 09",
//     type: "image",
//     file: new URL("./imagesQuestions/img9.jpeg", import.meta.url).href,
//   },
//   {
//     title: "Frontend Interview — Set 10",
//     type: "image",
//     file: new URL("./imagesQuestions/img10.jpeg", import.meta.url).href,
//   },
//    {
//     title: "Frontend Interview — Set 11",
//     type: "image",
//     file: new URL("./imagesQuestions/img11.jpeg", import.meta.url).href,
//   },
//     // PDF QUESTION SETS
// {
//   title: "Frontend Questions & Answers — PDF 01",
//   type: "pdf",
//   file: new URL(
//     "./pdfQuestions/frontend1.pdf",
//     import.meta.url
//   ).href,
// },
// {
//   title: "Frontend Questions & Answers — PDF 02",
//   type: "pdf",
//   file: new URL(
//     "./pdfQuestions/frontend2.pdf",
//     import.meta.url
//   ).href,
// },
// ];
// const pdf1 = new URL(
//   "./pdfQuestions/frontend1.pdf",
//   import.meta.url
// ).href;
// export default function FrontendInter() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSet, setActiveSet] = useState(null);

//   return (
//     <div className="w-full">

//       {/* MAIN FRONTEND ARCHIVE CARD */}
//       <div
//         className="rounded-3xl overflow-hidden border border-[#D8D0E8]
//         bg-gradient-to-br from-[#FBF9FF] via-[#F7F4FC] to-[#F2EDF9]
//         shadow-sm"
//       >

//         {/* HEADER */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-full p-6 flex items-center justify-between
//           text-left hover:bg-white/40 transition-all"
//         >
//           <div className="flex items-center gap-4">

//             {/* ICON */}
//             <div
//               className="w-12 h-12 rounded-2xl
//               bg-[#E9E0F5] border border-[#D9CBEA]
//               flex items-center justify-center text-xl"
//             >
//               ✦
//             </div>

//             <div>
//               <div
//                 className="text-[10px] font-mono uppercase
//                 tracking-[0.2em] text-[#8A789E] mb-1"
//               >
//                 Interview Archive
//               </div>

//               <h2 className="text-lg font-bold text-[#30283A]">
//                 Frontend Interview
//               </h2>

//               <p className="text-xs text-[#7B7185] mt-1">
//                 Question sheets, interview notes & practice material
//               </p>
//             </div>
//           </div>

//           {/* OPEN BUTTON */}
//           <div
//             className={`w-9 h-9 rounded-xl bg-white/80
//             border border-[#DDD3E8] flex items-center justify-center
//             text-[#756582] transition-transform ${
//               isOpen ? "rotate-180" : ""
//             }`}
//           >
//             ↓
//           </div>
//         </button>


//         {/* CONTENT */}
//         {isOpen && (
//           <div className="px-5 pb-6">

//             {/* SMALL DIVIDER */}
//             <div className="h-px bg-[#DED5E8] mb-5" />

//             {/* DESCRIPTION */}
//             <div className="mb-5 flex items-center justify-between">

//               <div>
//                 <p
//                   className="text-xs font-semibold
//                   text-[#4C4257]"
//                 >
//                   Your Frontend Question Sheets
//                 </p>

//                 <p className="text-[11px] text-[#8A8092] mt-1">
//                   Each sheet may contain multiple questions.
//                 </p>
//               </div>

//               <span
//                 className="px-3 py-1.5 rounded-full
//                 bg-[#EDE6F6] border border-[#DED2EB]
//                 text-[10px] font-mono font-bold
//                 text-[#79658D]"
//               >
//                 {QuestionsData.length} SHEETS
//               </span>

//             </div>


//             {/* QUESTION SHEETS */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//               {QuestionsData.map((item, index) => {

//                 const isActive = activeSet === index;

//                 return (
//                   <div
//                     key={index}
//                     className="group rounded-2xl overflow-hidden
//                     bg-white border border-[#E2DCE9]
//                     hover:border-[#C8B7D9]
//                     hover:shadow-md transition-all"
//                   >

//                     {/* IMAGE PREVIEW */}
//                     <button
//                       onClick={() =>
//                         setActiveSet(
//                           isActive ? null : index
//                         )
//                       }
//                       className="w-full text-left"
//                     >

//                       <div
//                         className="relative h-52 bg-[#F5F1F8]
//                         overflow-hidden"
//                       >

//                         <img
//                           src={item.file}
//                           alt={item.title}
//                           className="w-full h-full object-cover
//                           object-top
//                           group-hover:scale-[1.02]
//                           transition-transform duration-300"
//                         />

//                         {/* OVERLAY */}
//                         <div
//                           className="absolute inset-0
//                           bg-gradient-to-t
//                           from-[#241C2D]/70
//                           via-transparent to-transparent"
//                         />

//                         {/* SET NUMBER */}
//                         <div
//                           className="absolute top-3 left-3
//                           px-2.5 py-1 rounded-lg
//                           bg-white/90 backdrop-blur-sm
//                           text-[10px] font-mono font-bold
//                           text-[#665573]"
//                         >
//                           SHEET {String(index + 1).padStart(2, "0")}
//                         </div>

//                         {/* VIEW */}
//                         <div
//                           className="absolute bottom-3 right-3
//                           px-3 py-1.5 rounded-lg
//                           bg-white/90 backdrop-blur-sm
//                           text-[10px] font-semibold
//                           text-[#44364D]"
//                         >
//                           {isActive ? "Close" : "View sheet"} →
//                         </div>

//                       </div>


//                       {/* CARD INFO */}
//                       <div className="p-4">

//                         <h3
//                           className="text-sm font-semibold
//                           text-[#30283A]"
//                         >
//                           {item.title}
//                         </h3>

//                         <div
//                           className="flex items-center gap-2
//                           mt-2"
//                         >
//                           <span
//                             className="px-2 py-1 rounded-md
//                             bg-[#F2ECF7]
//                             text-[9px] font-mono
//                             uppercase tracking-wider
//                             text-[#796585]"
//                           >
//                             {item.type}
//                           </span>

//                           <span
//                             className="text-[10px]
//                             text-[#968B9D]"
//                           >
//                             Multiple questions inside
//                           </span>
//                         </div>

//                       </div>

//                     </button>


//                     {/* FULL IMAGE */}
//                     {isActive && (
//                       <div
//                         className="border-t border-[#E5DFEA]
//                         bg-[#F8F5FA] p-4"
//                       >

//                         <div
//                           className="rounded-xl overflow-hidden
//                           border border-[#DED6E6]
//                           bg-white shadow-sm"
//                         >
//                           <img
//                             src={item.file}
//                             alt={`${item.title} full view`}
//                             className="w-full h-auto"
//                           />
//                         </div>

//                         <button
//                           onClick={() => setActiveSet(null)}
//                           className="mt-3 w-full py-2.5
//                           rounded-xl bg-[#EDE7F3]
//                           hover:bg-[#E3D9EC]
//                           text-[10px] font-mono
//                           font-bold uppercase
//                           tracking-wider text-[#695675]
//                           transition-all"
//                         >
//                           Close Sheet
//                         </button>

//                       </div>
//                     )}

//                   </div>
//                 );
//               })}

//             </div>

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }