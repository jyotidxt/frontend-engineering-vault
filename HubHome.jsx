// import React from 'react';
// import { Link } from 'react-router-dom';
// import { challenges } from './src/challengesData';
// import { interviewQuestions } from './src/interviewData';
// import  {systemDesignData} from './src/systemDesignData'

// export default function HubHome() {
//   return (
//     <div className="bg-[#FFFDF6] min-h-screen text-[#1E1E1E] px-4 sm:px-8 py-20 antialiased font-sans relative">

//       <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600"></div>

//       <div className="max-w-5xl mx-auto">

//         <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[#1E1E1E] pb-10">
//           <div>
//             <div className="inline-block text-[10px] font-mono font-black uppercase tracking-widest bg-amber-300 text-[#1E1E1E] px-2 py-0.5 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E] mb-4">
//               _Dixit
//             </div>
//             <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-[#1E1E1E]">
//               Frontend Engineering <span className="text-orange-600 underline decoration-wavy decoration-amber-400/80 decoration-2">Vault</span>
//             </h1>
//           </div>
//           <p className="text-[#555555] text-sm font-medium tracking-wide max-w-sm md:text-right leading-relaxed">
//             A frontend engineering workspace tracking my frontend practice journey with Machine coding questions and Interview Preparation modules.
//           </p>
//         </header>

//         {/* --- SECTION 1: MACHINE CODING --- */}
//         <section className="mb-20">
//           <div className="flex items-center gap-4 mb-8">
//             <h2 className="text-2xl font-black uppercase tracking-tight text-[#1E1E1E]">
//               Machine Coding Challenges
//             </h2>
//             <div className="flex-1 h-1 bg-[#1E1E1E]"></div>
//             <span className="font-mono text-xs font-bold px-2.5 py-1 bg-amber-300 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E]">
//               {challenges.length} ITEMS
//             </span>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {challenges.map((item) => (
//               <div
//                 key={item.id}
//                 className="pro-box
//                 group relative bg-[#FFFFFF] border-4 border-[#1E1E1E] rounded-2xl p-6 transition-all duration-300 ease-in-out shadow-[6px_6px_0px_#1E1E1E] hover:shadow-[12px_12px_0px_#ea580c] hover:-translate-x-1 hover:-translate-y-1 flex flex-col justify-between"
//               >
//                 <div>
//                   {/* Top Tag Row */}
//                   <div className="flex justify-between items-center mb-5">
//                     <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-red-100 text-slate-800 rounded-md border border-red-500">
//                       {item.type}
//                     </span>
//                     <span className="text-xs font-mono font-bold text-gray-400">
//                       #{item.id}
//                     </span>
//                   </div>

//                   {/* Challenge Title */}
//                   <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 group-hover:text-orange-600 transition-colors duration-200">
//                     {item.title}
//                   </h3>
//                   <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-green-100 text-slate-800 rounded-md border border-green-500 inline-block mb-3">
//                     {item.companyName}
//                   </span>

//                   {/* Description */}
//                   <p className="text-[#444444] text-xs font-medium mt-2 leading-relaxed mb-8 min-h-[48px]">
//                     {item.description}
//                   </p>
//                 </div>

