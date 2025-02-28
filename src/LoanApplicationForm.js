import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoanApplicationForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/upload-documents"); // Redirect to document upload page
  };

  const handleBack = () => {
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h3 className="fw-bold text-center mb-4">Loan Application Form</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-bold">Loan Category</label>
                <select className="form-select">
                  <option>Business Loan</option>
                  <option>Personal Loan</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Loan Amount</label>
                <input type="number" className="form-control" placeholder="Enter amount" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Loan Term (Months/Years)</label>
                <input type="text" className="form-control" placeholder="e.g. 12 months" required />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Purpose of Loan</label>
                <textarea className="form-control" rows="3" required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Income Details (Optional)</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold">Collateral Details</label>
                <input type="text" className="form-control" />
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary px-4" onClick={handleBack}>
                  Back
                </button>
                <button type="submit" className="btn btn-success px-4">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Popup Modal */}
      {showPopup && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Application Submitted</h5>
                <button type="button" className="btn-close" onClick={handlePopupClose}></button>
              </div>
              <div className="modal-body text-center">
                <p className="fw-bold">Your loan application has been submitted successfully!</p>
                <p className="text-muted">Now, please upload your Aadhaar & PAN card.</p>
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary px-4" onClick={handlePopupClose}>
                  Upload Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanApplicationForm;
