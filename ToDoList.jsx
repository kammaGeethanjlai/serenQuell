import React, { useState, useEffect } from "react";

const ToDoList = () => {
  const [task, setTask] = useState(
    {
     TaskTitle:"",
      Description:"",
      Category:"Work",
       Priority:"Low",
       Deadline:"" });
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.Email === currentUser?.Email);
    if (user) setTasks(user.todos || []);
  }, []);

  const handleChange = (e) =>{
setTask({ ...task, [e.target.name]: e.target.value });
  }

  const saveTasks = newTasks => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userIndex = users.findIndex(u => u.Email === currentUser.Email);
    if (userIndex !== -1) {
      users[userIndex].todos = newTasks;
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));
      setTasks(newTasks);
    }
  };

  const handleAddTask = e => {
    e.preventDefault();
    saveTasks([...tasks, { ...task, id: Date.now().toString() }]);
    setTask({ TaskTitle:"", Description:"", Category:"Work", Priority:"Low", Deadline:"" });
  };

  const handleDelete = id => saveTasks(tasks.filter(t=>t.id!==id));
  const handleEdit = t => { setEditingId(t.id); setTask(t); };
  const handleUpdate = e => {
    e.preventDefault();
    saveTasks(tasks.map(t => t.id===editingId ? {...task, id:editingId} : t));
    setEditingId(null);
    setTask({ TaskTitle:"", Description:"", Category:"Work", Priority:"Low", Deadline:"" });
  };

  return (
    <div className="relative py-10 min-h-screen flex flex-col items-center gap-10 pt-40">
      <div className="absolute inset-0 bg-[url('assests/TODOLIST.jpeg')] bg-cover bg-center brightness-75 -z-10"></div>
      <main className="p-6 rounded-2xl shadow-lg w-[500px] bg-white/80 backdrop-blur-xl">
        <h2 className="text-2xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-300 via-yellow-300 to-sky-300 bg-clip-text text-transparent">{editingId ? "✏️ Edit Task" : "✍️ Add a New Task"}</h2>
        <form onSubmit={editingId ? handleUpdate : handleAddTask} className="space-y-4">
          <input name="TaskTitle" value={task.TaskTitle} onChange={handleChange} placeholder="Task Title" required className="w-full p-2 border border-black" />
          <textarea name="Description" value={task.Description} onChange={handleChange} placeholder="Description" rows={3} required className="w-full border border-black" />
          <select name="Category" value={task.Category} onChange={handleChange} className="w-full border border-black">
            <option>Work</option>
            <option>Study</option>
            <option>Personal</option>
          </select>
          <div className="flex gap-4 text-sm">
            <label><input type="radio" name="Priority" value="Low" checked={task.Priority==="Low"} onChange={handleChange}/> Low</label>
            <label><input type="radio" name="Priority" value="Medium" checked={task.Priority==="Medium"} onChange={handleChange}/> Medium</label>
            <label><input type="radio" name="Priority" value="High" checked={task.Priority==="High"} onChange={handleChange}/> High</label>
          </div>
          <input type="datetime-local" name="Deadline" value={task.Deadline} onChange={handleChange} required className="w-full border border-black" />
          <button type="submit" className="w-full bg-gradient-to-r from-pink-300 via-yellow-300 to-sky-300 text-black font-semibold px-6 py-2 rounded-lg hover:scale-105 transition-transform shadow-md">{editingId ? "Update Task" : "Add Task"}</button>
        </form>
      </main>
      <div className="flex flex-wrap gap-6 justify-center">
        {tasks.length===0 && <p className="text-gray-500">No tasks yet!</p>}
        {tasks.map(t => (
          <div key={t.id} className="bg-white/80 backdrop-blur-xl p-4 rounded-xl w-80 shadow-lg hover:scale-105 transition-transform border border-pink-100">
            <h3 className="font-bold text-lg text-black">{t.TaskTitle}</h3>
            <p className="text-gray-700">{t.Description}</p>
            <p className="text-sm mt-1">📂 {t.Category}</p>
            <p className="text-sm">⚡ Priority: {t.Priority}</p>
            <p className="text-sm">⏳ {t.Deadline}</p>
            <div className="flex gap-2 mt-3">
              <button onClick={()=>handleEdit(t)} className="bg-sky-300 text-black px-3 py-1 rounded hover:bg-sky-400 transition">Edit</button>
              <button onClick={()=>handleDelete(t.id)} className="bg-pink-300 text-black px-3 py-1 rounded hover:bg-pink-400 transition">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
