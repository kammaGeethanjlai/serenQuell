import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const WORK_TIME = 25 * 60;
  const BREAK_TIME = 5 * 60;

  const [secondsLeft, setSecondsLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Work");
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      if (secondsLeft <= 0) {
        if (mode === "Work") {
          setMode("Break");
          setSecondsLeft(BREAK_TIME);
          setSessions(s => s + 1);
        } else {
          setMode("Work");
          setSecondsLeft(WORK_TIME);
        }
        setIsRunning(false);
      } else {
        setSecondsLeft(s => s - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft, mode]);

  const formatTime = () => {
    const minutes = Math.floor(secondsLeft / 60).toString().padStart(2, "0");
    const seconds = (secondsLeft % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center absolute inset-0 bg-[url('assests/timer.jpg')] bg-cover bg-center brightness-75 z-10">
      <div className="bg-white/50 rounded-xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Pomodoro Timer</h1>
        <h2 className={`text-lg font-semibold mb-4 ${mode==="Work"?"text-green-600":"text-yellow-500"}`}>{mode} Time</h2>
        <div className="text-4xl font-mono text-black mb-6">{formatTime()}</div>
        <div className="flex justify-center gap-4 mb-4">
          <button onClick={() => setIsRunning(!isRunning)} className="px-4 py-2 bg-green-500 text-black rounded hover:bg-green-600">{isRunning ? "Pause" : "Start"}</button>
          <button onClick={() => setSecondsLeft(mode==="Work"?WORK_TIME:BREAK_TIME)} className="px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600">Reset</button>
        </div>
        <p className="text-black">✅ Sessions Completed: <span className="font-bold text-green-600">{sessions}</span></p>
      </div>
    </div>
  );
};

export default PomodoroTimer;
