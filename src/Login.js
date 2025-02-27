import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form refresh

    const apiUrl = "http://localhost:8000/api/authenticate";

    // https://kycapi.finanalyz.com/api/authenticate

    const requestData = {
      username,
      password,
      apiKey: "qQmnRlPiQF72Ebzxib0If7JftH6RSeXY620AaEuT"
    };

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`Login failed! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ Login Successful:", data);

      // Store token in localStorage
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", username);

      setMessage("✅ Login Successful!");
      alert("Login Successful! ✅");

      // Redirect to dashboard after login (modify as needed)
      window.location.href = "/dashboard";

    } catch (error) {
      console.error("❌ Error connecting to server:", error);
      setMessage("❌ Login Failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Login</h4>

        {message && (
          <div className={`alert ${message.includes("Failed") ? "alert-danger" : "alert-success"} text-center`}>
            {message}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
