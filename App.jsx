import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./NavbarContainer/Layout";
import Home from "./Pages/Home";
import ToDoList from "./Pages/ToDoList";
import Music from "./Pages/Music";
import Google from "./Pages/Google";
import PomodoroTimer from "./Pages/PomodoroTimer";
import Storage from "./Pages/Storage";
import AuthPage from "./Auth/AuthPage";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout onLogout={() => setCurrentUser(null)} />,
      children: [
        { index: true,
          element: <Home /> },
        { path: "todolist",
           element: <ToDoList /> },
        { path: "music",
           element: <Music /> },
        { path: "google", 
          element: <Google /> },
        { path: "timer",
           element: <PomodoroTimer /> },
        { path: "storage",
           element: <Storage /> },
      ],
    },
  ]);
  return (
    <div>
      <Toaster/>
      {currentUser ? (
        <RouterProvider router={router} />
      ) : (
        <AuthPage onLoginSuccess={setCurrentUser} />
      )}
    </div>
  );
};

export default App;
