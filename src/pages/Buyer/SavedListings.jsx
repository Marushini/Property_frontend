import React, { useEffect, useState } from "react";
import axios from "axios";

function SavedListings() {
  const [listings, setListings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchSavedListings = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://property-backend-o26n.onrender.com/api/buyer/saved",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setListings(res.data);
      } catch (err) {
        setMessage("Failed to load saved listings");
      }
    };

    fetchSavedListings();
  }, []);

  const handleRemove = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://property-backend-o26n.onrender.com/api/buyer/saved/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setListings(listings.filter((item) => item._id !== id));
    } catch (err) {
      setMessage("Failed to remove listing");
    }
  };

  return (
    <div>
      <h2>Saved Listings</h2>
      {message && <p>{message}</p>}
      {listings.length === 0 ? (
        <p>No saved properties yet.</p>
      ) : (
        <ul>
          {listings.map((listing) => (
            <li key={listing._id}>
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
              <p>₹{listing.price}</p>
              <button onClick={() => handleRemove(listing._id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SavedListings;
