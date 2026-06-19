import { useState } from "react";

function Submit() {
  const [submitDetails, setsubmitDetails] = useState({
    "project-title": "",
    description: "",
    "amount-needed": "",
    "upload-image": "",
  });

  const style = {
    page: {
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f4f6f9, #e9eef7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 15px",
      fontFamily: "Arial, sans-serif",
    },

    card: {
      width: "100%",
      maxWidth: "650px",
      background: "#fff",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    },

    header: {
      textAlign: "center",
      marginBottom: "25px",
    },

    title: {
      margin: 0,
      fontSize: "26px",
      fontWeight: "bold",
      color: "#1f2a44",
    },

    subtitle: {
      marginTop: "6px",
      color: "#6b7280",
      fontSize: "14px",
    },

    formGroup: {
      marginBottom: "16px",
      display: "flex",
      flexDirection: "column",
    },

    label: {
      marginBottom: "6px",
      fontWeight: "600",
      color: "#333",
      fontSize: "14px",
    },

    input: {
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontSize: "14px",
      outline: "none",
      transition: "0.2s",
    },

    textarea: {
      padding: "12px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      fontSize: "14px",
      minHeight: "120px",
      outline: "none",
      resize: "none",
    },

    inputFocus: {
      border: "1px solid gold",
      boxShadow: "0 0 0 3px rgba(255, 215, 0, 0.2)",
    },

    button: {
      width: "100%",
      marginTop: "15px",
      background: "linear-gradient(90deg, gold, #f5c542)",
      color: "#000",
      border: "none",
      padding: "14px",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer",
      fontSize: "15px",
      transition: "0.2s",
    },

    buttonHover: {
      transform: "scale(1.02)",
    },

    fileBox: {
      padding: "12px",
      border: "1px dashed #ccc",
      borderRadius: "10px",
      background: "#fafafa",
    },
  };

  return (
    <div style={style.page}>
      <div style={style.card}>
        <div style={style.header}>
          <h1 style={style.title}>Submit Your Proposal</h1>
          <p style={style.subtitle}>
            Pitch your idea and attract investors
          </p>
        </div>

        <form>
          {/* Project Title */}
          <div style={style.formGroup}>
            <label style={style.label}>Project Title</label>
            <input
              style={style.input}
              type="text"
              value={submitDetails["project-title"]}
              onChange={(e) =>
                setsubmitDetails({
                  ...submitDetails,
                  "project-title": e.target.value,
                })
              }
              placeholder="e.g. Restaurant Expansion"
            />
          </div>

          {/* Description */}
          <div style={style.formGroup}>
            <label style={style.label}>Description</label>
            <textarea
              style={style.textarea}
              value={submitDetails.description}
              onChange={(e) =>
                setsubmitDetails({
                  ...submitDetails,
                  description: e.target.value,
                })
              }
              placeholder="Explain your business idea..."
            />
          </div>

          {/* Amount */}
          <div style={style.formGroup}>
            <label style={style.label}>Amount Needed (KES)</label>
            <input
              style={style.input}
              type="number"
              value={submitDetails["amount-needed"]}
              onChange={(e) =>
                setsubmitDetails({
                  ...submitDetails,
                  "amount-needed": e.target.value,
                })
              }
              placeholder="e.g. 50000"
            />
          </div>

          {/* File Upload */}
          <div style={style.formGroup}>
            <label style={style.label}>Upload Image</label>
            <div style={style.fileBox}>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setsubmitDetails({
                    ...submitDetails,
                    "upload-image": e.target.files[0],
                  })
                }
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            style={style.button}
            onMouseOver={(e) =>
              (e.target.style.transform = "scale(1.02)")
            }
            onMouseOut={(e) =>
              (e.target.style.transform = "scale(1)")
            }
          >
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Submit;