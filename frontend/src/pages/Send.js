import React, { useState } from "react";
import { sendTransaction } from "../api";

const WALLET_ADDRESS = "0xYourWalletAddress"; // Replace with actual wallet logic

function Send() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      await sendTransaction({ sender: WALLET_ADDRESS, receiver, amount: parseFloat(amount) });
      setStatus("success");
      setReceiver("");
      setAmount("");
    } catch (e) {
      setStatus("error");
    }
    setLoading(false);
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Send Payment</h1>
      <form className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-md mx-auto" onSubmit={handleSubmit}>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Recipient Address</label>
        <input type="text" className="w-full mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="0x..." value={receiver} onChange={e => setReceiver(e.target.value)} required />
        <label className="block mb-2 text-gray-700 dark:text-gray-300">Amount (0G)</label>
        <input type="number" className="w-full mb-4 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900" placeholder="0.0001" min="0" step="0.0001" value={amount} onChange={e => setAmount(e.target.value)} required />
        <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition disabled:opacity-50" disabled={loading}>{loading ? "Sending..." : "Send"}</button>
        {status === "success" && <div className="mt-4 text-green-500 animate-pulse">Payment sent!</div>}
        {status === "error" && <div className="mt-4 text-red-500">Error sending payment.</div>}
      </form>
    </div>
  );
}

export default Send;
