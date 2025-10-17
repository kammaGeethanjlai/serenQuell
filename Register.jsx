import React, { useState } from "react";
import toast from "react-hot-toast";

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    let{name,value}=e.target;
    setFormData({ ...formData, [name]:value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
     if (users.find((u) => u.email === formData.email)) {
      toast.error("User already exists with this email!");
      return;
    }
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
   toast.success("Welcome to SerenQuell! ");
   onRegister(formData);
   setFormData({ name: "", email: "", password: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
        <input  type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required  />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter password" className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" required/>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number"  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
      </div>
      <button type="submit" className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition" >Create Account</button>
    </form>
  );
};

export default Register;
