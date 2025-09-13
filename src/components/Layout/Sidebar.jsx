import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css";

function Sidebar({ role }) {
  return (
    <aside className="sidebar">
      <ul>
        {role === "buyer" && (
          <>
            <li><Link to="/buyer/dashboard">Dashboard</Link></li>
            <li><Link to="/buyer/profile">Profile</Link></li>
            <li><Link to="/buyer/saved">Saved Listings</Link></li>
          </>
        )}

        {role === "seller" && (
          <>
            <li><Link to="/seller/dashboard">Dashboard</Link></li>
            <li><Link to="/seller/add">Add Property</Link></li>
            <li><Link to="/seller/manage">Manage Properties</Link></li>
            <li><Link to="/seller/offers">Track Offers</Link></li>
          </>
        )}

        {role === "admin" && (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/users">User Verification</Link></li>
            <li><Link to="/admin/properties">Property Verification</Link></li>
            <li><Link to="/admin/reports">Reports</Link></li>
            <li><Link to="/admin/disputes">Dispute Resolution</Link></li>
          </>
        )}
      </ul>
    </aside>
  );
}

export default Sidebar;
