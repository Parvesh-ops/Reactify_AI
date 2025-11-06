import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getAnswer = async () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    try {
      setLoading(true);
      setError(false);
      setAnswer('')

      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: question,
                },
              ],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-goog-api-key": apiKey,
          },
        }
      );
      // console.log(res.data);

      const text =
        res.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No answer from Gemini";
      setAnswer(text);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-2xl text-white text-center">
        <h1 className="text-3xl font-bold mb-6">ReactifyAI</h1>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
          rows="4"
          className="w-full p-4 rounded-lg bg-white/20 text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-pink-300"
        ></textarea>

        <button
          onClick={getAnswer}
          className="mt-5 px-6 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all duration-300"
        >
          {loading ? "Generating..." : "✨ Generate Answer"}
        </button>

        {loading && (
          <div className="mt-4 animate-pulse text-gray-200">Loading...</div>
        )}
        {error && (
          <p className="mt-4 text-red-300 font-semibold">
            ❌ Failed to fetch data
          </p>
        )}
        {!loading && !error && answer && (
          <p className="mt-6 text-lg bg-white/20 p-4 rounded-lg text-left whitespace-pre-line">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
