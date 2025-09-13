import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AuctionList.css";

function AuctionList() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios
      .get("https://property-backend-o26n.onrender.com/api/auctions")
      .then((res) => setAuctions(res.data))
      .catch((err) => console.error("Error fetching auctions:", err));
  }, []);

  return (
    <div className="auction-list-container">
      <h2>Available Auctions</h2>
      <ul className="auction-list">
        {auctions.map((auction) => (
          <li key={auction._id} className="auction-card">
            <h3>{auction.propertyTitle}</h3>
            <p>Starting Price: ₹{auction.startingPrice}</p>
            <p>Status: {auction.status}</p>
            <Link to={`/auctions/${auction._id}`} className="details-btn">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AuctionList;
