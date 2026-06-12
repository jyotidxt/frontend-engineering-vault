import react, { useEffect, useState } from 'react'
import TabProfile from './components/TabProfile';
import TabInterest from './components/TabInterest';
import TabSettings from './components/TabSettings';

export default function TabFormComponent() {
    const [data, setData] = useState({
        interests: ["coding", "music", "JavaScript"],
        theme: "dark",
    })

    const tabs = [
        { name: "Profile", component: TabProfile },
        { name: "Interest", component: TabInterest },
        { name: "Settings", component: TabSettings },
    ];

    // to change tabs from one to another on click on any tab
    const [activeTab, setActiveTab] = useState(0);
    const ActiveTabComponent = tabs[activeTab].component;

    // handle buttons to change tabs
    const handleNextClick = () => {
        setActiveTab((prev) => prev + 1);
    }
    const handlePrevClick = () => {
        setActiveTab((prev) => prev - 1);
    }
    const handleSubmitClick = () => {
        alert("Submitted");
    }

    return (
        <>
            <h1 className="text-center text-3xl font-bold text-stone-800 my-6">
                TabFormComponent
            </h1>

            <div className="w-full max-w-md mx-auto bg-white border border-neutral-200 rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)]">

                <div className="flex flex-row items-center gap-1 border-b border-neutral-100 pb-5 mb-6">
                    {tabs.map((t, id) => {
                        const isActive = activeTab === id;
                        return (
                            <div
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`flex-1 text-center text-xs font-bold uppercase tracking-wider py-2.5 px-2 rounded-xl cursor-pointer transition-all duration-200 select-none
                                    ${isActive
                                        ? 'bg-white-900 text-black shadow-sm'
                                        : 'text-neutral-400 hover:text-neutral-800 hover:bg-neutral-50'
                                    }`}
                            >
                                {t.name}
                            </div>
                        );
                    })}
                </div>

                {/* Main Component Content Box */}
                <div className="w-full border border-black p-4 min-h-[300px] bg-white">
                    <ActiveTabComponent data={data} setData={setData} />
                </div>
                <div>
                    {activeTab > 0 && <button
                        type="button"
                        onClick={handlePrevClick}
                        className=" bg-neutral-900 hover:bg-neutral-800 text-white font-medium p-3 rounded-lg text-xs 
                uppercase  shadow-sm transition duration-200 ease-in-out cursor-pointer text-center m-3"
                    >
                        Prev
                    </button>}
                    {activeTab < tabs.length - 1
                        && <button
                            type="button"
                            onClick={handleNextClick}
                            className=" bg-neutral-900 hover:bg-neutral-800 text-white font-medium p-3 rounded-lg text-xs 
                uppercase  shadow-sm transition duration-200 ease-in-out cursor-pointer text-center m-3"
                        >
                            Next
                        </button>}
                    {activeTab === tabs.length - 1 && <button
                        type="button"
                        onClick={handleSubmitClick}
                        className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-sm transition duration-200 ease-in-out cursor-pointer text-center"
                    >
                        Submit
                    </button>}
                </div>
            </div>
        </>
    );
}