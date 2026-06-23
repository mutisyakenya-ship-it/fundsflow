import React from "react";
import { useNavigate } from "react-router-dom";
import { entrepreneurAnalytics } from "../../services/api";

function EntrepreneurAnalytics() {
  const navigate = useNavigate();

  const totalProposals = 0;
  const totalFunding = 0;
  const interestedInvestors = 0;
  const profileViews = 0;

  return (
    <div className="panel-page">
      <h1 className="dashboard-title">Business Analytics</h1>
      <p className="text-gray">
        Track your funding performance and investor engagement.
      </p>

      {/* Summary Cards */}
      <div className="dashboard-grid">
        <div className="stat-card">
          <h3>Total Proposals</h3>
          <h2>{totalProposals}</h2>
        </div>
        <div className="stat-card">
          <h3>Total Funding Raised</h3>
          <h2>KES {totalFunding}</h2>
        </div>
        <div className="stat-card">
          <h3>Interested Investors</h3>
          <h2>{interestedInvestors}</h2>
        </div>
        <div className="stat-card">
          <h3>Profile Views</h3>
          <h2>{profileViews}</h2>
        </div>
      </div>

      {/* Empty State */}
      <div className="entrepreneur-empty-box">
        <h2>No Analytics Available Yet</h2>
        <p>
          Your analytics dashboard will start displaying insights once
          you submit a proposal and investors begin interacting with it.
        </p>
        <button
          onClick={() => navigate("/entrepreneur/submit-proposal")}
          className="entrepreneur-btn"
        >
          Submit Your First Proposal
        </button>
      </div>
    </div>
  );
}

export default EntrepreneurAnalytics;
