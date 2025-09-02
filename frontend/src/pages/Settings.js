import React, { useEffect, useState } from "react";
import { getStatus } from "../api";
import { getWallet, createWallet, restoreWallet, exportWallet, clearWallet } from "../wallet";

function Settings() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [wallet, setWallet] = useState(null);
  const [restoreKey, setRestoreKey] = useState("");
  const [backupVisible, setBackupVisible] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchStatus() {
      setLoading(true);
      try {
        const s = await getStatus();
        setStatus(s);
      } catch (e) {
        setStatus(null);
      }
      setLoading(false);
    }
    fetchStatus();
    setWallet(getWallet());
  }, []);

  function handleCreate() {
    setWallet(createWallet());
    setError("");
  }

  function handleRestore() {
    const w = restoreWallet(restoreKey.trim());
    if (w) {
      setWallet(w);
      setError("");
    } else {
      setError("Invalid private key");
    }
  }

  function handleBackup() {
    setBackupVisible(true);
  }

  function handleClear() {
    clearWallet();
    setWallet(null);
    setError("");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Settings</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
        <div className="font-semibold mb-2">Wallet Management</div>
        {wallet ? (
          <>
            <div className="mb-2 text-gray-700 dark:text-gray-300 font-mono">Address: {wallet.address}</div>
            <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition mr-2" onClick={handleBackup}>Backup</button>
            <button className="px-4 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-600 transition mr-2" onClick={handleClear}>Clear</button>
            {backupVisible && (
              <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-900 rounded">
                <div className="mb-1 text-xs text-gray-500">Private Key (keep safe!):</div>
                <div className="font-mono text-xs break-all">{exportWallet()}</div>
              </div>
            )}
          </>
        ) : (
          <>
            <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition mr-2" onClick={handleCreate}>Create Wallet</button>
            <input type="text" className="p-1 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 mr-2" placeholder="Private key" value={restoreKey} onChange={e => setRestoreKey(e.target.value)} />
            <button className="px-4 py-1 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-600 transition" onClick={handleRestore}>Restore</button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </>
        )}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="font-semibold mb-2">Network Status</div>
        {loading ? (
          <div className="text-gray-400">Loading...</div>
        ) : status ? (
          <div className="text-green-500">{status.status} (Height: {status.height})</div>
        ) : (
          <div className="text-red-500">Disconnected</div>
        )}
      </div>
    </div>
  );
}

export default Settings;
