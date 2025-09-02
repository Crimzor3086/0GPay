import React from "react";

function Settings() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="font-semibold mb-2">Wallet Backup / Restore</div>
        <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition mr-2">Backup</button>
        <button className="px-4 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-600 transition">Restore</button>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="font-semibold mb-2">Network Status</div>
        <div className="text-green-500">Connected</div>
      </div>
    </div>
  );
}

export default Settings;
