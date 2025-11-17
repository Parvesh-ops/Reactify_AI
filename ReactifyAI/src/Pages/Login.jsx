import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [userForm, setUserForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const formHandler = (e) => {
    e.preventDefault();
    setError("");

    // Validate email and password are not empty
    if (!userForm.email.trim() || !userForm.password.trim()) {
      setError("Please enter both email and password");
      return;
    }

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(userForm.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Validate password length
    if (userForm.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // If all validations pass, authenticate user
    login({ email: userForm.email });
    navigate("/ai");
    setUserForm({ email: "", password: "" });
  };

  const changeHandler = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-6">
      <form
        onSubmit={formHandler}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md flex flex-col gap-6 text-white"
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back 👋</h1>
        <p className="text-center text-sm text-white/80 mb-4 font-semibold">
          Please sign in to continue
        </p>

        {/* Error Message */}
        {error && (
          <div className="p-3 bg-red-500/20 border border-red-400 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={userForm.email}
          onChange={changeHandler}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />

        {/* Password Input */}
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={userForm.password}
          onChange={changeHandler}
          required
          className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
        />

        {/* Options */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            className="flex-1 py-2 bg-white/20 rounded-full hover:bg-white/30 transition-all"
          >
            Remember me
          </button>
          <Link
            to="/forget"
            className="flex-1 py-2 bg-white/20 rounded-full text-center hover:bg-white/30 transition-all"
          >
            Forgot Password
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full py-3 mt-2 bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-pink-500 transition-all duration-300 text-center cursor-pointer"
        >
          Sign In
        </button>

        {/* Divider */}
        <div className="flex items-center gap-2 my-3">
          <div className="flex-grow h-px bg-white/30"></div>
          <p className="text-white/70 text-sm">or</p>
          <div className="flex-grow h-px bg-white/30"></div>
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => window.open("https://www.google.com", "_blank")}
            className="flex items-center justify-center gap-3 w-full py-3 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>

          <button
            type="button"
            onClick={() => window.open("https://www.facebook.com", "_blank")}
            className="flex items-center justify-center gap-3 w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all"
          >
            <FaFacebookF size={20} />
            Sign in with Facebook
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-4 text-sm">
          <p className="text-white/80">
            Not a member?{" "}
            <Link
              to="/newaccount"
              className="text-pink-300 font-semibold cursor-pointer hover:underline"
            >
              Create new account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
