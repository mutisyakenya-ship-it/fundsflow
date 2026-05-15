import { Link } from "react-router-dom";
import React from "react";
import banner from "../assets/banner.jpg";
import { TbRuler } from "react-icons/tb";
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
  );
}
export default Hero;