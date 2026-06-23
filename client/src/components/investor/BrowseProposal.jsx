import React, { useState } from "react";
import { browseProposals } from '../../services/api';

export default function BrowseProposals() {
  const [filter, setFilter] = useState("all");

  // 🔥 simulate empty marketplace for new investors
  const deals = [];

  const handleInvest = (project) => {
    alert(
      `Investing in: ${project.name}\nROI: ${project.roi}\nThis will connect to backend later.`
    );

    // later: navigate to investment page or open modal
    // navigate(`/invest/${project.id}`)
  };

  const filteredDeals =
    filter === "all" ? deals : deals.filter((d) => d.stage === filter);

  const getColor = (stage) => {
    switch (stage) {
      case "Hot":
        return "#ef4444";
      case "Stable":
        return "#22c55e";
      default:
        return "#3b82f6";
    }
  };

  const card = (p) => (
    <div
      key={p.id}
      style={{
        background: "white",
        padding: "18px",
        borderRadius: "14px",
        boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        borderLeft: `5px solid ${getColor(p.stage)}`,
      }}
    >
      <h2>{p.name}</h2>
      <p style={{ color: "#6b7280" }}>{p.category}</p>

      <p style={{ marginTop: "10px" }}>{p.description}</p>

      <div style={{ marginTop: "10px", fontSize: "13px" }}>
        ROI: {p.roi} | Risk: {p.risk}
      </div>

      <button
        onClick={() => handleInvest(p)}
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "10px",
          borderRadius: "10px",
          border: "none",
          background: "#111827",
          color: "white",
          cursor: "pointer",
        }}
      >
        Invest Now
      </button>
    </div>
  );

  return (
    <div style={{ padding: "25px", background: "#f3f4f6", minHeight: "100vh" }}>
      
      {/* HEADER */}
      <h1>Investment Marketplace</h1>
      <p style={{ color: "#6b7280" }}>
        Discover startups and grow your portfolio
      </p>

      {/* FILTERS */}
      <div style={{ display: "flex", gap: "10px", margin: "15px 0" }}>
        {["all", "Stable", "Hot"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "none",
              background: filter === f ? "#111827" : "white",
              color: filter === f ? "white" : "#111827",
              cursor: "pointer",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 🚨 EMPTY STATE (IMPORTANT FIX) */}
      {filteredDeals.length === 0 ? (
        <div
          style={{
            marginTop: "50px",
            padding: "40px",
            background: "white",
            borderRadius: "14px",
            textAlign: "center",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}
        >
          <h2>No startups available yet</h2>
          <p style={{ color: "#6b7280", marginTop: "10px" }}>
            As a new investor, your marketplace is currently empty.
            Startups will appear here once entrepreneurs submit proposals.
          </p>

          <button
            onClick={() => (window.location.href = "/entrepreneur/dashboard")}
            style={{
              marginTop: "15px",
              padding: "10px 16px",
              borderRadius: "10px",
              border: "none",
              background: "#111827",
              color: "white",
              cursor: "pointer",
            }}
          >
            Go to Entrepreneur Side
          </button>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {filteredDeals.map(card)}
        </div>
      )}
    </div>
  );
}