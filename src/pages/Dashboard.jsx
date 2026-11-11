import { Link } from "react-router-dom";

function StatCard({ label, value, color }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`text-4xl font-bold mt-1 ${color}`}>{value}</p>
    </div>
  );
}

export default function Dashboard({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <Link
          to="/add-task"
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700"
        >
          + Add Task
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <StatCard label="Total Tasks" value={total} color="text-indigo-600" />
        <StatCard label="Completed" value={completed} color="text-green-600" />
        <StatCard label="Pending" value={pending} color="text-amber-600" />
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Task Summary
      </h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks to show.</p>
      ) : (
        <ul className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-100">
          {tasks.map((task) => (
            <li key={task.id}>
              <Link
                to={`/tasks/${task.id}`}
                className="flex items-center justify-between px-5 py-3 hover:bg-gray-50"
              >
                <span className="text-gray-800">{task.title}</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    task.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {task.completed ? "Completed" : "Pending"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
