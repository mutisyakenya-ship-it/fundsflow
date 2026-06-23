import { useState } from "react";
import { createProposal } from "../../services/api";

function Submit() {
  const [submitDetails, setSubmitDetails] = useState({
    "project-title": "",
    description: "",
    "amount-needed": "",
    "upload-image": "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(submitDetails);
    // Call backend API here
    alert("Proposal submitted successfully!");
  };

  return (
    <div className="submit-page">
      <div className="submit-card">
        <div className="submit-header">
          <h1 className="submit-title">Submit Your Proposal</h1>
          <p className="submit-subtitle">
            Pitch your idea and attract investors
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="submit-form-group">
            <label className="submit-label">Project Title</label>
            <input
              className="submit-input"
              type="text"
              value={submitDetails["project-title"]}
              onChange={(e) =>
                setSubmitDetails({
                  ...submitDetails,
                  "project-title": e.target.value,
                })
              }
              placeholder="e.g. Restaurant Expansion"
              required
            />
          </div>

          <div className="submit-form-group">
            <label className="submit-label">Description</label>
            <textarea
              className="submit-textarea"
              value={submitDetails.description}
              onChange={(e) =>
                setSubmitDetails({
                  ...submitDetails,
                  description: e.target.value,
                })
              }
              placeholder="Explain your business idea..."
              required
            />
          </div>

          <div className="submit-form-group">
            <label className="submit-label">Amount Needed (KES)</label>
            <input
              className="submit-input"
              type="number"
              value={submitDetails["amount-needed"]}
              onChange={(e) =>
                setSubmitDetails({
                  ...submitDetails,
                  "amount-needed": e.target.value,
                })
              }
              placeholder="e.g. 50000"
              required
            />
          </div>

          <div className="submit-form-group">
            <label className="submit-label">Upload Image</label>
            <div className="submit-file-box">
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setSubmitDetails({
                    ...submitDetails,
                    "upload-image": e.target.files[0],
                  })
                }
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Submit;
