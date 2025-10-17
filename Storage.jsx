import React, { useState, useEffect } from "react";

const Storage = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("myStorage")) || [];
    setItems(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("myStorage", JSON.stringify(items));
  }, [items]);

  const addItem = () => {
    if (!input.trim()) return;
    setItems([...items, input.trim()]);
    setInput("");
  };

 const deleteItem = (index) => {
  const updated = [...items];
  updated.splice(index, 1);
  setItems(updated);
};


  const isImage = (url) => {
  return (
    url.endsWith(".jpg") ||
    url.endsWith(".jpeg") ||
    url.endsWith(".png") ||
    url.endsWith(".webp") ||
    url.endsWith(".gif")
  );
};

  return (
    <div className="max-w-xl mx-auto px-4 py-10 pt-30">
      <div className="absolute inset-0 bg-[url('assests/storage.webp')] bg-cover bg-center brightness-40 -z-10"></div>

      <h2 className="text-3xl  text-white font-bold text-center mb-6 ">📦 SereniFy Storage</h2>

      <div className="flex items-center gap-2 mb-6">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a link or image URL" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"/>
        <button onClick={addItem} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Add</button>
      </div>
      <div className="space-y-4">
        {items.length === 0 ? (
          <p className="text-gray-500 text-center">No items saved yet.</p>
        ) : (
          items.map((item, index) => (
            <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex-1">
                {isImage(item) ? (
                  <img src={item} alt="Stored" className="max-h-24 rounded shadow-sm"/>
                ) : item.startsWith("http") ? (
                  <a href={item} target="_blank" className="text-blue-600 underline break-words"> {item} </a>
                ) : (
                  <span>{item}</span>
                )}
              </div>
              <button onClick={() => deleteItem(index)} className="ml-4 text-red-500 hover:text-red-700 text-xl">❌</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Storage;
