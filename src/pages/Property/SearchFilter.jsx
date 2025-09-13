import React, { useState } from "react";

function SearchFilter({ onSearch }) {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(filters);
  };

  const containerStyle = {
    padding: "20px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    marginRight: "10px",
    padding: "6px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "6px 12px",
    background: "#28a745",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <form style={containerStyle} onSubmit={handleSearch}>
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={filters.location}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="number"
        name="minPrice"
        placeholder="Min Price"
        value={filters.minPrice}
        onChange={handleChange}
        style={inputStyle}
      />
      <input
        type="number"
        name="maxPrice"
        placeholder="Max Price"
        value={filters.maxPrice}
        onChange={handleChange}
        style={inputStyle}
      />
      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
        style={inputStyle}
      >
        <option value="">All Types</option>
        <option value="land">Land</option>
        <option value="apartment">Apartment</option>
        <option value="house">House</option>
        <option value="rental">Rental</option>
      </select>
      <button type="submit" style={buttonStyle}>
        Search
      </button>
    </form>
  );
}

export default SearchFilter;
