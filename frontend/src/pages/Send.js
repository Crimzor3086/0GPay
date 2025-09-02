import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getWallet } from "../wallet";
import { MICRO_PAYMENT_ADDRESS, MICRO_PAYMENT_ABI } from "../contracts";

function Send() {
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    setWallet(getWallet());
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!wallet) return;
    setLoading(true);
    setStatus("");
    try {
      // Connect to Ethereum provider (Metamask or default)
      const provider = new ethers.providers.Web3Provider(window.ethereum || window.ethereum, "any");
      const signer = provider.getSigner();
      const contract = new ethers.Contract(MICRO_PAYMENT_ADDRESS, MICRO_PAYMENT_ABI, signer);
      // Send payment (assume sendPayment(receiver, amount))
      const tx = await contract.sendPayment(receiver, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
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
        <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition disabled:opacity-50" disabled={loading || !wallet}>{loading ? "Sending..." : "Send (On-Chain)"}</button>
        {!wallet && <div className="mt-4 text-red-500">No wallet found. Please create or restore a wallet in Settings.</div>}
        {status === "success" && <div className="mt-4 text-green-500 animate-pulse">Payment sent!</div>}
        {status === "error" && <div className="mt-4 text-red-500">Error sending payment.</div>}
      </form>
    </div>
  );
}

export default Send;
