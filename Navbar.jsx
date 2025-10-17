import React from "react";
import Menu from "./Menu";
import logo from "../assests/logo.png"; // make sure folder is "assets"

const Navbar = ({ onLogout }) => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-gradient-to-r from-pink-100 via-yellow-100 to-sky-100 px-8 py-3 shadow-md z-50 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-pink-200 shadow-sm"/>
        <h2 className="text-2xl font-bold text-purple-600">SerenQuell</h2>
      </div>
      {currentUser && (
        <div className="flex items-center gap-6">
          <Menu />
           <button onClick={() => { localStorage.removeItem("currentUser"); onLogout(); }} className="bg-white text-black font-semibold px-5 py-2 rounded-lg shadow hover:bg-yellow-200 hover:scale-105 transition-transform duration-200">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