//                 <Link
//                   to={item.path}
//                   className="block w-full text-center bg-orange-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] transition-all duration-200 hover:bg-amber-400 hover:text-[#1E1E1E] hover:shadow-[0px_0px_0px_#1E1E1E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
//                 >
//                   See →
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* --- SECTION 2: INTERVIEW PREPARATION --- */}
//         <section>
//           <div className="flex items-center gap-4 mb-8">
//             <h2 className="text-2xl font-black uppercase tracking-tight text-[#1E1E1E]">
//               Interview Preparation
//             </h2>
//             <div className="flex-1 h-1 bg-[#1E1E1E]"></div>
//             <span className="font-mono text-xs font-bold px-2.5 py-1 bg-orange-400 border-2 border-[#1E1E1E] ">
//               {interviewQuestions.length} ITEMS
//             </span>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {interviewQuestions.map((item) => (
//               <div
//                 key={item.id}
//                 className="pro-box
//                 group relative bg-[#FFFFFF] border-4 border-[#1E1E1E] rounded-2xl p-6 transition-all duration-300 ease-in-out shadow- hover:shadow-[12px_12px_0px_#FACC15] hover:-translate-x-1 hover:-translate-y-1 flex flex-col justify-between"
//               >
//                 <div>
//                   {/* Top Tag Row */}
//                   <div className="flex justify-between items-center mb-5">
//                     <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-red-100 text-black rounded-md border border-red-500">
//                       {item.type}
//                     </span>
//                     <span className="text-xs font-mono font-bold text-gray-400">
//                       #{item.id}
//                     </span>
//                   </div>

//                   {/* Interview Module Title */}
//                   <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 group-hover:text-amber-400 transition-colors duration-200">
//                     {item.title}
//                   </h3>
//                   <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-green-100 text-slate-800 rounded-md border border-green-500 inline-block mb-3">
//                     {item.companyName}
//                   </span>

//                   {/* Description */}
//                   <p className="text-[#444444] text-xs font-medium mt-2 leading-relaxed mb-8 min-h-[48px]">
//                     {item.description}
//                   </p>
//                 </div>

//                 <Link
//                   to={item.path}
//                   className="block w-full text-center 
//                  bg-amber-400 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] transition-all duration-200 hover:bg-orange-500  hover:text-[#1E1E1E] hover:shadow-[0px_0px_0px_#1E1E1E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
//                 >
//                   See →
//                 </Link>
//               </div>
//             ))}
// {/* --- SECTION 3 : SYSTEM DESIGN --- */}
// <section className="mt-20">
//   <div className="flex items-center gap-4 mb-8">
//     <h2 className="text-2xl font-black uppercase tracking-tight text-[#43293A]">
//       System Design Questions
//     </h2>
//     <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-pink-300 via-rose-200 to-transparent"></div>
//     <span className="font-mono text-xs font-bold px-3 py-1 bg-[#FCE7F3] text-[#9D174D] border-2 border-[#F9A8D4] rounded-full shadow-sm">
//       {systemDesignData.length} ITEMS
//     </span>
//   </div>

//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//     {systemDesignData.map((item) => (
//       <div
//         key={item.id}
//         className="group relative overflow-hidden bg-gradient-to-br from-white via-[#FFF7FA] to-[#FDF2F8] border-2 border-[#FBCFE8] rounded-3xl p-6 transition-all duration-500 ease-out shadow-[0_10px_30px_rgba(244,114,182,0.08)] hover:-translate-y-2 hover:border-[#F472B6] hover:shadow-[0_18px_45px_rgba(244,114,182,0.22)] flex flex-col justify-between"
//       >
//         <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/0 via-white/40 to-rose-100/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

//         <div className="relative z-10">
//           <div className="flex justify-between items-center mb-5">
//             <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-[#FCE7F3] text-[#BE185D] rounded-full border border-[#F9A8D4]">
//               {item.type}
//             </span>
//             <span className="text-xs font-mono font-bold text-[#D946EF]">
//               #{item.id}
//             </span>
//           </div>

//           <h3 className="text-xl font-black tracking-tight mb-3 text-[#3F2434] group-hover:text-[#BE185D] transition-colors duration-300">
//             {item.title}
//           </h3>

//           <span className="inline-block text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-[#FDF2F8] text-[#9D174D] rounded-full border border-[#FBCFE8] mb-3">
//             {item.category}
//           </span>

//           <p className="text-[#6B4A5C] text-xs font-medium leading-relaxed mb-8 min-h-[48px]">
//             {item.description}
//           </p>
//         </div>

