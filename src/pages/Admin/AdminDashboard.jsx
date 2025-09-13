import React, { useEffect, useState } from "react";
import axios from "axios";

function UserVerification() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/admin/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleVerify = async (id) => {
    try {
      await axios.put(
        `https://property-backend-o26n.onrender.com/api/admin/users/${id}/verify`
      );
      setUsers(users.map(u => u._id === id ? { ...u, verified: true } : u));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>User Verification</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.email} - {user.role} -{" "}
            {user.verified ? (
              <span style={{ color: "green" }}>Verified</span>
            ) : (
              <button onClick={() => handleVerify(user._id)}>Verify</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserVerification;
