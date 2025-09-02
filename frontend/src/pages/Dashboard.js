import React from "react";

function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="text-lg text-gray-500 dark:text-gray-300">Wallet Balance</div>
        <div className="text-4xl font-mono text-blue-600 dark:text-blue-400 mt-2">0.0000 0G</div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="text-lg text-gray-500 dark:text-gray-300 mb-2">Recent Transactions</div>
        <div className="text-gray-400">No transactions yet.</div>
      </div>
    </div>
  );
}

export default Dashboard;
