import React, { useEffect, useState } from "react";
import axios from "axios";

function Reports() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/admin/reports")
      .then((res) => setReport(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!report) return <p>Loading reports...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Platform Reports</h2>
      <p>Total Users: {report.totalUsers}</p>
      <p>Total Properties: {report.totalProperties}</p>
      <p>Total Revenue: ₹{report.revenue}</p>
    </div>
  );
}

export default Reports;
