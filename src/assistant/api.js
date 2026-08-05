import axios from "axios";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

export async function askAssistant(message) {
  try {
    const response = await axios.post(
      `${URL}?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `
You are Nova, a friendly AI assistant.

Answer shortly.

If user asks about interview preparation,
help them.

If user asks about machine coding,
guide them.

User message:
${message}
`
              }
            ]
          }
        ]
      }
    );

    return (
      response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't answer that."
    );
  } catch (err) {
    return "Something went wrong.";
  }
}