import React, { useEffect, useState } from "react";
import axios from "axios";

function DisputeResolution() {
  const [disputes, setDisputes] = useState([]);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/admin/disputes")
      .then((res) => setDisputes(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleResolve = async (id) => {
    try {
      await axios.put(
        `https://property-backend-o26n.onrender.com/api/admin/disputes/${id}/resolve`
      );
      setDisputes(
        disputes.map((d) => (d._id === id ? { ...d, resolved: true } : d))
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dispute Resolution</h2>
      <ul>
        {disputes.map((d) => (
          <li key={d._id}>
            {d.issue} - {d.resolved ? "Resolved ✅" : "Pending ❌"}
            {!d.resolved && (
              <button onClick={() => handleResolve(d._id)}>Resolve</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisputeResolution;
