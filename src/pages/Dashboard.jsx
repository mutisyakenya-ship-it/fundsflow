import React, { useState } from "react";
import approval from "../assets/approval.jpg";
import graphic from "../assets/graphic.jpg";
import coin from "../assets/coin.jpg";
import ladder from "../assets/ladder.jpg";

function Dashboard() {
    const boxStyle = { padding: "20px", backgroundColor: "rgb(227, 231, 236)", borderRadius: "5px" };
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "24px",
        marginTop: "20px",
    };

    const imageStyle = {
        width: "100%",
        height: "220px",
        objectFit: "cover",
        borderRadius: "14px",
        boxShadow: "0 16px 30px rgba(0, 0, 0, 0.18)",
        transition: "transform 0.35s ease",
    };

    const imageCards = [
        {
            src: approval,
            alt: "Community Approval",
            title: "Community Approval",
            description: "Every proposal is voted on by the DAO so funding stays fair, transparent, and community-driven. why banks limit access to capital when we can democratize it with blockchain? the power of the crowd can unlock opportunities for all. ",
        },
        {
            src: graphic,
            alt: "Impact Analytics",
            title: "Impact Analytics",
            description: "Visualize project performance and growth with clear metrics for stakeholders. clear insights empower informed decisions and demonstrate the real-world impact of community-funded projects. transparency builds trust and drives continued support for entrepreneurs across Africa and beyond.",
        },
        {
            src: coin,
            alt: "Funding Flow",
            title: "Funding Flow",
            description: "Track secure funding movements and reward contributions with on-chain clarity. blockchain transparency ensures every transaction is visible and verifiable, creating a trustworthy ecosystem where funders and entrepreneurs can connect with confidence. together, we can democratize access to capital and drive economic growth across Africa and global markets.",
        },
        {
            src: ladder,
            alt: "Business Growth",
            title: "Business Growth",
            description: "Support entrepreneurs to climb the next level with community capital and guidance.Together, we can drive economic growth and innovation across Africa  and global markets. By democratizing access to funding, we empower small businesses to thrive and create lasting impact in their communities.",
        },
    ];

    const [submitDetails, setsubmitDetails] = useState({
        "project-title": "",
        "description": "",
        "amount-needed": "",
        "upload-image": "",
    });
        const style = {
            formContainer: {
                maxWidth: "600px",
                margin: "40px auto",
                padding: "20px",
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                fontFamily: "Arial, sans-serif",
                alignItems: "left",
            },
            heading:{
                textAlign: "center",
                color: "#232a52",
                marginBottom: "20px",
            },
            formGroup: {
                marginBottom: "15px",
                display: "flex",
                flexDirection: "column",    
    
            },
            label: {
                marginBottom: "5px",
                fontWeight: "bold",
                color: "#333",
            },
            input: {
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
    
            },
            textarea: {
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
                minHeight: "100px",
            },
            submitButton: {
                backgroundColor: "#456dca",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
            },
             errorMessage: { 
                color: "red",
                marginBottom: "10px",      
    
            },
                successMessage: {  
                color: "green",
                marginBottom: "10px",
            },
            buttonHover: {
                backgroundColor: "#232a52",
            }
            
    
    
        };
    

    return(
        <div>  
                
            <h2 style={{textAlign:"center", color:"gold", padding:"10px"}}>fundflow dao powered by community</h2>
            <div style={boxStyle}>
                <textarea
                    style={{
                        boxSizing: "border-box",
                        fontWeight: "bold",
                        fontFamily: "Arial",
                        width: "100%",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "5px",
                        border: "1px solid #ccc",
                        resize: "vertical",
                    }}
                    readOnly
                    value={
                        "Fundflow DAO is a decentralized platform designed to help individuals access funding for small-scale businesses. " +
                        "Users across Africa can submit business ideas and receive community support through voting and blockchain transparency. " +
                        "Smart contracts keep every fund transfer secure and visible, creating a fair alternative to traditional finance."
                    }
                    cols="30"
                    rows="10"
                />
            </div>
            <div style={gridStyle}>
                {imageCards.map((card, index) => (
                    <div
                        key={card.alt}
                        className="dashboard-image-card"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <img src={card.src} alt={card.alt} style={imageStyle} />
                        <div className="dashboard-card-content">
                            <h3>{card.title}</h3>
                            <p>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <form style={style.formContainer}>
                <h2 style={style.heading}>Submit proposal title</h2>
            <div style={style.formGroup}>
                <label htmlFor="project-title">Project Title:</label>
                <input
                    type="text"
                    id="project-title"
                    name="project-title"
                    value={submitDetails["project-title"]}
                    onChange={(e) => setsubmitDetails({ ...submitDetails, ["project-title"]: e.target.value })}
                />
            </div>
            <div style={style.formGroup}>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={submitDetails["description"]}
                    onChange={(e) => setsubmitDetails({ ...submitDetails, ["description"]: e.target.value })}
                />
            </div>
            <div style={style.formGroup}>
                <label htmlFor="amount-needed">Amount Needed:</label>
                <input
                    type="number"
                    id="amount-needed"
                    name="amount-needed"
                    value={submitDetails["amount-needed"]}
                    onChange={(e) => setsubmitDetails({ ...submitDetails, ["amount-needed"]: e.target.value })}
                />
            </div>
            <div style={style.formGroup}>
                <label htmlFor="upload-image">Upload Image:</label>
                <input
                    type="file"
                    id="upload-image"
                    name="upload-image"
                    accept="image/*"
                    onChange={(e) => setsubmitDetails({ ...submitDetails, ["upload-image"]: e.target.files[0] })}

                />
            </div>
            <button type="submit" style={style.submitButton}>Submit Proposal</button>
        </form>
             
        </div>
    );
}
export default Dashboard;
