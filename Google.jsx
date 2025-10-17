import React, { useState } from "react";

const Google = () => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query)
       return;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, "_blank");
    setQuery("");
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center gap-6 p-10">
      <div className="absolute inset-0 bg-[url('assests/google.jpg')] bg-cover bg-center brightness-100 -z-10"></div>
      <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search on Google..." className="flex-grow border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f7f3f6]" />
        <button type="submit" className="bg-[#faf2f9] text-black px-4 py-2 rounded-md hover:bg-[#4B3B4C] transition">Search</button></form>
    </div>
  );
};

export default Google;
