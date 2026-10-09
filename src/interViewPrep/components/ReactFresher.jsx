// import { challenges } from '/src/challengesData';
// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// export default function ReactFresher (){
//     const [openSection, setOpenSection] = useState("");
//     return ( 
   
//   <>
//   <h3>React Fresher Interview Questions</h3>
//   <p>Here you will find many beggginer to advance level of top coding questions which are asked in top tech companies and also in startups...</p>

//  <section className="mb-10 border-4 border-[#1E1E1E] rounded-2xl overflow-hidden bg-white">

//           <button
//             onClick={() =>
//               setOpenSection(openSection === "machine" ? "" : "machine")
//             }
//             className="w-full flex items-center gap-4 p-6 bg-[#FFF8DD] hover:bg-[#FFEFB5] transition"
//           >
//             <h2 className="text-2xl font-black uppercase tracking-tight">
//               Begginer React Coding Questions
//             </h2>

//             <div className="flex-1 h-1 bg-[#1E1E1E]"></div>

//             <span className="font-mono text-xs font-bold px-2.5 py-1 bg-amber-300 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E]">
//               {challenges.length} ITEMS
//             </span>

//             <span className="text-3xl font-black w-8 text-center">
//               {openSection === "machine" ? "−" : "+"}
//             </span>
//           </button>
  
//   </section>

//      <section className="mb-10 border-4 border-[#1E1E1E] rounded-2xl overflow-hidden bg-white">
    
//               <button
//                 onClick={() =>
//                   setOpenSection(openSection === "machine" ? "" : "machine")
//                 }
//                 className="w-full flex items-center gap-4 p-6 bg-[#FFF8DD] hover:bg-[#FFEFB5] transition"
//               >
//                 <h2 className="text-2xl font-black uppercase tracking-tight">
//                   Intermediate Coding Questions
//                 </h2>
    
//                 <div className="flex-1 h-1 bg-[#1E1E1E]"></div>
    
//                 <span className="font-mono text-xs font-bold px-2.5 py-1 bg-amber-300 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E]">
//                   {challenges.id} ITEMS
//                 </span>
    
//                 <span className="text-3xl font-black w-8 text-center">
//                   {openSection === "machine" ? "−" : "+"}
//                 </span>
//               </button>
//       { (<div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//               {challenges.filter((item) => [1, 6].includes(item.id)).map((item) => (
//                 <div
//                   key={item.id}
//                   className="pro-box group relative bg-[#FFFFFF] border-4 border-[#1E1E1E] rounded-2xl p-6 transition-all duration-300 ease-in-out shadow-[6px_6px_0px_#1E1E1E] hover:shadow-[12px_12px_0px_#ea580c] hover:-translate-x-1 hover:-translate-y-1 flex flex-col justify-between"
//                 >
//                   <div>
//                     <div className="flex justify-between items-center mb-5">
//                       <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-red-100 text-slate-800 rounded-md border border-red-500">
//                         {item.type}
//                       </span>

//                       <span className="text-xs font-mono font-bold text-gray-400">
//                         #{item.id}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 group-hover:text-orange-600 transition-colors duration-200">
//                       {item.title}
//                     </h3>

//                     <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-green-100 text-slate-800 rounded-md border border-green-500 inline-block mb-3">
//                       {item.companyName}
//                     </span>

//                     <p className="text-[#444444] text-xs font-medium mt-2 leading-relaxed mb-8 min-h-[48px]">
//                       {item.description}
//                     </p>
//                   </div>

//                   <Link
//                     to={item.path}
//                     className="block w-full text-center bg-orange-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] transition-all duration-200 hover:bg-amber-400 hover:text-[#1E1E1E] hover:shadow-[0px_0px_0px_#1E1E1E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
//                   >
//                     See →
//                   </Link>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//   </>
//    )
// }

import { challenges } from "/src/challengesData";
import { useState } from "react";
import { Link } from "react-router-dom";

const selectedIds = [1, 6];

