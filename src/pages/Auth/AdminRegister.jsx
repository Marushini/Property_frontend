import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminRegister() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "admin", // default role
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation before sending
    if (!form.email || !form.password || !form.role) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Registration successful! Please login.");
      navigate("/admin/login");
    } catch (err) {
      // Show detailed error from backend if available
      setError(err.response?.data?.message || "Registration failed");
      console.error(err.response?.data);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Admin Register</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "12px" }}
      >
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
        {/* Editable role input */}
        <input
          type="text"
          name="role"
          placeholder="Role (admin, buyer, seller)"
          value={form.role}
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default AdminRegister;
