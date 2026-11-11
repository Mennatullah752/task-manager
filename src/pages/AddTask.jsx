import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

export default function AddTask({ onAdd }) {
  const navigate = useNavigate();

  const handleAdd = (title, description) => {
    onAdd(title, description);
    navigate("/tasks");
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add Task</h1>
      <TaskForm onSubmit={handleAdd} />
    </div>
  );
}
