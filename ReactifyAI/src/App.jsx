import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import SignIn from "./Pages/SignIn";
import Login from "./Pages/Login";
import Forget from "./Pages/Forget";
import NewAccount from "./Pages/NewAccount";
import ReactifyAi from "./Components/ReactifyAI";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="login" element={<Login />} />
        <Route path="forget" element={<Forget />} />
        <Route path="newaccount" element={<NewAccount />} />
        <Route
          path="/ai"
          element={
            <PrivateRoute>
              <ReactifyAi />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
};

export default App;
