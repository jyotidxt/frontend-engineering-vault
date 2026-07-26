import { useEffect, useState } from "react";

export default function ProgressBarContainer() {
  const ProgressBar = ({ progress }) => {
 const [animatedprogress, setAnimatedProgress] = useState(0)
    useEffect(()=>{
        setTimeout(() =>setAnimatedProgress(progress), 100);
    }, [progress])
     
    return (
      <div className="w-full max-w-md bg-gray-200 rounded-full h-6 dark:bg-gray-700 overflow-hidden relative shadow-inner">
        <div
          className="bg-blue-600 h-full transition-all duration-500 ease-in flex items-center justify-end  text-xs font-bold inner"
          style={{ 
            transform: `translateX(${animatedprogress - 100}%)`,
            color: animatedprogress < 5 ? "black" : "white",
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    );
  };

  const bars = [0, 5, 10, 30, 40, 70, 90, 100];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Progress Bar
        </h1>
        {bars.map((val) => (
          <ProgressBar key={val} progress={val} />
        ))}
      </div>
      
    </div>
  );
}