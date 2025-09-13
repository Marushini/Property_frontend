import React, { useEffect, useState } from "react";
import axios from "axios";

function BuyerDashboard() {
  const [buyer, setBuyer] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBuyer = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://property-backend-o26n.onrender.com/api/buyer/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setBuyer(res.data);
      } catch (err) {
        setError("Failed to load buyer data");
      }
    };

    fetchBuyer();
  }, []);

  return (
    <div>
      <h2>Buyer Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {buyer ? (
        <div>
          <p>Welcome, {buyer.name}</p>
          <p>Email: {buyer.email}</p>
          <p>Role: {buyer.role}</p>
        </div>
      ) : (
        <p>Loading dashboard...</p>
      )}
    </div>
  );
}

export default BuyerDashboard;
