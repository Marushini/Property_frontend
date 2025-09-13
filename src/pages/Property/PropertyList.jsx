import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.error("Error fetching properties:", err));
  }, []);

  const cardStyle = {
    border: "1px solid #ddd",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "6px",
    backgroundColor: "#fafafa",
  };

  const buttonStyle = {
    display: "inline-block",
    marginTop: "10px",
    padding: "6px 12px",
    background: "#007bff",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Properties</h2>
      {properties.map((property) => (
        <div key={property._id} style={cardStyle}>
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>Price: ₹{property.price}</p>
          <Link to={`/properties/${property._id}`} style={buttonStyle}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
