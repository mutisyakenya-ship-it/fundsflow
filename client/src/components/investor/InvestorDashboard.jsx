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
      style={{
        width: "100%",
        textAlign: "left",
        padding: "12px 14px",
        marginBottom: "8px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        background: activeTab === tab ? "#111827" : "transparent",
        color: activeTab === tab ? "white" : "#374151",
        fontWeight: activeTab === tab ? "600" : "400",
      }}
    >
      {label}
    </button>
  );

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
  };

  const renderOverview = () => (
    <div>
      {/* HEADER */}
      <div style={{ marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "700" }}>
          Investor Dashboard
        </h1>
        <p style={{ color: "#6b7280" }}>
          Track your investments, returns, and opportunities
        </p>
      </div>

      {/* STATS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ fontSize: "28px", margin: 0 }}>
            ${stats.portfolio}
          </h2>
          <p style={{ color: "#6b7280" }}>Total Portfolio Value</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: "28px", margin: 0 }}>
            {stats.activeInvestments}
          </h2>
          <p style={{ color: "#6b7280" }}>Active Investments</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: "28px", margin: 0 }}>
            {stats.roi}%
          </h2>
          <p style={{ color: "#6b7280" }}>Return on Investment</p>
        </div>
      </div>

      {/* EMPTY STATE (IMPORTANT FIX) */}
      <div
        style={{
          marginTop: "25px",
          padding: "25px",
          background: "#f9fafb",
          borderRadius: "14px",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "10px" }}>Quick Insight</h3>
        <p style={{ color: "#6b7280" }}>
          No investments yet. Start browsing startups to build your portfolio.
        </p>

        <button
          onClick={() => setActiveTab("browse")}
          style={{
            marginTop: "12px",
            padding: "10px 16px",
            borderRadius: "10px",
            border: "none",
            background: "#111827",
            color: "white",
            cursor: "pointer",
          }}
        >
          Browse Startups
        </button>
      </div>
    </div>
  );
  // renderring the sidebar content
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
    <div style={{ display: "flex", minHeight: "100vh", background: "#f3f4f6" }}>
      
      {/* SIDEBAR */}
      <div
        style={{
          width: "260px",
          background: "white",
          padding: "20px",
          borderRight: "1px solid #e5e7eb",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Investor Panel</h2>

        {menuItem("Overview", "overview")}
        {menuItem("Profile", "profile")}
        {menuItem("Browse Startups", "browse")}
        {menuItem("My Investments", "investments")}
        {menuItem("Wallet", "wallet")}
        {menuItem("Analytics", "analytics")}
      </div>

      {/* MAIN CONTENT */}
      <div style={{ flex: 1, padding: "25px" }}>{renderContent()}</div>
    </div>
  );
}