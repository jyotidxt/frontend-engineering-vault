import { useState, useEffect } from "react";

export default function AutoCompleteSearch() {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [cache, setCache] = useState({})

    const fetchData = async () => {
        //  Agar input khali hai, toh API call mat karo, direct results clear kar do
        if (!input.trim()) {
            setResults([]);
            return;
        }
        // checking if data already presnt in cached memory or not 
        else if (cache[input]) {
            console.log("Cached Returned", input)
            setResults(cache[input]);
            return;
        }

        try {
            const res = await fetch("https://dummyjson.com/recipes/search?q=" + input);
            const data = await res.json();
            setResults(data?.recipes);
            setCache((prev) => ({ ...prev, [input]: data?.recipes }));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        // using DEBOUNCING SO API CALLS ARE LESS FOR PERFORMANCE OPTIMIZATION

        // USED 300 it hits the perfect "sweet spot" between human typing speed and machine responsiveness.

        const timer = setTimeout(fetchData, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [input]);

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold text-center mb-4">Autocomplete Search</h1>

            {/* Search Input Container */}
            <div className="relative flex items-center">
                <span className="absolute left-2 text-lg">👉</span>
                <input
                    type="text"
                    placeholder="Search any recipes..."
                    className="w-full p-2 pl-20 border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => setShowResults(true)}
                    onBlur={() => setShowResults(true)}
                />

                <span className="absolute right-4 text-lg">🔍</span>
            </div>

            {/* rendering*/}

            {showResults && (<div className="absolute left-0 right-0 bg-white border border-neutral-200  shadow-xl max-h-90 overflow-y-auto z-50">
                {results?.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="flex flex-col gap-1 p-3 border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer"  >
                        <span className="text-neutral-800 font-medium text-sm">
                            {recipe.name}
                        </span>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}