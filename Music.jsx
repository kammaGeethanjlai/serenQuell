import React from "react";

const Music = () => {
  const videos = [
    "https://www.youtube.com/embed/I3OJUwILelU?si=3TAQr_kLBaHeuu4U",
    "https://www.youtube.com/embed/pdG-n-P7y_w?si=pPfGPvIguPvy8e7Y",
    "https://www.youtube.com/embed/W0DM5lcj6mw?si=6sJqWfYCl5Amcmlc",
    "https://www.youtube.com/embed/oS07d8Gr4tw?si=juyQD08Yhcjbh2D_",
    "https://www.youtube.com/embed/ooOak5FVkpM?si=weQT39GMpPib84lv",
    "https://www.youtube.com/embed/gSAr7olg7Qk?si=on-UY4zeuhbw-0LD",
    "https://www.youtube.com/embed/6IM0mrxu0fk?si=VJHVYxKFNPOhevIt",
    "https://www.youtube.com/embed/IiUNRYQ1Cak?si=uOvBZtMMmwUqtzLq",
  ];

  return (
    <div className="p-10 min-h-screen bg-gradient-to-r from-pink-50 via-yellow-50 to-sky-50 flex flex-col items-center gap-6 pt-20">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-10">🎵 Music Player</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {videos.map((url, i) => (
          <div key={i} className="bg-white shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition duration-300">
            <iframe className="w-full h-64 md:h-80" src={url} ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Music;
