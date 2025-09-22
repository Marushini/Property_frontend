import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import UserVerification from "./UserVerification";
import PropertyVerification from "./PropertyVerification";
import Reports from "./Reports";
import DisputeResolution from "./DisputeResolution";

function AdminDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>👩‍💼 Admin Dashboard</h1>

      {/* Navigation Menu */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="users">
          <button>User Verification</button>
        </Link>
        <Link to="properties">
          <button>Property Verification</button>
        </Link>
        <Link to="reports">
          <button>Reports</button>
        </Link>
        <Link to="disputes">
          <button>Dispute Resolution</button>
        </Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="users" element={<UserVerification />} />
        <Route path="properties" element={<PropertyVerification />} />
        <Route path="reports" element={<Reports />} />
        <Route path="disputes" element={<DisputeResolution />} />
      </Routes>
    </div>
  );
}

export default AdminDashboard;
