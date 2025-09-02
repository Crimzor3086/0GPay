import React, { useEffect, useState } from "react";
import { getLedger } from "../api";

const WALLET_ADDRESS = "0xYourWalletAddress"; // Replace with actual wallet logic

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const ledger = await getLedger();
        // Calculate balance and recent transactions
        let bal = 0;
        const txs = [];
        for (const block of ledger) {
          for (const tx of block.transactions || []) {
            if (tx.receiver === WALLET_ADDRESS) bal += tx.amount;
            if (tx.sender === WALLET_ADDRESS) bal -= tx.amount;
            if (tx.sender === WALLET_ADDRESS || tx.receiver === WALLET_ADDRESS) {
              txs.push(tx);
            }
          }
        }
        setBalance(bal);
        setRecent(txs.slice(-5).reverse());
      } catch (e) {
        setBalance(0);
        setRecent([]);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="text-lg text-gray-500 dark:text-gray-300">Wallet Balance</div>
        <div className="text-4xl font-mono text-blue-600 dark:text-blue-400 mt-2">
          {loading ? "..." : `${balance.toFixed(4)} 0G`}
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="text-lg text-gray-500 dark:text-gray-300 mb-2">Recent Transactions</div>
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : recent.length === 0 ? (
          <div className="text-gray-400">No transactions yet.</div>
        ) : (
          <ul>
            {recent.map((tx, i) => (
              <li key={i} className="mb-2 flex items-center">
                <span className={
                  tx.receiver === WALLET_ADDRESS
                    ? "text-green-500 mr-2"
                    : "text-red-500 mr-2"
                }>
                  {tx.receiver === WALLET_ADDRESS ? "+" : "-"}
                </span>
                <span className="font-mono text-sm">
                  {tx.amount} 0G from {tx.sender.slice(0, 6)}... to {tx.receiver.slice(0, 6)}...
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
