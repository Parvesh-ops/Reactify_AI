import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";
import NewAccount from "./Pages/NewAccount";
import ReactAi from "./Components/ReactAI";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="login" element={<Login />} />
      <Route path="forget" element={<Forget />} />
      <Route path="newaccount" element={<NewAccount />} />
      <Route path="reactai" element={<ReactAi />} />
    </Routes>
  );
};

export default App;
