import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BuyerLogin() {
  const [form, setForm] = useState({ email: "", password: "", role: "buyer" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form // now sending the form with role included
      );

      // Save token to localStorage
      localStorage.setItem("token", res.data.token);

      // Redirect to Buyer Dashboard
      navigate("/buyer/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "6px" }}>
      <h2 style={{ textAlign: "center" }}>Buyer Login</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        >
          <option value="buyer">Buyer</option>
      
        </select>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default BuyerLogin;
