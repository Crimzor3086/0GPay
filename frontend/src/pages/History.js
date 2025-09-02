import React from "react";

function History() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Transaction History</h1>
      <div className="mb-4 flex space-x-2">
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 transition">Today</button>
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 transition">Week</button>
        <button className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600 transition">Month</button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="text-gray-400">No transactions to show.</div>
      </div>
    </div>
  );
}

export default History;
