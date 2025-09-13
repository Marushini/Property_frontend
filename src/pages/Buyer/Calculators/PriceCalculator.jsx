import React, { useState } from "react";

function PriceCalculator() {
  const [basePrice, setBasePrice] = useState("");
  const [tax, setTax] = useState("");
  const [registration, setRegistration] = useState("");
  const [stampDuty, setStampDuty] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [finalPrice, setFinalPrice] = useState(null);

  const calculatePrice = (e) => {
    e.preventDefault();

    const total =
      parseFloat(basePrice) +
      parseFloat(tax) +
      parseFloat(registration) +
      parseFloat(stampDuty) +
      parseFloat(maintenance);

    setFinalPrice(total.toFixed(2));
  };

  return (
    <div>
      <h2>Property Price Calculator</h2>
      <form onSubmit={calculatePrice}>
        <input
          type="number"
          placeholder="Base Price (₹)"
          value={basePrice}
          onChange={(e) => setBasePrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Taxes (₹)"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Registration Fees (₹)"
          value={registration}
          onChange={(e) => setRegistration(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Stamp Duty (₹)"
          value={stampDuty}
          onChange={(e) => setStampDuty(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Maintenance Charges (₹)"
          value={maintenance}
          onChange={(e) => setMaintenance(e.target.value)}
          required
        />
        <button type="submit">Calculate Final Price</button>
      </form>

      {finalPrice && (
        <div>
          <h3>Total Property Cost: ₹{finalPrice}</h3>
        </div>
      )}
    </div>
  );
}

export default PriceCalculator;
