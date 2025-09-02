import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getWallet } from "../wallet";
import { ZERO_G_TOKEN_ADDRESS, ZERO_G_TOKEN_ABI } from "../contracts";

function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setWallet(getWallet());
  }, []);

  useEffect(() => {
    async function fetchBalance() {
      if (!wallet) return;
      setLoading(true);
      try {
        // Connect to Ethereum provider (Metamask or default)
        const provider = new ethers.providers.Web3Provider(window.ethereum || window.ethereum, "any");
        const contract = new ethers.Contract(ZERO_G_TOKEN_ADDRESS, ZERO_G_TOKEN_ABI, provider);
        const bal = await contract.balanceOf(wallet.address);
        setBalance(Number(ethers.utils.formatUnits(bal, 18)));
      } catch (e) {
        setBalance(0);
      }
      setLoading(false);
    }
    fetchBalance();
  }, [wallet]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="text-lg text-gray-500 dark:text-gray-300">Wallet Balance (on-chain)</div>
        <div className="text-4xl font-mono text-blue-600 dark:text-blue-400 mt-2">
          {loading ? "..." : `${balance.toFixed(4)} 0G`}
        </div>
        {wallet && <div className="mt-2 text-xs text-gray-400 font-mono">{wallet.address}</div>}
      </div>
    </div>
  );
}

export default Dashboard;
