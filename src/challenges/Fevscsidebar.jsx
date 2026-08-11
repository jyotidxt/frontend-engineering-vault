// import { useEffect, useState, useRef } from 'react'
// import json from '/data.json';

// function Fevscsidebar() {
//     const [data, setData] = useState(json);

//     // Render list of objects
//     const List = ({ list }) => {
//         return( 
          
//             <div className="p-2">
//                     {
//                         list.map(node => (
//                             <div key={node.id}>
//                                 <span>{node.name}</span>
//                                 {/* rendering children same as it is also list of objects */}
//                                    {node?.children &&  <List list={node.children}/>}
//                             </div>
//                         ))}
//                 </div>          
//     )}
//     return (
//         <>
//             <div>
//                 <h1>VS Code Sidebar UI</h1>
// <List list={data} />
//             </div>
//         </>
//     )
// }

// export default Fevscsidebar;

import { useState } from 'react';
import json from '/data.json';
import { ChevronRight, ChevronDown, File, Folder } from 'lucide-react'; // Optional: for icons (or use SVG/text)

function Fevscsidebar() {
    const [data, setData] = useState(json);

    // Recursive List Component for nested tree nodes
    const List = ({ list, depth = 0 }) => {
        return (
            <div className="flex flex-col">
                {list.map((node) => {
                    const [isOpen, setIsOpen] = useState(true);
                    const hasChildren = node?.children && node.children.length > 0;

                    return (
                        <div key={node.id} className="select-none">
                            {/* Node Row */}
                            <div 
                                onClick={() => hasChildren && setIsOpen(!isOpen)}
                                className={`flex items-center gap-1.5 py-1 px-2 hover:bg-[#2a2d2e] cursor-pointer text-sm text-[#cccccc] ${
                                    depth > 0 ? 'ml-3' : ''
                                }`}
                            >
                                {/* Arrow / Indentation helper */}
                                {hasChildren ? (
                                    <span className="text-xs text-[#858585]">
                                        {isOpen ? '▼' : '▶'}
                                    </span>
                                ) : (
                                    <span className="w-3" /> /* Spacer for alignment */
                                )}

                                <span className="truncate">{node.name}</span>
                            </div>

                            {/* Render Children Recursively */}
                            {hasChildren && isOpen && (
                                <List list={node.children} depth={depth + 1} />
                            )}
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <aside className="w-64 h-screen bg-[#252526] text-[#cccccc] flex flex-col border-r border-[#333333] font-sans">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#bbbbbb] border-b border-[#333333]">
                <span>Explorer</span>
                <span className="cursor-pointer hover:text-white">...</span>
            </div>

            {/* Sidebar Content Tree */}
            <div className="flex-1 overflow-y-auto py-2">
                <List list={data} />
            </div>
        </aside>
    );
}

export default Fevscsidebar;