import React from "react";
import { useNavigate } from "react-router-dom";

function EntreprenuerAnalytics() {
  const navigate = useNavigate();

  const totalProposals = 0;
  const totalFunding = 0;
  const interestedInvestors = 0;
  const profileViews = 0;

  const cardStyle = {
    backgroundColor: "#fff",
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
      <h1>Business Analytics</h1>
      <p>Track your funding performance and investor engagement.</p>

      {/* Summary Cards */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <div style={cardStyle}>
          <h3>Total Proposals</h3>
          <h2>{totalProposals}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Funding Raised</h3>
          <h2>KES {totalFunding}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Interested Investors</h3>
          <h2>{interestedInvestors}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Profile Views</h3>
          <h2>{profileViews}</h2>
        </div>
      </div>

      {/* Empty State */}

      <div
        style={{
          background: "#fff",
          marginTop: "40px",
          padding: "40px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>No Analytics Available Yet</h2>

        <p>
          Your analytics dashboard will start displaying insights once
          you submit a proposal and investors begin interacting with it.
        </p>

        <button
          onClick={() =>
            navigate("/entrepreneur/submit-proposal")
          }
          style={{
            backgroundColor: "gold",
            color: "black",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          Submit Your First Proposal
        </button>
      </div>
    </div>
  );
}

export default EntreprenuerAnalytics;

