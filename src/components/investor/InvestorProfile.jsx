import React from "react";

export default function InvestorProfile() {
  return (
    <div style={{ padding: "25px", background: "#f3f4f6", minHeight: "100vh" }}>

      {/* HEADER */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
        }}
      >
        <div>
          <h1 style={{ margin: 0 }}>Investor Profile</h1>
          <p style={{ color: "#6b7280", marginTop: "5px" }}>
            Complete your profile to unlock investing opportunities
          </p>
        </div>

        {/* PROGRESS CIRCLE (simple version) */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "conic-gradient(#22c55e 45%, #e5e7eb 0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
            }}
          >
            45%
          </div>
          <p style={{ fontSize: "12px", color: "#6b7280" }}>Profile</p>
        </div>
      </div>

      {/* GRID LAYOUT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginTop: "20px",
        }}
      >

        {/* PERSONAL INFO */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Personal Information</h2>

          <input style={inputStyle} placeholder="Full Name" />
          <input style={inputStyle} placeholder="Email Address" />
          <input style={inputStyle} placeholder="Phone Number" />
          <input style={inputStyle} placeholder="Country" />

          <button style={primaryBtn}>Save Information</button>
        </div>

        {/* INVESTMENT PREFERENCES */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Investment Preferences</h2>

          <select style={inputStyle}>
            <option>Risk Level: Low</option>
            <option>Risk Level: Medium</option>
            <option>Risk Level: High</option>
          </select>

          <select style={inputStyle}>
            <option>Technology</option>
            <option>Agriculture</option>
            <option>Real Estate</option>
            <option>Fintech</option>
            <option>Healthcare</option>
          </select>

          <input style={inputStyle} placeholder="Min Investment ($)" />
          <input style={inputStyle} placeholder="Max Investment ($)" />

          <button style={primaryBtn}>Save Preferences</button>
        </div>

        {/* KYC */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Identity Verification (KYC)</h2>

          <p style={textStyle}>
            Required to unlock investing and withdrawals.
          </p>

          <input style={inputStyle} placeholder="ID Number" />
          <input style={inputStyle} type="file" />

          <button style={blueBtn}>Submit Verification</button>
        </div>

        {/* WALLET */}
        <div style={cardStyle}>
          <h2 style={titleStyle}>Wallet Connection</h2>

          <p style={textStyle}>
            Connect your wallet to fund investments securely.
          </p>

          <button style={purpleBtn}>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
};

const titleStyle = {
  marginBottom: "15px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "10px",
  border: "1px solid #e5e7eb",
};

const textStyle = {
  color: "#6b7280",
  fontSize: "14px",
  marginBottom: "10px",
};

const primaryBtn = {
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  background: "#111827",
  color: "white",
  border: "none",
  cursor: "pointer",
  marginTop: "5px",
};

const blueBtn = {
  ...primaryBtn,
  background: "#2563eb",
};

const purpleBtn = {
  ...primaryBtn,
  background: "#7c3aed",
};