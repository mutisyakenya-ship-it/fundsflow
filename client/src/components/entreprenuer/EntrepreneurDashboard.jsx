import { useNavigate } from "react-router-dom";

function EntrepreneurDashboard() {
  const navigate = useNavigate();

  const stats = {
    fundingRequested: 0,
    fundingReceived: 0,
    activeProposals: 0,
    investors: 0,
  };

  return (
    <div className="entrepreneur-layout">
      <div className="entrepreneur-sidebar">
        <div className="entrepreneur-logo">FundsFlow</div>

        <div className="entrepreneur-nav-item" onClick={() => navigate("/dashboard")}>
          Dashboard
        </div>
        <div className="entrepreneur-nav-item" onClick={() => navigate("/submit-proposal")}>
          Submit Proposal
        </div>
        <div className="entrepreneur-nav-item" onClick={() => navigate("/my-proposals")}>
          My Proposals
        </div>
        <div className="entrepreneur-nav-item" onClick={() => navigate("/wallet")}>
          Wallet
        </div>
        <div className="entrepreneur-nav-item" onClick={() => navigate("/analytics")}>
          Analytics
        </div>
        <div className="entrepreneur-nav-item" onClick={() => navigate("/entrepreneur/profile")}>
          Profile
        </div>
      </div>

      <div className="entrepreneur-main">
        <div className="entrepreneur-header">
          <div>
            <h2>Entrepreneur Dashboard</h2>
            <p className="text-gray">Your startup journey starts here</p>
          </div>

          <button className="entrepreneur-btn" onClick={() => navigate("/submit-proposal")}>
            + New Proposal
          </button>
        </div>

        <div className="entrepreneur-grid">
          <div className="stat-card">
            <h4>Funding Requested</h4>
            <h2>KES {stats.fundingRequested}</h2>
          </div>
          <div className="stat-card">
            <h4>Funding Received</h4>
            <h2>KES {stats.fundingReceived}</h2>
          </div>
          <div className="stat-card">
            <h4>Active Proposals</h4>
            <h2>{stats.activeProposals}</h2>
          </div>
          <div className="stat-card">
            <h4>Interested Investors</h4>
            <h2>{stats.investors}</h2>
          </div>
        </div>

        <div className="entrepreneur-empty-box">
          <h3>No proposals yet</h3>
          <p>You haven't submitted any business proposals yet.</p>
          <button className="entrepreneur-btn" onClick={() => navigate("/submit-proposal")}>
            Create Your First Proposal
          </button>
        </div>
      </div>
    </div>
  );
}

export default EntrepreneurDashboard;
