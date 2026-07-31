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
        <>
            <div className=''>
                <h3 className="text-xl font-black text-[#1E1E1E] tracking-tight mb-2 justify center item-center group-hover:text-orange-600 transition-colors duration-200">
                    Validate OTP Input
                </h3>

                {inpArr.map((input, index) => {
                    return <input className='border border-black w-8 p-2 h-8 text-[#1E1E1E]' type="text" key={index}
                        value={inpArr[index]}
                        ref={input => (refArr.current[index] = input)}
                        onChange={(e) => handleOnChange(e.target.value, index)}
                        // backspace
                        onKeyDown={(e) => handleOnKeyDown(e, index)}

                    />
                })}



            </div>
        </>
    )
}

export default OTPInput;