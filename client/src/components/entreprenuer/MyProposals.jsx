import React from "react";
import { useNavigate } from "react-router-dom";
import { MyProposal } from "../../services/api";

function MyProposals() {
  const navigate = useNavigate();

  // New user has no proposals yet
  const proposals = [];

  return (
    <div className="panel-page">
      <div className="profile-card text-center">
        <h1>My Proposals</h1>

        {proposals.length === 0 ? (
          <>
            <h3>No proposals yet</h3>
            <p className="text-gray">
              You haven't submitted any funding proposals. Create your first
              proposal to start attracting investors.
            </p>
            <button
              onClick={() => navigate("/entrepreneur/submit-proposal")}
              className="entrepreneur-btn"
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
