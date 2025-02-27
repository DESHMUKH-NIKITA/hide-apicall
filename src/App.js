import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard"; // Add a new Dashboard component
import Loanscreen from "./Loanscreen"; // Add a new Loanscreen component

const App = () => {
  const token = localStorage.getItem("authToken"); // Check if user is logged in

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
        <Route path="/loanscreen" element={token ? <Loanscreen /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
