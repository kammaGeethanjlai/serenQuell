import React, { useState } from "react";
import toast from "react-hot-toast";

const Login = ({ onLogin, onSwitchToRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      toast.success("Welcome back to SerenQuell");
      localStorage.setItem("currentUser", JSON.stringify(user));
      onLogin(user);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1"> Password</label>
        <input type="password" name="password" placeholder="Enter password" value={formData.password}  onChange={handleChange} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
      </div>
      <button type="submit"  className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition" >Login</button>
    </form>
  );
};

export default Login;
