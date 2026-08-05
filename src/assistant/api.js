import axios from "axios";


const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
// console.log(import.meta.env.VITE_GEMINI_API_KEY);
const MODEL = import.meta.env.VITE_GEMINI_MODEL;


console.log("API KEY:", API_KEY ? "Loaded" : "Missing");
// console.log("MODEL:", MODEL);



export const askGemini = async (prompt)=>{


try{


const response = await axios.post(

`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,

{
 contents:[
   {
    parts:[
     {
      text:prompt
     }
    ]
   }
 ]
},

{
 headers:{
  "Content-Type":"application/json"
 }
}

);

return response.data.candidates[0].content.parts[0].text;

}catch(error){
console.log(
"FULL GEMINI ERROR:",
error.response?.data
);
throw error;
}
};