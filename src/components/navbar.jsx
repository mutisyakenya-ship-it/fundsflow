import React from "react";
import { Link } from "react-router-dom";
import {  useState,useEffect } from "react";
import block from "../assets/block.jpg";
import header from "../assets/header.jpg";


function Navbar  ({isAuthenticated})  {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const style = {
navbar: {
    display: "flex",
    flexDirection:isMobile? "column" : "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px 5px",
    background: "linear-gradient(90deg, #456dca, #232a52)",
    maxWidth: "1500px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundImage: ` url(${block})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
},
logosty:{
    borderRadius: "5px",
    width:isMobile? "35px" : "50px",
    height: isMobile? "35px" : "50px",

},
logo: {
            color: "gold",
            fontWeight: "bold",
            marginBottom:isMobile? "10px" : "0",
        },
        navLinks: {
            display: "flex",
            gap: "10px",
            flexDirection:isMobile? "column" : "row",
            alignItems:isMobile? "center" : "flex-start",
        },
        rightButtons: {
            display: "flex",
            gap: "10px",
            flexDirection:isMobile? "column" : "row",
            justifyContent:isMobile? "flex-start" : "flex-end",
            marginTop:isMobile? "10px" :"0",
            width: isMobile? "100%" : "auto",
        },
        link: {
            textDecoration: "none",
            color: "black",
            fontSize: "16px",
            cursor: "pointer",
        },
        button: {
            padding: "5px 10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
        },
    };

    return (
        <nav style={style.navbar}>
            <div style={style.logosty}><img src={header} alt="logo" style={{width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}} />
            </div>
            
            <h2 style={style.logo}>FUNDFLOW DAO</h2>

            <div style={style.navLinks}>
                <Link to="/" style={style.link}>Home</Link>
                <Link to="/about" style={style.link}>About</Link>
                <Link to="/contact" style={style.link}>Contact</Link>
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard" style={style.link}>Dashboard</Link>
                    </>
                ) : null}
            </div>
        </nav>
    );
}

export default Navbar;
