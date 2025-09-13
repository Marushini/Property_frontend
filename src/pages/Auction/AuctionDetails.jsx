import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AuctionDetails.css";

function AuctionDetails() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    axios
      .get(`https://property-backend-o26n.onrender.com/api/auctions/${id}`)
      .then((res) => setAuction(res.data))
      .catch((err) => console.error("Error fetching auction details:", err));
  }, [id]);

  if (!auction) return <p>Loading auction details...</p>;

  return (
    <div className="auction-details-container">
      <h2>{auction.propertyTitle}</h2>
      <p>{auction.description}</p>
      <p>
        <strong>Starting Price:</strong> ₹{auction.startingPrice}
      </p>
      <p>
        <strong>Current Bid:</strong> ₹{auction.currentBid || "No bids yet"}
      </p>
      <p>
        <strong>Status:</strong> {auction.status}
      </p>
    </div>
  );
}

export default AuctionDetails;
