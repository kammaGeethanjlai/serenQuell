import React, { useState, useEffect } from "react";

const Home = () => {
  const quotes = [
    { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { text: "Dream it. Wish it. Do it.", author: "Unknown" },
    { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
    { text: "Sometimes later becomes never. Do it now.", author: "Unknown" },
    { text: "Great things never come from comfort zones.", author: "Unknown" },
    { text: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" }
  ];

  const [currentQuote, setCurrentQuote] = useState({});

  const changeQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  useEffect(() => {
    changeQuote();
    const interval = setInterval(changeQuote, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center  bg-cover bg-center bg-[url('assests/home.jpg')]">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">Welcome to SerenQuell🌿</h1>

      {currentQuote && (
        <div className="bg-black/50 text-white p-6 rounded-xl mb-8 max-w-lg">
          <p className="text-xl sm:text-2xl">“{currentQuote.text}”</p>
          <p className="italic mt-2">— {currentQuote.author}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-4 justify-center">
        <a href="/todolist" className="px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-400 transition">To-Do List</a>
        <a href="/music" className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-400 transition">Music</a>
        <a href="/google" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">Google Search</a>
        <a href="/storage" className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition">Storage</a>
        <a href="/timer" className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 transition">Pomodoro Timer</a>
      </div>
    </div>
  );
};

export default Home;
