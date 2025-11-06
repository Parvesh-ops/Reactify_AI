import React from "react";
import { useNavigate } from "react-router-dom"; // 1️⃣ Import useNavigate

const SignIn = () => {
  const navigate = useNavigate(); // 2️⃣ Initialize the navigate function

  const handleSignIn = () => {
    navigate("/login"); // 3️⃣ Navigate to the login page on button click
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-6">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-4xl font-bold tracking-wide drop-shadow-lg">
          Reactify<span className="text-pink-300">_AI</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-lg text-center max-w-md mb-8">
        Welcome to <span className="font-semibold">Reactify AI</span> — your
        personal assistant powered by AI to help solve your everyday coding and
        creative problems.
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4">
        <button
          type="button"
          onClick={handleSignIn} // 4️⃣ Add click handler
          className="px-8 py-2 bg-white/20 border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
        >
          Sign In
        </button>

        <button
          type="button"
          className="px-8 py-2 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default SignIn;
