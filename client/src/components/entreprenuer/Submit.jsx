import { useState } from "react";

function Submit() {
  const [submitDetails, setsubmitDetails] = useState({
    "project-title": "",
    description: "",
    "amount-needed": "",
    "upload-image": "",
  });

  return (
    <div className="submit-page">
      <div className="submit-card">
        <div className="submit-header">
          <h1 className="submit-title">Submit Your Proposal</h1>
          <p className="submit-subtitle">Pitch your idea and attract investors</p>
        </div>

        <form>
          <div className="submit-form-group">
            <label className="submit-label">Project Title</label>
            <input
              className="submit-input"
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

          <div className="submit-form-group">
            <label className="submit-label">Description</label>
            <textarea
              className="submit-textarea"
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

          <div className="submit-form-group">
            <label className="submit-label">Amount Needed (KES)</label>
            <input
              className="submit-input"
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

          <div className="submit-form-group">
            <label className="submit-label">Upload Image</label>
            <div className="submit-file-box">
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

          <button type="submit" className="submit-btn">
            Submit Proposal
          </button>
        </form>
      </div>
    </div>
  );
}

export default Submit;
