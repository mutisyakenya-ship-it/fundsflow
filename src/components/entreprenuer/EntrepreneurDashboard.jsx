import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function EntrepreneurDashboard() {
  const navigate = useNavigate();

  // THIS WILL LATER COME FROM BACKEND
  const stats = {
    fundingRequested: 0,
    fundingReceived: 0,
    activeProposals: 0,
    investors: 0,
  };

  const styles = {
    layout: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      background: "#f4f6f9",
    },

    sidebar: {
      width: "240px",
      background: "#0f172a",
      color: "white",
      padding: "20px",
      borderRadius: "10px",  
    },

    logo: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "30px",
    },

    navItem: {
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px",
      cursor: "pointer",
      color: "#cbd5e1",
    },

    main: {
      flex: 1,
      padding: "25px",
    },

    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },

    button: {
      background: "gold",
      border: "none",
      padding: "10px 15px",
      borderRadius: "8px",
      fontWeight: "bold",
      cursor: "pointer",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "15px",
      marginTop: "20px",
    },

    card: {
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      textAlign: "center",
    },

    emptyBox: {
      marginTop: "30px",
      background: "#fff8dc",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
      border: "1px solid gold",
    },
  };

  return (
    <div style={styles.layout}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>FundsFlow</div>

        <div style={styles.navItem} onClick={() => navigate("/dashboard")}>
          Dashboard
        </div>

        <div style={styles.navItem} onClick={() => navigate("/submit-proposal")}>
          Submit Proposal
        </div>

        <div style={styles.navItem} onClick={() => navigate("/my-proposals")}>
          My Proposals
        </div>

        <div style={styles.navItem} onClick={() => navigate("/wallet")}>
          Wallet
        </div>

        <div style={styles.navItem} onClick={() => navigate("/analytics")}>
          Analytics
        </div>

        <div style={styles.navItem} onClick={() => navigate("/entrepreneur/profile")}>
          Profile
        </div>
      </div>

      {/* MAIN */}
    <div style={styles.main}>

        {/* HEADER */}
    <div style={styles.header}>
          <div>
            <h2>Entrepreneur Dashboard</h2>
            <p style={{ color: "gray" }}>
              Your startup journey starts here
            </p>
          </div>

          <button
            style={styles.button}
            onClick={() => navigate("/submit-proposal")}
          >
            + New Proposal
          </button>
        </div>

        {/* STATS */}
        <div style={styles.grid}>

      <div style={styles.card}>
            <h4>Funding Requested</h4>
            <h2>KES {stats.fundingRequested}</h2>
          </div>

        <div style={styles.card}>
            <h4>Funding Received</h4>
            <h2>KES {stats.fundingReceived}</h2>
          </div>

          <div style={styles.card}>
            <h4>Active Proposals</h4>
            <h2>{stats.activeProposals}</h2>
          </div>

          <div style={styles.card}>
            <h4>Interested Investors</h4>
            <h2>{stats.investors}</h2>
          </div>
        </div>

        {/* REAL EMPTY STATE (IMPORTANT) */}
        <div style={styles.emptyBox}>
          <h3>No proposals yet</h3>
          <p>
            You haven't submitted any business proposals yet.
          </p>

          <button
            style={styles.button}
            onClick={() => navigate("/submit-proposal")}
          >
            Create Your First Proposal
          </button>
        </div>

      </div>
    </div>
  );
}

export default EntrepreneurDashboard;