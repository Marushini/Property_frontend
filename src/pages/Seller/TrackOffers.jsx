import React, { useEffect, useState } from "react";
import axios from "axios";

function TrackOffers() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/offers")
      .then((res) => setOffers(res.data))
      .catch((err) => console.error("Error fetching offers:", err));
  }, []);

  const card = {
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "15px",
    marginBottom: "15px",
    backgroundColor: "#fafafa",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Track Offers</h2>
      {offers.length === 0 ? (
        <p>No offers yet.</p>
      ) : (
        offers.map((offer) => (
          <div key={offer._id} style={card}>
            <p>
              <strong>Buyer:</strong> {offer.buyerName}
            </p>
            <p>
              <strong>Amount:</strong> ₹{offer.amount}
            </p>
            <p>
              <strong>Status:</strong> {offer.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default TrackOffers;