export default function ReactFresher() {
  const [openSection, setOpenSection] = useState("");

  // Only show the challenges selected for this page
  const intermediateChallenges = challenges.filter((item) =>
    selectedIds.includes(item.id)
  );


  return (
    <main className="min-h-screen bg-[#F7F8FC] px-4 py-10 text-slate-900 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Page heading */}
        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-700 shadow-sm">
            <span> Your React Interview Prep</span>
          </div>

          <h1 className="max-w-3xl text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            React Fresher{" "}
            <span className="text-indigo-600">Coding Questions</span>
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Practice React concepts, strengthen your problem-solving skills,
            and prepare for technical interviews with hands-on coding
            challenges from beginner to intermediate level.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-medium text-slate-500">
                Available on this page
              </p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">
                {intermediateChallenges.length}
                <span className="ml-2 text-sm font-semibold text-slate-400">
                  questions
                </span>
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
              <p className="text-xs font-medium text-slate-500">
                Your practice journey
              </p>
              <p className="mt-1 text-base font-bold text-indigo-700">
                Learn · Build · Improve
              </p>
            </div>
          </div>
        </header>

        {/* Beginner section */}
        <section className="mb-7 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
          <button
            type="button"
            aria-expanded={openSection === "beginner"}
            aria-controls="beginner-content"
             onClick={() =>
    setOpenSection(openSection === "beginner" ? "" : "beginner")}
            className="group flex w-full items-center gap-4 p-5 text-left transition-colors duration-300 hover:bg-indigo-50/50 sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-2xl">
              🌱
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
                Level 01 · Start here
              </p>
              <h2 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-xl">
                Beginner React Coding Questions
              </h2>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Build your fundamentals one question at a time.
              </p>
            </div>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl font-medium text-slate-600 transition-all duration-300 group-hover:border-indigo-200 group-hover:text-indigo-600">
              {openSection === "beginner" ? "−" : "+"}
            </span>
          </button>

          {openSection === "beginner" && (
            <div
              id="beginner-content"
              className="border-t border-slate-100 p-5 sm:p-6"
            >
              <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center sm:p-10">
                <span className="text-3xl">📝</span>
                <h3 className="mt-3 font-bold text-slate-800">
                  Your beginner challenges go here
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                  Add your own beginner questions and coding exercises inside
                  this section whenever you are ready.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Intermediate section */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
          <button
            type="button"
            aria-expanded={openSection === "intermediate"}
            aria-controls="intermediate-content"
     onClick={() =>
    setOpenSection(openSection === "intermediate" ? "" : "intermediate")
  }
            className="group flex w-full items-center gap-4 p-5 text-left transition-colors duration-300 hover:bg-indigo-50/50 sm:p-6"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-2xl">
              🚀
            </div>

            <div className="min-w-0 flex-1">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-700">
                Level 02 · Keep building
              </p>
              <h2 className="text-base font-extrabold tracking-tight text-slate-900 sm:text-xl">
                Intermediate Coding Questions
              </h2>
              <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                Explore practical challenges and interview-style problems.
              </p>
            </div>

            <span className="shrink-0 rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700">
              {intermediateChallenges.length}{" "}
              {intermediateChallenges.length === 1 ? "ITEM" : "ITEMS"}
            </span>

            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-xl font-medium text-slate-600 transition-all duration-300 group-hover:border-indigo-200 group-hover:text-indigo-600">
              {openSection === "intermediate" ? "−" : "+"}
            </span>
          </button>

          {openSection === "intermediate" && (
            <div
              id="intermediate-content"
              className="border-t border-slate-100 bg-[#FAFBFF] p-5 sm:p-6"
            >
              {intermediateChallenges.length > 0 ? (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {intermediateChallenges.map((item) => (
                    <article
                      key={item.id}
                      className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60 sm:p-6"
                    >
                      <div>
                        <div className="mb-5 flex items-center justify-between gap-3">
                          <span className="rounded-lg bg-indigo-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700">
                            {item.type}
                          </span>

                          <span className="font-mono text-xs font-semibold text-slate-400">
                            #{item.id}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold leading-snug text-slate-900 transition-colors duration-200 group-hover:text-indigo-700">
                          {item.title}
                        </h3>

                        <span className="mt-3 inline-block rounded-md bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                          {item.companyName}
                        </span>

                        <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>

                      <Link
                        to={item.path}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-100 active:scale-[0.98]"
                      >
                        Explore challenge
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="rounded-xl bg-white p-6 text-center text-sm text-slate-500">
                  No challenges selected yet. Add IDs to selectedIds to display
                  your questions here.
                </p>
              )}
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-xs font-medium text-slate-400">
            Made for curious minds and future React developers ✨
          </p>
        </footer>
      </div>
    </main>
  );
}