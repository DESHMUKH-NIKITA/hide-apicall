import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LoanApplicationForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/dashboard");
  };

  // Handle file selection
  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-4">
            <h3 className="fw-bold text-center mb-4">Loan Application Form</h3>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Loan Category</label>
                  <select className="form-select">
                    <option>Business Loan</option>
                    <option>Personal Loan</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Loan Amount</label>
                  <input type="number" className="form-control" placeholder="Enter amount" required />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Loan Term (Months/Years)</label>
                  <input type="text" className="form-control" placeholder="e.g. 12 months" required />
                </div>

                <div className="col-md-6 mb-3">
                  <label className="form-label">Income Details (Optional)</label>
                  <input type="text" className="form-control" placeholder="Enter income details" />
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Purpose of Loan</label>
                <textarea className="form-control" rows="3" placeholder="Explain the purpose of the loan" required></textarea>
              </div>

              <div className="mb-3">
                <label className="form-label">Collateral Details</label>
                <input type="text" className="form-control" placeholder="Enter collateral details (if any)" />
              </div>

              {/* Aadhaar Upload */}
              <div className="mb-3">
                <label className="form-label">Upload Aadhaar Card (PDF/Image)</label>
                <input 
                  type="file" 
                  className="form-control" 
                  accept="image/*,.pdf" 
                  onChange={(e) => handleFileChange(e, setAadhaarFile)}
                  required
                />
                {aadhaarFile && (
                  <div className="mt-2">
                    <strong>Selected File:</strong> {aadhaarFile.name}
                  </div>
                )}
              </div>

              {/* PAN Upload */}
              <div className="mb-3">
                <label className="form-label">Upload PAN Card (PDF/Image)</label>
                <input 
                  type="file" 
                  className="form-control" 
                  accept="image/*,.pdf" 
                  onChange={(e) => handleFileChange(e, setPanFile)}
                  required
                />
                {panFile && (
                  <div className="mt-2">
                    <strong>Selected File:</strong> {panFile.name}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary px-4" onClick={() => navigate("/dashboard")}>
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
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn btn-primary px-4" onClick={handlePopupClose}>
                  OK
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
