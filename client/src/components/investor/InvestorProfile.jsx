import { investorProfile } from "../../services/api";

export default function InvestorProfile() {
  return (
    <div className="panel-page">
      <div className="profile-header">
        <div>
          <h1 className="profile-header-title">Investor Profile</h1>
          <p className="profile-header-subtitle">
            Complete your profile to unlock investing opportunities
          </p>
        </div>

        <div className="profile-progress-wrap">
          <div className="profile-progress-circle">45%</div>
          <p className="profile-progress-label">Profile</p>
        </div>
      </div>

      <div className="profile-grid">
        {/* Personal Information */}
        <div className="profile-card">
          <h2 className="profile-card-title">Personal Information</h2>
          <input className="profile-input" placeholder="Full Name" />
          <input className="profile-input" placeholder="Email Address" />
          <input className="profile-input" placeholder="Phone Number" />
          <input className="profile-input" placeholder="Country" />
          <button className="btn-profile-primary">Save Information</button>
        </div>

        {/* Investment Preferences */}
        <div className="profile-card">
          <h2 className="profile-card-title">Investment Preferences</h2>
          <select className="profile-input">
            <option>Risk Level: Low</option>
            <option>Risk Level: Medium</option>
            <option>Risk Level: High</option>
          </select>
          <select className="profile-input">
            <option>Technology</option>
            <option>Agriculture</option>
            <option>Real Estate</option>
            <option>Fintech</option>
            <option>Healthcare</option>
          </select>
          <input className="profile-input" placeholder="Min Investment ($)" />
          <input className="profile-input" placeholder="Max Investment ($)" />
          <button className="btn-profile-primary">Save Preferences</button>
        </div>

        {/* Identity Verification */}
        <div className="profile-card">
          <h2 className="profile-card-title">Identity Verification (KYC)</h2>
          <p className="profile-text">
            Required to unlock investing and withdrawals.
          </p>
          <input className="profile-input" placeholder="ID Number" />
          <input className="profile-input" type="file" />
          <button className="btn-profile-blue">Submit Verification</button>
        </div>

        {/* Wallet Connection */}
        <div className="profile-card">
          <h2 className="profile-card-title">Wallet Connection</h2>
          <p className="profile-text">
            Connect your wallet to fund investments securely.
          </p>
          <button className="btn-profile-purple">Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
