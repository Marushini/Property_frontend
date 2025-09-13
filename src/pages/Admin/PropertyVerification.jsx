import React, { useEffect, useState } from "react";
import axios from "axios";

function PropertyVerification() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/admin/properties")
      .then((res) => setProperties(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(
        `https://property-backend-o26n.onrender.com/api/admin/properties/${id}/approve`
      );
      setProperties(
        properties.map((p) =>
          p._id === id ? { ...p, status: "approved" } : p
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(
        `https://property-backend-o26n.onrender.com/api/admin/properties/${id}/reject`
      );
      setProperties(
        properties.map((p) =>
          p._id === id ? { ...p, status: "rejected" } : p
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Property Verification</h2>
      <ul>
        {properties.map((p) => (
          <li key={p._id}>
            {p.title} - {p.status}
            {p.status === "pending" && (
              <>
                <button onClick={() => handleApprove(p._id)}>Approve</button>
                <button onClick={() => handleReject(p._id)}>Reject</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyVerification;
