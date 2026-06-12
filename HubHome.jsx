import React from 'react';
import { Link } from 'react-router-dom';
import { challenges } from './src/challengesData';

export default function HubHome() {
  return (
    /* 🎨 The Fresh Butter Studio: A beautiful, warm milk/cream high-contrast crisp canvas */
    <div className="bg-[#FFFDF6] min-h-screen text-[#1E1E1E] px-4 sm:px-8 py-20 antialiased font-sans relative">
      
      {/* Decorative top grid accent for that high-end structural studio architecture */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600"></div>

      <div className="max-w-5xl mx-auto">
        
        {/* Header: Crisp, Bold, Independent Studio Aesthetics */}
        <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-[#1E1E1E] pb-10">
          <div>
            <div className="inline-block text-[10px] font-mono font-black uppercase tracking-widest bg-amber-300 text-[#1E1E1E] px-2 py-0.5 border-2 border-[#1E1E1E] shadow-[2px_2px_0px_#1E1E1E] mb-4">
              ✨ VERSION 2.0 // LIVE PRODUCTION
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase text-[#1E1E1E]">
              Frontend Engineering <span className="text-orange-600 underline decoration-wavy decoration-amber-400/80 decoration-2">Vault</span>
            </h1>
          </div>
          <p className="text-[#555555] text-sm font-medium tracking-wide max-w-sm md:text-right leading-relaxed">
            A frontend engineering workspace tracking my frontend practice journey with Machine coding quetsions and some Projects.              
          </p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {challenges.map((item) => (
            <div 
              key={item.id} 
              className="group relative bg-[#FFFFFF] border-4 border-[#1E1E1E] rounded-2xl p-6 transition-all duration-300 ease-in-out shadow-[6px_6px_0px_#1E1E1E] hover:shadow-[12px_12px_0px_#ea580c] hover:-translate-x-1 hover:-translate-y-1"
            >
              {/* Top Tag Row */}
              <div className="flex justify-between items-center mb-5">
                <span className="text-[10px] uppercase font-mono font-black tracking-wider px-2.5 py-1 bg-[#FFFDF6] text-[#1E1E1E] rounded-md border-2 border-[#1E1E1E]">
                  {item.type}
                </span>
                <span className="text-xs font-mono font-bold text-gray-400">
                  #{item.id}
                </span>
              </div>
              
              {/* Challenge Title */}
              <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 group-hover:text-orange-600 transition-colors duration-200">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#444444] text-xs font-medium leading-relaxed mb-8 min-h-[48px]">
                {item.description}
              </p>
              
              <Link 
                to={item.path} 
                className="block w-full text-center bg-orange-500 text-white font-black py-3 rounded-xl text-xs uppercase tracking-widest border-2 border-[#1E1E1E] shadow-[3px_3px_0px_#1E1E1E] transition-all duration-200 hover:bg-amber-400 hover:text-[#1E1E1E] hover:shadow-[0px_0px_0px_#1E1E1E] hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1"
              >
                See →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}