import { Link, useParams } from "react-router-dom";

export default function TaskDetails({ tasks }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) {
    return (
      <div className="text-center py-16 bg-white rounded-xl border border-gray-100">
        <h1 className="text-xl font-semibold text-gray-800">Task not found</h1>
        <p className="text-gray-500 mt-2">
          No task exists with the ID "{id}".
        </p>
        <Link
          to="/tasks"
          className="inline-block mt-6 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Back to Tasks
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-start justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-800">{task.title}</h1>
        <span
          className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {task.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <p className="text-gray-600 mt-4">{task.description}</p>

      <Link
        to="/tasks"
        className="inline-block mt-8 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
      >
        ← Back to Tasks
      </Link>
    </div>
  );
}
