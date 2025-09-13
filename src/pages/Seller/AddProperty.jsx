import React, { useState } from "react";
import axios from "axios";

function AddProperty() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    price: "",
    description: "",
    type: "land",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://property-backend-o26n.onrender.com/api/properties",
        form
      );
      setMessage("Property added successfully!");
      setForm({ title: "", location: "", price: "", description: "", type: "land" });
    } catch (err) {
      setMessage("Error adding property.");
    }
  };

  const formStyle = {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#fafafa",
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "8px 14px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Property</h2>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          style={inputStyle}
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />
        <textarea
          style={inputStyle}
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
        <select
          style={inputStyle}
          name="type"
          value={form.type}
          onChange={handleChange}
        >
          <option value="land">Land</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="rental">Rental</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Add Property
        </button>
      </form>
      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default AddProperty;
