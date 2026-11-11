import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";

const initialTasks = [
  {
    id: 1,
    title: "Learn React",
    description: "Study React components and JSX",
    completed: false,
  },
  {
    id: 2,
    title: "Learn useState",
    description: "Practice state management",
    completed: true,
  },
  {
    id: 3,
    title: "Learn React Router",
    description: "Practice navigation between pages",
    completed: false,
  },
  {
    id: 4,
    title: "Build React Project",
    description: "Create a complete React application",
    completed: false,
  },
];

function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="mt-4 text-gray-600">Page not found</p>
      <Link
        to="/"
        className="inline-block mt-6 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Dashboard tasks={tasks} />} />
          <Route
            path="/tasks"
            element={
              <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            }
          />
          <Route path="/add-task" element={<AddTask onAdd={addTask} />} />
          <Route
            path="/tasks/:id"
            element={<TaskDetails tasks={tasks} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
