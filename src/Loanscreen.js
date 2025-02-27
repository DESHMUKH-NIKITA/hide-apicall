import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const ConditionTable = () => {
  const [conditions, setConditions] = useState([
    { parameter: "Cibil Score", operator: "", value: "" },
    { parameter: "Investment Ratio", operator: "", value: "" },
    { parameter: "Loan Ratio", operator: "", value: "" },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedConditions = [...conditions];
    updatedConditions[index][field] = value;
    setConditions(updatedConditions);
  };

  const handleSubmit = () => {
    // Check if at least one row has data
    const hasData = conditions.some(
      (condition) => condition.operator && condition.value
    );

    if (!hasData) {
      alert("Please enter at least one condition before submitting!");
      return;
    }

    // Show success modal
    setShowModal(true);

    // Clear all fields after submission
    setConditions([
      { parameter: "Cibil Score", operator: "", value: "" },
      { parameter: "Investment Ratio", operator: "", value: "" },
      { parameter: "Loan Ratio", operator: "", value: "" },
    ]);
  };

  const handleCancel = () => {
    setConditions([
      { parameter: "Cibil Score", operator: "", value: "" },
      { parameter: "Investment Ratio", operator: "", value: "" },
      { parameter: "Loan Ratio", operator: "", value: "" },
    ]);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "800px", borderRadius: "12px" }}>
        <h4 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>
          Loan Table
        </h4>

        {conditions.map((condition, index) => (
          <div key={index} className="d-flex align-items-center mb-3">
            <div className="p-2 text-center border rounded" style={{ flex: 1, background: "#f8f9fa", fontWeight: "500" }}>
              {condition.parameter}
            </div>

            <select
              className="form-select mx-2"
              style={{ width: "35%" }}
              value={condition.operator}
              onChange={(e) => handleChange(index, "operator", e.target.value)}
            >
              <option value="">Operator</option>
              <option value=">">Greater Than (&gt;)</option>
              <option value="<">Less Than (&lt;)</option>
              <option value="-">Between (&minus;)</option>
              <option value="=">Equal To (&equals;)</option>
            </select>

            <input
              type="text"
              className="form-control"
              style={{ width: "35%" }}
              placeholder="Value"
              value={condition.value}
              onChange={(e) => handleChange(index, "value", e.target.value)}
            />
          </div>
        ))}

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-primary w-50 mx-1" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn btn-danger w-50 mx-1" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>

      {/* Bootstrap Modal for Success Message */}
      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">Success</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body text-center">
                <p>Data submitted successfully!</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" onClick={() => setShowModal(false)}>
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

export default ConditionTable;
