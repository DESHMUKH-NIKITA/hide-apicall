import React from "react";

const LoanApplicationForm = ({ onBack }) => {
  return (
    <div className="card p-4">
      <h3 className="fw-bold">Loan Application Form</h3>

      <form>
        <div className="mb-3">
          <label className="form-label">Loan Category</label>
          <select className="form-select">
            <option>Business Loan</option>
            <option>Personal Loan</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Loan Amount</label>
          <input type="number" className="form-control" placeholder="Enter amount" />
        </div>

        <div className="mb-3">
          <label className="form-label">Loan Term (Months/Years)</label>
          <input type="text" className="form-control" placeholder="e.g. 12 months" />
        </div>

        <div className="mb-3">
          <label className="form-label">Purpose of Loan</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Income Details (Optional)</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Collateral Details</label>
          <input type="text" className="form-control" />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            Back
          </button>
          <button type="submit" className="btn btn-success">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoanApplicationForm;
