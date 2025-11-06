import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAccount = () => {
 const navigate =    useNavigate()
 const handelSignin = ()=>{
    navigate("/login")
 }
  const [User, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [Error, setError] = useState({});

  const changeUser = (e) => {
    setUser({ ...User, [e.target.name]: e.target.value });
  };

  const formHandler = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!User.name.trim()) newErrors.name = "Name is required";
    if (!User.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(User.email)) newErrors.email = "Invalid email";
    if (!User.password) newErrors.password = "Password is required";
    else if (User.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (!User.confirmPassword)
      newErrors.confirmPassword = "Confirm password is required";
    else if (User.password !== User.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) setError(newErrors);
    else {
      setError({});
      alert(`Welcome ${User.name} 🎉`);
      setUser({ name: "", email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-6">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Create New Account
        </h2>
        <p className="text-center text-white/80 mb-6 text-sm">
          Join ReactifyAI and start your journey with us 🚀
        </p>

        {/* Form */}
        <form onSubmit={formHandler} className="flex flex-col gap-4">
          {["name", "email", "password", "confirmPassword"].map((field) => (
            <div key={field}>
              <label className="block text-white/80 mb-1 text-sm capitalize">
                {field === "confirmPassword" ? "Confirm Password" : field}
              </label>
              <input
                type={field.includes("password") ? "password" : "text"}
                name={field}
                value={User[field]}
                onChange={changeUser}
                placeholder={`Enter your ${
                  field === "confirmPassword" ? "password again" : field
                }`}
                className="w-full px-4 py-3 rounded-lg bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
              {Error[field] && (
                <p className="text-red-400 text-sm mt-1">{Error[field]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm">
          <p className="text-white/80">
            Already have an account?{" "}
            <span className="text-pink-300 font-semibold cursor-pointer hover:underline" onClick={handelSignin}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewAccount;
