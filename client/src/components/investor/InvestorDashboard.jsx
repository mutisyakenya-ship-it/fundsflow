import React, { useState } from "react";
import InvestorProfile from "./InvestorProfile";
import BrowseProposals from "./BrowseProposal";
import Investment from "./Investment";
import Wallet from "./Wallet";
import Analytics from "./InvestorAnalytics";

export default function InvestorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = {
    portfolio: 0,
    activeInvestments: 0,
    roi: 0,
  };

  const menuItem = (label, tab) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`sidebar-item ${activeTab === tab ? "active" : ""}`}
    >
      {label}
    </button>
  );

  const renderOverview = () => (
    <div>
      {/* HEADER */}
      <div className="profile-header">
        <div>
          <h1>Investor Dashboard</h1>
          <p className="text-gray">
            Track your investments, returns, and opportunities
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="dashboard-grid">
        <div className="stat-card">
          <h2>${stats.portfolio}</h2>
          <p className="text-gray">Total Portfolio Value</p>
        </div>
        <div className="stat-card">
          <h2>{stats.activeInvestments}</h2>
          <p className="text-gray">Active Investments</p>
        </div>
        <div className="stat-card">
          <h2>{stats.roi}%</h2>
          <p className="text-gray">Return on Investment</p>
        </div>
      </div>

      {/* EMPTY STATE */}
      <div className="entrepreneur-empty-box">
        <h3>Quick Insight</h3>
        <p className="text-gray">
          No investments yet. Start browsing startups to build your portfolio.
        </p>
        <button
          onClick={() => setActiveTab("browse")}
          className="entrepreneur-btn"
        >
          Browse Startups
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <InvestorProfile />;
      case "browse":
        return <BrowseProposals />;
      case "investments":
        return <Investment />;
      case "wallet":
        return <Wallet />;
      case "analytics":
        return <Analytics />;
      default:
        return renderOverview();
    }
  };

  return (
    <div className="panel-page">
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="sidebar-title">Investor Panel</h2>
        {menuItem("Overview", "overview")}
        {menuItem("Profile", "profile")}
        {menuItem("Browse Startups", "browse")}
        {menuItem("My Investments", "investments")}
        {menuItem("Wallet", "wallet")}
        {menuItem("Analytics", "analytics")}
      </div>

      {/* MAIN CONTENT */}
      <div className="panel-content">{renderContent()}</div>
    </div>
  );
}
