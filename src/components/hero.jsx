import { Link } from "react-router-dom";
import React from "react";
import banner from "../assets/banner.jpg";
import Footer from "../components/Footer";
const Hero = () => {
    const heroStyle = {
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",    
        justifyContent: "center",
        alignItems: "center",
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${banner})`,
        color: "#fff",
        textAlign: "center",
        padding: "20px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };
     const faqStyle = {
        maxWidth: "800px",
        width: "100%",
        marginTop: "40px",
        background: "rgba(54, 9, 234, 0.08)",
        borderRadius: "15px",
        padding: "25px",
        color: "#15112b",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
    };
    const faqItem = {
        textAlign: "left",
        marginBottom: "18px",
        lineHeight: "1.6",
    };
    const faqTitle = {
        fontSize: "20px",
        marginBottom: "10px",
        color: "gold",
    };
    const buttonContainer = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        marginTop: "20px",
    };
    const dividerStyle = {
        width:"100%",
        alignItems:"center",
        textAlign:"center",
        color:"white",
        margin:"10px 0",
        display:"flex",

    };
    const lineStyle = {
        flex: 1,
        height: "1px",
        backgroundColor: "white",
        margin: "0 10px",
    };
   
    const ButtonStyle = {
        padding: "10px 20px",
        backgroundColor:"gold",
        color:"black",
        border: "2px solid gold #222",
        boxShadow: "0 0  10px rgba(0, 0, 0, 0.7)",
        borderRadius: "5px",
        cursor: "pointer",
        margin: "0 5px",
        fontSize: "16px",
    };
  return (
    <>
      <div style={heroStyle}>
          <h1 style={{color:"white",fontFamily:"sans-serif",fontSize:"20px"}}>Welcome to FundFlow DAO</h1>
          <p style={{color:"white"}}>Join us in revolutionizing the way we fund and support small businesses.</p>
          <div style={buttonContainer}>
              <Link to="/register" style={ButtonStyle}>Register</Link>
                  <div style={dividerStyle}>
                      <div style={lineStyle}></div>
                      <span>OR</span>
                      <div style={lineStyle}></div>
                  </div>   
              <Link to="/login" style={ButtonStyle}>Login</Link>
          </div>   
      </div>
       <section style={faqStyle}>
                <h2 style={faqTitle}>FAQ</h2>
                <div style={faqItem}>
                    <strong>What is FundFlow DAO?</strong>
                    <p>FundFlow DAO is a decentralized community platform that helps small businesses get funding through transparent voting and support. Enterprenuers write small business proposals and the communities evaluate the ideas and vote for them. </p>
                </div>
                <div style={faqItem}>
                    <strong>How FUNDFLOW works?</strong>
                    <p>Enterprenuers submit small business proposals, and the community evaluates them through transparent voting. Successful proposals receive funding from the DAO's treasury.
                    </p>
                </div>
                <div style={faqItem}>
                    <strong>What makes FUNDFLOW DAO different?</strong>
                    <p>FundFlow DAO stands out by providing a transparent and community-driven approach to funding small businesses. Unlike traditional funding methods, our platform allows the community to directly participate in the decision-making process, ensuring that the most promising ideas receive support.</p>
                </div>
            </section>
            <Footer />
    
        
        </>
  );
}
export default Hero;