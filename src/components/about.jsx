 import chart from "../assets/chart.jpeg" 
 import React, {useEffect,useRef} from "react";
const About = ()  => {
    const aboutRef = useRef(null);
    useEffect(() => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);
    return(
    <div ref={aboutRef} style={{padding:"20px", maxWidth:"800px", margin:"0 auto"}} >
        <h1 style={{textAlign:"center", color:"gold"}}>About FundFlow DAO</h1>
        <p style={{fontSize:"18px", lineHeight:"1.6", color:"#333"}}>
           🚀 FundFlow DAO: Where Great Ideas Meet Decentralized Capital
        </p>
        <h2 style={{textAlign:"center", color:"gold"}}>The problem we're solving</h2>
        <p style={{fontSize:"18px", lineHeight:"1.6", color:"#333"}}>
            Traditional funding is broken. Between gatekeeping banks and exclusive VC circles, thousands of world-changing business ideas never get off the ground simply because the "right" person didn't hear the pitch. FundFlow DAO is here to change that. We're democratizing access to capital by putting the power in the hands of the community. No more middlemen, no more bias—just pure, decentralized funding for the next generation of entrepreneurs.
        </p>
        <h3 style={{textAlign:"center", color:"gold"}}>Our solution</h3>
        <p style={{fontSize:"18px", lineHeight:"1.6", color:"#333"}}>
            FundFlow DAO is a decentralized ecosystem that puts the power of progress back into the hands of the community. We’ve removed the middleman and replaced them with transparent, unchangeable code.Here, the quality of your idea matters more than the depth of your connections.
        </p>
        <h4 style={{textAlign:"center", color:"gold"}}>How the Flow Works</h4>
            <p style={{fontSize:"18px", lineHeight:"1.6", color:"#333"}}>
                We believe in transparency. Our entire funding process is governed by a Smart Contract—a digital agreement that nobody can tamper with.
                Propose: Submit your business roadmap and budget directly to the blockchain.
                Vote: Our global community reviews your proposal. If it’s a winner, they cast their votes using governance tokens.
                Fund: Once approved, our Smart Contract automatically triggers the release of funds from the DAO Treasury to your wallet. No paperwork. No delays.
            </p>
        
            <h5 style={{textAlign:"center", color:"gold"}}>Join the movement</h5>
                <p style={{fontSize:"18px", lineHeight:"1.6", color:"#333"}}>
                    Whether you are a builder with a vision or a community member looking to shape the future of business, you belong here.
                </p>
            <h6 style={{textAlign:"center", color:"gold"}}>Flow Chart</h6>
        <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
         <img src={chart} alt="Chart" style={{width:"100%",height:"200px",objectFit:"cover"}} />
        </div>
    </div>
    );
 }
export default About;