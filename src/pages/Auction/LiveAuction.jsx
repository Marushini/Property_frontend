import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./LiveAuction.css";

function LiveAuction() {
  const { id } = useParams();
  const [auction, setAuction] = useState(null);
  const [bid, setBid] = useState("");

  useEffect(() => {
    axios
      .get(`https://property-backend-o26n.onrender.com/api/auctions/${id}`)
      .then((res) => setAuction(res.data))
      .catch((err) => console.error("Error fetching live auction:", err));
  }, [id]);

  const placeBid = async () => {
    try {
      const res = await axios.post(
        `https://property-backend-o26n.onrender.com/api/auctions/${id}/bid`,
        { amount: bid }
      );
      setAuction(res.data);
      setBid("");
    } catch (err) {
      console.error("Error placing bid:", err);
    }
  };

  if (!auction) return <p>Loading live auction...</p>;

  return (
    <div className="live-auction-container">
      <h2>{auction.propertyTitle}</h2>
      <p>Current Bid: ₹{auction.currentBid || auction.startingPrice}</p>
      <input
        type="number"
        placeholder="Enter your bid"
        value={bid}
        onChange={(e) => setBid(e.target.value)}
      />
      <button onClick={placeBid}>Place Bid</button>
    </div>
  );
}

export default LiveAuction;
