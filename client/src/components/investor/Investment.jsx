import React, { useEffect, useState } from "react";
import { investment } from "../../services/api"; // fetches investor's investments

export default function Investment() {
  const [investments, setInvestments] = useState([]);

  useEffect(() => {
    const fetchInvestments = async () => {
      try {
        const data = await makeInvestments();
        setInvestments(data);
      } catch (err) {
        console.error("Failed to load investments", err);
      }
    };
    fetchInvestments();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <h1 className="text-xl font-bold">My Investments</h1>
        <p className="text-gray-500 text-sm">
          Track all your investment activities
        </p>
      </div>

      {investments.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <h2 className="text-lg font-bold">No investments yet</h2>
          <p className="text-gray-500 mt-2">
            As a new investor, you haven’t made any investments yet.
            Opportunities will appear here once you start investing.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {investments.map((inv, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-xl shadow flex justify-between"
            >
              <div>
                <h2 className="font-bold">{inv.name}</h2>
                <p className="text-sm text-gray-500">Invested: {inv.amount}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{inv.roi}</p>
                <span className="text-sm text-gray-500">{inv.status}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
