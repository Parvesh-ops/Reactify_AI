import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forget = () => {
   const navigate = useNavigate()

   const handleSignIn = ()=>{
    navigate("/login")
   }
  const [Email, setEmail] = useState("");

  const formHandler = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${Email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md text-center border border-white/20">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-2">Forgot Password?</h2>
        <p className="text-white/80 mb-6 text-sm">
          Don’t worry! Enter your email below and we’ll send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={formHandler} className="flex flex-col gap-4">
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-sm">
          <p className="text-white/80">
            Remember your password?{" "}
            <span className="text-pink-300 font-semibold cursor-pointer hover:underline" onClick={handleSignIn}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forget;
