import { Link } from "react-router-dom";

export default function TaskCard({ task, onDelete, onToggle }) {
  const { id, title, description, completed } = task;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col gap-3 hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <Link
          to={`/tasks/${id}`}
          className="text-lg font-semibold text-gray-800 hover:text-indigo-600"
        >
          {title}
        </Link>
        <span
          className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
            completed
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p className="text-gray-600 text-sm">{description}</p>

      <div className="flex gap-2 mt-auto pt-2">
        <button
          onClick={() => onToggle(id)}
          className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium text-white transition ${
            completed
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {completed ? "Mark as Pending" : "Mark as Completed"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="px-3 py-2 rounded-lg text-sm font-medium bg-red-50 text-red-600 hover:bg-red-100 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
