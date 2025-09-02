import React from "react";
import QRCode from "qrcode.react";

const walletAddress = "0xYourWalletAddress";

function Receive() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Receive Payment</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 max-w-md mx-auto flex flex-col items-center">
        <div className="mb-4">
          <QRCode value={walletAddress} size={128} bgColor="#fff" fgColor="#2563eb" className="rounded" />
        </div>
        <div className="text-gray-700 dark:text-gray-300 font-mono mb-2">{walletAddress}</div>
        <button className="px-4 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition" onClick={() => navigator.clipboard.writeText(walletAddress)}>Copy Address</button>
      </div>
    </div>
  );
}

export default Receive;
