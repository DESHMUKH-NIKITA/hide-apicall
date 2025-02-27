import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LoanApplicationForm from "./LoanApplicationForm";

const Dashboard = () => {
  const [loanType, setLoanType] = useState("secured");
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar text-white p-4">
          <h2 className="fw-bold">Dashboard</h2>
          <ul className="nav flex-column mt-4">
            <li className="nav-item mb-2">
              <button className="btn btn-link text-white text-decoration-none">Home</button>
            </li>
            <li className="nav-item mb-2">
              <button className="btn btn-link text-white text-decoration-none">Loan Applications</button>
            </li>
            <li className="nav-item mb-2">
              <button className="btn btn-link text-white text-decoration-none">Profile</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link text-white text-decoration-none">Logout</button>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="col-md-9 col-lg-10 ms-auto p-4 bg-light">
          {!showForm ? (
            <>
              <h1 className="fw-bold">Welcome to Your Dashboard</h1>
              <p className="text-muted">Manage your loans and view your application history.</p>

              {/* Loan Category Selection */}
              <div className="mt-4">
                <button className={`btn ${loanType === "secured" ? "btn-info" : "btn-outline-info"} me-2`} onClick={() => setLoanType("secured")}>Secured Loan</button>
                <button className={`btn ${loanType === "unsecured" ? "btn-info" : "btn-outline-info"}`} onClick={() => setLoanType("unsecured")}>Unsecured Loan</button>
              </div>

              {/* Loan Type Sections */}
              <div className="card mt-4">
                <div className="card-body">
                  <h5 className="card-title">{loanType === "secured" ? "Secured Loans" : "Unsecured Loans"}</h5>
                  <ul className="list-group">
                    <li className="list-group-item">Business Loan</li>
                    <li className="list-group-item">Personal Loan</li>
                  </ul>
                </div>
              </div>

              {/* Apply for Loan Button */}
              <button className="btn btn-success mt-4" onClick={() => setShowForm(true)}>Apply for a Loan</button>
            </>
          ) : (
            <LoanApplicationForm />
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
