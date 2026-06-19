import React from "react";
 function Investment() {

  const investments = [
    {
      name: "GreenHarvest Farms",
      amount: "$2000",
      status: "Active",
      roi: "12%"
    },
    {
      name: "FinLink Pay",
      amount: "$1500",
      status: "Active",
      roi: "18%"
    },
    {
      name: "HealthAI Clinic",
      amount: "$3000",
      status: "Completed",
      roi: "22%"
    }
  ];

  return (
    <div className="p-6 space-y-6">

      <div className="bg-white p-4 rounded-xl shadow">
        <h1 className="text-xl font-bold">My Investments</h1>
        <p className="text-gray-500 text-sm">
          Track all your investment activities
        </p>
      </div>

      <div className="space-y-4">

        {investments.map((inv, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between">

            <div>
              <h2 className="font-bold">{inv.name}</h2>
              <p className="text-sm text-gray-500">
                Invested: {inv.amount}
              </p>
            </div>

            <div className="text-right">
              <p className="font-bold">{inv.roi}</p>
              <span className="text-sm text-gray-500">{inv.status}</span>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
export default Investment;