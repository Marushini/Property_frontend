import React, { useEffect, useState } from "react";
import axios from "axios";

function ManageProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get("https://property-backend-o26n.onrender.com/api/properties");
      setProperties(res.data);
    } catch (err) {
      console.error("Error fetching properties:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://property-backend-o26n.onrender.com/api/properties/${id}`);
      fetchProperties();
    } catch (err) {
      console.error("Error deleting property:", err);
    }
  };

  const card = {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#f9f9f9",
  };

  const buttonDelete = {
    padding: "6px 12px",
    background: "#dc3545",
    border: "none",
    borderRadius: "4px",
    color: "white",
    cursor: "pointer",
    marginTop: "8px",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Properties</h2>
      {properties.map((p) => (
        <div key={p._id} style={card}>
          <h3>{p.title}</h3>
          <p>{p.location}</p>
          <p>₹{p.price}</p>
          <button style={buttonDelete} onClick={() => handleDelete(p._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ManageProperties;
