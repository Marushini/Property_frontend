import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserVerification.css";

function UserVerification() {
  const [users, setUsers] = useState([]);

  // Fetch users on page load
  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/admin/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // Handle verification
  const handleVerify = async (id) => {
    try {
      await axios.put(
        `https://property-backend-o26n.onrender.com/api/admin/users/${id}/verify`
      );
      setUsers((prev) =>
        prev.map((u) =>
          u._id === id ? { ...u, verified: true } : u
        )
      );
    } catch (err) {
      console.error("Verification error:", err);
    }
  };

  return (
    <div className="verification-container">
      <h2>User Verification</h2>
      <table className="verification-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.verified ? (
                  <span className="verified">Verified</span>
                ) : (
                  <span className="pending">Pending</span>
                )}
              </td>
              <td>
                {!user.verified && (
                  <button
                    className="verify-btn"
                    onClick={() => handleVerify(user._id)}
                  >
                    Verify
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserVerification;
