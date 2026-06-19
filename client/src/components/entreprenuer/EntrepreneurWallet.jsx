import React from "react";
function EntrepreneurWallet() {
  // Replace these values with data from your backend later
  const wallet = {
    availableBalance: 0,
    totalReceived: 0,
    totalWithdrawn: 0,
    transactions: [],
  };

  const cardStyle = {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1>My Wallet</h1>
        <p>Manage your funding and withdrawals.</p>

        {/* Wallet Summary */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
            marginTop: "25px",
          }}
        >
          <div style={cardStyle}>
            <h3>Available Balance</h3>
            <h2>KES {wallet.availableBalance.toLocaleString()}</h2>
          </div>

          <div style={cardStyle}>
            <h3>Total Funding Received</h3>
            <h2>KES {wallet.totalReceived.toLocaleString()}</h2>
          </div>

          <div style={cardStyle}>
            <h3>Total Withdrawn</h3>
            <h2>KES {wallet.totalWithdrawn.toLocaleString()}</h2>
          </div>
        </div>

        {/* Information */}
        <div
          style={{
            backgroundColor: "#fff8dc",
            border: "1px solid gold",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "30px",
          }}
        >
          <h3>Wallet Status</h3>

          <p>
            Your wallet will automatically receive funds when investors
            successfully invest in your approved proposals.
          </p>

          <p>
            Once funds are available, you will be able to request withdrawals
            directly from this page.
          </p>
        </div>

        {/* Withdrawal Section */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Withdraw Funds</h2>

          {wallet.availableBalance > 0 ? (
            <>
              <input
                type="number"
                placeholder="Enter withdrawal amount"
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "15px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />

              <button
                style={{
                  marginTop: "20px",
                  backgroundColor: "gold",
                  color: "black",
                  border: "none",
                  padding: "12px 20px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Request Withdrawal
              </button>
            </>
          ) : (
            <p style={{ color: "gray" }}>
              You currently have no funds available for withdrawal.
            </p>
          )}
        </div>

        {/* Transaction History */}
        <div
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "10px",
            marginTop: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h2>Transaction History</h2>

          {wallet.transactions.length === 0 ? (
            <p>No transactions yet.</p>
          ) : (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginTop: "15px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ padding: "10px" }}>Date</th>
                  <th style={{ padding: "10px" }}>Type</th>
                  <th style={{ padding: "10px" }}>Amount</th>
                  <th style={{ padding: "10px" }}>Status</th>
                </tr>
              </thead>

              <tbody>
                {wallet.transactions.map((transaction) => (
                  <tr key={transaction.id}>
                    <td style={{ padding: "10px" }}>
                      {transaction.date}
                    </td>

                    <td style={{ padding: "10px" }}>
                      {transaction.type}
                    </td>

                    <td style={{ padding: "10px" }}>
                      KES {transaction.amount}
                    </td>

                    <td style={{ padding: "10px" }}>
                      {transaction.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurWallet;
