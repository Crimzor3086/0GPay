import React, { useEffect, useState } from "react";
import { getLedger } from "../api";

const WALLET_ADDRESS = "0xYourWalletAddress"; // Replace with actual wallet logic

function filterTxs(txs, filter) {
  const now = Date.now();
  if (filter === "Today") {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    return txs.filter(tx => tx.timestamp >= start.getTime());
  }
  if (filter === "Week") {
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000;
    return txs.filter(tx => tx.timestamp >= weekAgo);
  }
  if (filter === "Month") {
    const monthAgo = now - 30 * 24 * 60 * 60 * 1000;
    return txs.filter(tx => tx.timestamp >= monthAgo);
  }
  return txs;
}

function History() {
  const [txs, setTxs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("Today");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const ledger = await getLedger();
        let allTxs = [];
        for (const block of ledger) {
          for (const tx of block.transactions || []) {
            if (tx.sender === WALLET_ADDRESS || tx.receiver === WALLET_ADDRESS) {
              allTxs.push(tx);
            }
          }
        }
        setTxs(allTxs.reverse());
      } catch (e) {
        setTxs([]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  const filtered = filterTxs(txs, filter);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Transaction History</h1>
      <div className="mb-4 flex space-x-2">
        {["Today", "Week", "Month"].map(f => (
          <button key={f} className={`px-3 py-1 rounded ${filter === f ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-blue-200 dark:hover:bg-blue-600"} transition`} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-gray-400">No transactions to show.</div>
        ) : (
          <ul>
            {filtered.map((tx, i) => (
              <li key={i} className="mb-2 flex items-center">
                <span className={
                  tx.receiver === WALLET_ADDRESS
                    ? "text-green-500 mr-2"
                    : "text-red-500 mr-2"
                }>
                  {tx.receiver === WALLET_ADDRESS ? "+" : "-"}
                </span>
                <span className="font-mono text-sm">
                  {tx.amount} 0G from {tx.sender.slice(0, 6)}... to {tx.receiver.slice(0, 6)}... <span className="text-gray-400 ml-2">{new Date(tx.timestamp).toLocaleString()}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default History;
