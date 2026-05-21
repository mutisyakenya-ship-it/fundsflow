import React from "react"   ;
import approval from "../assets/approval.jpg";
import graphic from "../assets/graphic.jpg";
import coin from "../assets/coin.jpg";
import ladder from "../assets/ladder.jpg";
import Submit from "../components/Submit";

function Dashboard() {
    const boxStyle = { padding: "20px", backgroundColor: "rgb(227, 231, 236)", borderRadius: "5px" };
    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px",
    };
    const imageStyle = {
        width: "100%",
        height: "200px",
        objectFit: "cover",
        borderRadius: "10px",
        boxshadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    };

    return(
        <div>  
                
            <h2 style={{textAlign:"center", color:"gold", padding:"10px"}}>fundflow dao powered by community</h2>
            <div style={boxStyle}>
                <textarea style={{ boxSizing:"border-box",fontWeight:"bold",fontFamily:"Arial ", width:"100%",color:"", padding:"10px",marginBottom:"10px", borderRadius:"5px", border:"1px solid #ccc"}} id="" placeholder="Fundflow DAO is a decentralized platform designed to help individual accessing funding for small-scale businesses. The system  allows users across africa to write and  submit their business ideas and receive funding through community voting using blockchain  technology. Smart contract ensures transparency, security and automatic fund distribution. This project aims to eliminate the limitation of traditional financial system by providing a fair and accessible funding solution." cols="30" rows="10"></textarea>

             </div>
                <div style={gridStyle}>
                    <img src={approval} alt="Approval" style={imageStyle} />
                    <img src={graphic} alt="Graphic" style={imageStyle} />
                    <img src={coin} alt="Coin" style={imageStyle} />
                    <img src={ladder} alt="Ladder" style={imageStyle} />
                </div>
        </div>
    );
}
export default Dashboard;
