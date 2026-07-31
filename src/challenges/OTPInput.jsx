import { useEffect, useState, useRef } from 'react'
// const OTP_DIGITS_COUNT = 5;
function OTPInput() {
    const OTP_DIGITS_COUNT = 5;

    const [inpArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill(""))

    // creating refrence with help of react
    const refArr = useRef([]);
    // to focus on first input box whenever page refresh 
    useEffect(() => {
        refArr.current[0]?.focus();
    }, [])

    const handleOnChange = (value, index) => {

        // Prevent spaces or non-numeric characters
        if (value.includes(" ") || isNaN(value)) return;

        console.log(value);

        const newVal = value.trim()
        // creating refrence for array copy
        const newArr = [...inpArr];
        // take only the last typed characters
        newArr[index] = newVal.slice(-1);
        setInputArr(newArr);

        // moving focus +1 from current index after user type any value

        if (newVal && index < OTP_DIGITS_COUNT - 1) {
            refArr.current[index + 1]?.focus();
        }
    }

    //  if user backspacethen to move -1 index
    const handleOnKeyDown = (e, index) => {
        if (!e.target.value && e.key === "Backspace") {

            refArr.current[index - 1]?.focus();
        }
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-950/5 backdrop-blur-xs">
            <div className='flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl shadow-xl max-w-sm w-full border border-slate-200'>
                <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-6 flex items-center justify-center group-hover:text-orange-600 transition-colors duration-200">
                    Validate OTP Input
                </h3>

                <div className='flex gap-3 justify-center'>
                    {inpArr.map((input, index) => {
                        return <input className='w-12 h-12 text-center text-xl font-bold border-2 border-slate-300 rounded-xl focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-200 bg-white shadow-sm text-[#1E1E1E]' type="text" key={index}
                            maxLength={1}
                            value={inpArr[index]}
                            ref={input => (refArr.current[index] = input)}
                            onChange={(e) => handleOnChange(e.target.value, index)}
                            // backspace
                            onKeyDown={(e) => handleOnKeyDown(e, index)}

                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default OTPInput;