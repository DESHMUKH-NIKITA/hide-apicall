import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DocumentUpload = () => {
  const [aadhaarFile, setAadhaarFile] = useState(null);
  const [panFile, setPanFile] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (event, type) => {
    if (type === "aadhaar") {
      setAadhaarFile(event.target.files[0]);
    } else if (type === "pan") {
      setPanFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!aadhaarFile || !panFile) {
      alert("Please upload both Aadhaar and PAN card.");
      return;
    }

    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4">
            <h3 className="fw-bold text-center mb-4">Upload Aadhaar & PAN Card</h3>

            <form onSubmit={handleSubmit}>
              {/* Aadhaar Upload */}
              <div className="mb-3">
                <label className="form-label fw-bold">Upload Aadhaar Card</label>
                <input type="file" className="form-control" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileChange(e, "aadhaar")} required />
                {aadhaarFile && <small className="text-success">Selected: {aadhaarFile.name}</small>}
              </div>

              {/* PAN Upload */}
              <div className="mb-3">
                <label className="form-label fw-bold">Upload PAN Card</label>
                <input type="file" className="form-control" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => handleFileChange(e, "pan")} required />
                {panFile && <small className="text-success">Selected: {panFile.name}</small>}
              </div>

              {/* Buttons */}
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-outline-secondary px-4" onClick={() => navigate("/dashboard")}>
                  Back
                </button>
                <button type="submit" className="btn btn-primary px-4">
                  Upload Documents
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
                <h5 className="modal-title">Documents Uploaded</h5>
                <button type="button" className="btn-close" onClick={handlePopupClose}></button>
              </div>
              <div className="modal-body text-center">
                <p className="fw-bold">Your documents have been uploaded successfully!</p>
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

export default DocumentUpload;