//         <Link
//           to={item.path}
//           className="relative z-10 block w-full text-center bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white font-black py-3 rounded-2xl text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:from-[#DB2777] hover:to-[#EC4899] hover:shadow-lg hover:shadow-pink-300/40 hover:scale-[1.02] active:scale-[0.98]"
//         >
//           Explore →
//         </Link>
//       </div>
//     ))}
//   </div>
// </section>

//           </div>
//         </section>

//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { challenges } from './src/challengesData';
import { interviewQuestions } from './src/interviewData';
import { systemDesignData } from './src/systemDesignData';

export default function HubHome() {
  const [openSection, setOpenSection] = useState("");

  return (
    <div className="bg-[#FFFDF6] min-h-screen text-[#1E1E1E] px-4 sm:px-8 py-20 antialiased font-sans relative">

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600"></div>

      <div className="max-w-5xl mx-auto">

        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[#1E1E1E] pb-10">
          <div>
            <div className="inline-block text-[10px] font-mono font-black uppercase tracking-widest bg-amber-300 text-[#1E1E1E] px-2 py-0.5 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E] mb-4">
              _Dixit
            </div>

            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-[#1E1E1E]">
              Frontend Engineering{" "}
              <span className="text-orange-600 underline decoration-wavy decoration-amber-400/80 decoration-2">
                Vault
              </span>
            </h1>
          </div>

          <p className="text-[#555555] text-sm font-medium tracking-wide max-w-sm md:text-right leading-relaxed">
            A frontend engineering workspace tracking my frontend practice journey
            with Machine coding questions and Interview Preparation modules.
          </p>
        </header>

        {/* ================= MACHINE CODING ================= */}
        <section className="mb-10 border-4 border-[#1E1E1E] rounded-2xl overflow-hidden bg-white">

          <button
            onClick={() =>
              setOpenSection(openSection === "machine" ? "" : "machine")
            }
            className="w-full flex items-center gap-4 p-6 bg-[#FFF8DD] hover:bg-[#FFEFB5] transition"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Machine Coding Challenges
            </h2>

            <div className="flex-1 h-1 bg-[#1E1E1E]"></div>

            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-amber-300 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E]">
              {challenges.length} ITEMS
            </span>

            <span className="text-3xl font-black w-8 text-center">
              {openSection === "machine" ? "−" : "+"}
            </span>
          </button>

          {openSection === "machine" && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {challenges.map((item) => (
                <div
                  key={item.id}
                  className="pro-box group relative bg-[#FFFFFF] border-4 border-[#1E1E1E] rounded-2xl p-6 transition-all duration-300 ease-in-out shadow-[6px_6px_0px_#1E1E1E] hover:shadow-[12px_12px_0px_#ea580c] hover:-translate-x-1 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-red-100 text-slate-800 rounded-md border border-red-500">
                        {item.type}
                      </span>

                      <span className="text-xs font-mono font-bold text-gray-400">
                        #{item.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 group-hover:text-orange-600 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-green-100 text-slate-800 rounded-md border border-green-500 inline-block mb-3">
                      {item.companyName}
                    </span>

                    <p className="text-[#444444] text-xs font-medium mt-2 leading-relaxed mb-8 min-h-[48px]">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to={item.path}
                    className="block w-full text-center bg-orange-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] transition-all duration-200 hover:bg-amber-400 hover:text-[#1E1E1E] hover:shadow-[0px_0px_0px_#1E1E1E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
                  >
                    See →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ================= INTERVIEW ================= */}
        <section className="mb-10 border-4 border-[#1E1E1E] rounded-2xl overflow-hidden bg-white">

          <button
            onClick={() =>
              setOpenSection(openSection === "interview" ? "" : "interview")
            }
            className="w-full flex items-center gap-4 p-6 bg-[#FFF3E6] hover:bg-[#FFE6C7] transition"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight">
              Interview Preparation
            </h2>

            <div className="flex-1 h-1 bg-[#1E1E1E]"></div>

            <span className="font-mono text-xs font-bold px-2.5 py-1 bg-orange-400 border-2 border-[#1E1E1E]">
              {interviewQuestions.length} ITEMS
            </span>

            <span className="text-3xl font-black w-8 text-center">
              {openSection === "interview" ? "−" : "+"}
            </span>
          </button>

          {openSection === "interview" && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {interviewQuestions.map((item) => (
                <div
                  key={item.id}
                  className="pro-box group relative bg-[#FFFFFF] border-4 border-[#1E1E1E] rounded-2xl p-6 transition-all duration-300 ease-in-out hover:shadow-[12px_12px_0px_#FACC15] hover:-translate-x-1 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-red-100 text-black rounded-md border border-red-500">
                        {item.type}
                      </span>

                      <span className="text-xs font-mono font-bold text-gray-400">
                        #{item.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 group-hover:text-amber-400 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-green-100 text-slate-800 rounded-md border border-green-500 inline-block mb-3">
                      {item.companyName}
                    </span>

                    <p className="text-[#444444] text-xs font-medium mt-2 leading-relaxed mb-8 min-h-[48px]">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to={item.path}
                    className="block w-full text-center bg-amber-400 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] transition-all duration-200 hover:bg-orange-500 hover:text-[#1E1E1E] hover:shadow-[0px_0px_0px_#1E1E1E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
                  >
                    See →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* ================= SYSTEM DESIGN ================= */}
        <section className="border-4 border-[#FBCFE8] rounded-2xl overflow-hidden bg-white">

          <button
            onClick={() =>
              setOpenSection(openSection === "system" ? "" : "system")
            }
            className="w-full flex items-center gap-4 p-6 bg-[#FFF4F8] hover:bg-[#FFE8F2] transition"
          >
            <h2 className="text-2xl font-black uppercase tracking-tight text-[#43293A]">
              System Design Questions
            </h2>

            <div className="flex-1 h-1 rounded-full bg-gradient-to-r from-pink-300 via-rose-200 to-transparent"></div>

            <span className="font-mono text-xs font-bold px-3 py-1 bg-[#FCE7F3] text-[#9D174D] border-2 border-[#F9A8D4] rounded-full shadow-sm">
              {systemDesignData.length} ITEMS
            </span>

            <span className="text-3xl font-black w-8 text-center text-[#BE185D]">
              {openSection === "system" ? "−" : "+"}
            </span>
          </button>

          {openSection === "system" && (
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {systemDesignData.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden bg-gradient-to-br from-white via-[#FFF7FA] to-[#FDF2F8] border-2 border-[#FBCFE8] rounded-3xl p-6 transition-all duration-500 ease-out shadow-[0_10px_30px_rgba(244,114,182,0.08)] hover:-translate-y-2 hover:border-[#F472B6] hover:shadow-[0_18px_45px_rgba(244,114,182,0.22)] flex flex-col justify-between"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/0 via-white/40 to-rose-100/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-[#FCE7F3] text-[#BE185D] rounded-full border border-[#F9A8D4]">
                        {item.type}
                      </span>

                      <span className="text-xs font-mono font-bold text-[#D946EF]">
                        #{item.id}
                      </span>
                    </div>

                    <h3 className="text-xl font-black tracking-tight mb-3 text-[#3F2434] group-hover:text-[#BE185D] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <span className="inline-block text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-[#FDF2F8] text-[#9D174D] rounded-full border border-[#FBCFE8] mb-3">
                      {item.category}
                    </span>

                    <p className="text-[#6B4A5C] text-xs font-medium leading-relaxed mb-8 min-h-[48px]">
                      {item.description}
                    </p>
                  </div>

                  <Link
                    to={item.path}
                    className="relative z-10 block w-full text-center bg-gradient-to-r from-[#EC4899] to-[#F472B6] text-white font-black py-3 rounded-2xl text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:from-[#DB2777] hover:to-[#EC4899] hover:shadow-lg hover:shadow-pink-300/40 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Explore →
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>

      </div>
    </div>
  );
}