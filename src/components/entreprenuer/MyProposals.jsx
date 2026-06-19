import React from "react";
import { useNavigate } from "react-router-dom";

function MyProposals() {
  const navigate = useNavigate();

  // New user has no proposals yet
  const proposals = [];

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f9",
        padding: "30px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1>My Proposals</h1>

        {proposals.length === 0 ? (
          <>
            <h3>No proposals yet</h3>

            <p>
              You haven't submitted any funding proposals.
              Create your first proposal to start attracting investors.
            </p>

            <button
              onClick={() => navigate("/entrepreneur/submit-proposal")}
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
              + Submit Your First Proposal
            </button>
          </>
        ) : (
          <p>Your proposals will appear here.</p>
        )}
      </div>
    </div>
  );
}

export default MyProposals;

