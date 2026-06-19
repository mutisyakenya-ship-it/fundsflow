import React from "react";

 function Wallet() {
  return (
    <div className="p-6 space-y-6">

      <div className="bg-black p-4 rounded-xl shadow">
        <h1 className="text-xl font-bold">Wallet</h1>
        <p className="text-gray-500 text-sm">
          Manage your funds
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <p className="text-gray-500">Available Balance</p>
        <h2 className="text-3xl font-bold">$8,450</h2>
      </div>

      <div className="flex gap-3">
        <button className="bg-black text-white px-4 py-2 rounded w-full">
          Deposit
        </button>
        <button className="bg-gray-200 px-4 py-2 rounded w-full">
          Withdraw
        </button>
      </div>

      {/* Transactions */}
      <div className="bg-black p-4 rounded-xl shadow">
        <h2 className="font-bold mb-3">Recent Transactions</h2>

        <div className="text-sm space-y-2">
          <p>+ $200 Deposit</p>
          <p>- $500 Investment</p>
          <p>+ $120 ROI Return</p>
        </div>

      </div>

    </div>
  );
}
export default Wallet;