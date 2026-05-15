import { useState } from "react";
import { Link } from "react-router-dom";
function Submit(){
    const[submitDetails,setsubmitDetails] = useState({
      "project-title": "",
      "description": "",
      "amount-needed": "",
      "upload-image": ""

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
        },
        


    };

    return(
        <form style={style.formContainer}>
            <h1 style={style.heading}>Submit proposal title</h1>
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
    )

}

export default Submit;