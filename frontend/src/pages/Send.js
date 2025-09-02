import React from "react";

function Send() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Send Payment</h1>
      <form className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-md mx-auto">
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Recipient Address</label>
        <input type="text" className="w-full mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="0x..." />
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Amount (0G)</label>
        <input type="number" className="w-full mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="0.0001" min="0" step="0.0001" />
        <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition">Send</button>
      </form>
    </div>
  );
}

export default Send;
