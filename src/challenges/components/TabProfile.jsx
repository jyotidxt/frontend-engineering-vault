
import React, { useState } from 'react';

const TabProfile = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
     
    function handleOnChange(type, value) {
        if (type === "name") {
            setName(value);
        } 
        else if (type === "email") {
            setEmail(value);
        } 
        else if (type === "age") {
            if (value === "") {
                setAge("");
                return;
            }

            const numericAge = Number(value);
            if (numericAge < 18 && value.length >= 2) {
                alert("You are not eligible");
                setAge(""); // Input reset kar do
                return; 
            }
            
            setAge(value);
        }
    }
    
    function handleOnSubmit(e) {
        e.preventDefault(); // Browser reload hone se roko
        
        if (Number(age) < 18) {
            alert("Submission failed: Age must be 18 or above.");
            return;
        }

        alert(`Form Submitted successfully! \nName: ${name}\nAge: ${age}\nEmail: ${email}`);
    }

    return (
        
        <form onSubmit={handleOnSubmit} className="w-full space-y-5">
            {/* Name Field */}
            <div className="flex flex-col gap-1.5">

                <label htmlFor="name" className="text-xs font-semibold tracking-wide text-neutral-700">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    required
                    onChange={(e) => handleOnChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-3.5 py-2 text-sm bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-lg placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all"
                />
            </div>

            {/* Age Field */}
            <div className="flex flex-col gap-1.5">

                <label htmlFor="age" className="text-xs font-semibold tracking-wide text-neutral-700 flex items-center gap-0.5">
                    Age <span className="text-red-500">*</span>
                </label>
                <input
                    id="age"
                    type="number"
                    value={age}
                    onChange={(e) => handleOnChange("age", e.target.value)}
                    required
                    placeholder="e.g. 24"
                    className="w-full px-3.5 py-2 text-sm bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-lg placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all"
                />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-1.5">

                <label htmlFor="email" className="text-xs font-semibold tracking-wide text-neutral-700">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    required
                    onChange={(e) => handleOnChange("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3.5 py-2 text-sm bg-neutral-50 text-neutral-900 border border-neutral-200 rounded-lg placeholder-neutral-400 focus:outline-none focus:border-neutral-400 focus:bg-white transition-all"
                />
            </div>

            <button
                type="submit" 
                className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-2.5 rounded-lg text-xs uppercase tracking-wider shadow-sm transition duration-200 ease-in-out cursor-pointer text-center"
            >
                Submit & Continue
            </button>
        </form>
    );
};

export default TabProfile;