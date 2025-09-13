import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios
      .get(`https://property-backend-o26n.onrender.com/api/properties/${id}`)
      .then((res) => setProperty(res.data))
      .catch((err) => console.error("Error fetching property:", err));
  }, [id]);

  if (!property) return <p>Loading property details...</p>;

  const containerStyle = {
    padding: "20px",
    lineHeight: "1.6",
  };

  const headingStyle = {
    marginBottom: "15px",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>{property.title}</h2>
      <p>{property.description}</p>
      <p>
        <strong>Location:</strong> {property.location}
      </p>
      <p>
        <strong>Price:</strong> ₹{property.price}
      </p>
      <p>
        <strong>Status:</strong> {property.status}
      </p>
    </div>
  );
}

export default PropertyDetails;
