import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerStyle = {
    background: "#071124",
    color: "#f0f0f0",
    padding: "40px 20px",
    textAlign: "center",
    borderRadius: "5px",
  };

  const linkStyle = {
    color: "gold",
    textDecoration: "none",
    margin: "0 10px",
  };

  const smallText = {
    color: "#ccc",
    marginTop: "20px",
    fontSize: "14px",
  };

  return (
    <footer style={footerStyle}>
      <p style={smallText}>© {new Date().getFullYear()} FundFlow DAO. Built for community funding and transparent participation.</p>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginBottom: "20px" }}>      
        <Link to="/" style={linkStyle}>X/Tweeter</Link>
        <Link to="/about" style={linkStyle}>GitHub</Link>
        <Link to="/contact" style={linkStyle}>Youtube</Link>
        <Link to="/register" style={linkStyle}>Discord</Link>
        <Link to="/login" style={linkStyle}>LinkedIn</Link>
      </div>
      <p style={smallText}>Empowering communities through secure and transparent voting.</p>
      <div> 
        <p style={{textAlign:"center"}}>Privacy Policy</p>
        <p style={{textAlign:"center"}}>Terms of Service</p>
        <p style={{textAlign:"center"}}>Contact Us</p>
      </div>

    </footer>
  );
};

export default Footer;
