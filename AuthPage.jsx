
import React, { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import toast from "react-hot-toast";
//!onLogin comes from app as a prop
const AuthPage = ({ onLoginSuccess }) => {
  //!state for currentUser first it is null currently login person
  const [currentUser, setCurrentUser] = useState(null);
  //!login and register
  const [showLogin, setShowLogin] = useState(true);
  //! if user data is present in local storage take that string conevrt into json object by using parse
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (savedUser) {
      setCurrentUser(savedUser);
      onLoginSuccess(savedUser);
    }
  }, [onLoginSuccess]);

  const handleLogin = (userData) => {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setCurrentUser(userData);
    onLoginSuccess(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    onLoginSuccess(null);
  };

  const handleRegister = () => {
    setShowLogin(true);
    toast.success("Registration successful! Please login.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {!currentUser ? (
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-purple-200">
          <h1 className="text-4xl font-extrabold text-center mb-2 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">SerenQuell 🌿</h1>
          <p className="text-center text-gray-500 mb-6">{showLogin ? "Login to continue" : "Create a new account"} </p>
          {showLogin ? (
            <Login onLogin={handleLogin} onSwitchToRegister={() => setShowLogin(false)} />
          ) : (
            <Register onRegister={handleRegister} />
          )}
          <div className="text-center mt-6">
            <button onClick={() => setShowLogin(!showLogin)} className="text-purple-600 font-medium hover:underline transition">
              {showLogin
                ? "Don't have an account? Register here"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <button onClick={handleLogout} className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:scale-105 transition-transform">Logout</button>
        </div>

      )}
    </div>
  );
};

export default AuthPage;
