import React from "react";
import { Link } from "react-router-dom";

function SellerDashboard() {
  const container = {
    padding: "20px",
  };
  const card = {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#f9f9f9",
  };
  const linkStyle = {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 12px",
    background: "#007bff",
    color: "white",
    borderRadius: "4px",
    textDecoration: "none",
  };

  return (
    <div style={container}>
      <h2>Seller Dashboard</h2>

      <div style={card}>
        <h3>Manage Properties</h3>
        <p>Add new listings or update existing ones.</p>
        <Link to="/seller/manage" style={linkStyle}>
          Go to Manage Properties
        </Link>
      </div>

      <div style={card}>
        <h3>Track Offers</h3>
        <p>See incoming offers from buyers.</p>
        <Link to="/seller/offers" style={linkStyle}>
          Go to Offers
        </Link>
      </div>
    </div>
  );
}

export default SellerDashboard;
