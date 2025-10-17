// Menu.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <ul className="flex gap-8 items-center">
      <NavLink to="/"  className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive  ? " bg-purple-600 text-white shadow-md": "text-[#4B3B4C] hover:text-[#9A8C98]" }`}>Home</NavLink>
      <NavLink to="/todolist"  className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive  ? " bg-purple-600 text-white shadow-md": "text-[#4B3B4C] hover:text-[#9A8C98]" }`}>To-Do-List</NavLink>
      <NavLink to="/music"  className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive  ? " bg-purple-600 text-white shadow-md": "text-[#4B3B4C] hover:text-[#9A8C98]" }`}>Music</NavLink>
      <NavLink to="/google" className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive  ? " bg-purple-600 text-white shadow-md": "text-[#4B3B4C] hover:text-[#9A8C98]" }`} >Google </NavLink>
      <NavLink to="/storage"  className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive  ? " bg-purple-600 text-white shadow-md": "text-[#4B3B4C] hover:text-[#9A8C98]" }`}>Storage</NavLink>
      <NavLink to="/timer"  className={({ isActive }) => `px-3 py-2 rounded-md transition ${isActive  ? " bg-purple-600 text-white shadow-md": "text-[#4B3B4C] hover:text-[#9A8C98]" }`}>Pomodoro Timer</NavLink>
    </ul>
  );
};

export default Menu;
