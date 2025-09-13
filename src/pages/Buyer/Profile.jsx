import React, { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://property-backend-o26n.onrender.com/api/buyer/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setForm(res.data);
      } catch (err) {
        setMessage("Failed to load profile");
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "https://property-backend-o26n.onrender.com/api/buyer/profile",
        form,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage("Profile updated successfully!");
    } catch (err) {
      setMessage("Failed to update profile");
    }
  };

  return (
    <div>
      <h2>My Profile</h2>
      <form onSubmit={handleSave}>
        <input
          type="text"
          name="name"
          value={form.name}
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          value={form.phone}
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Profile;
