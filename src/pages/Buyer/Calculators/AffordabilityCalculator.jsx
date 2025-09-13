import React, { useState } from "react";

function AffordabilityCalculator() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [savings, setSavings] = useState("");
  const [affordableAmount, setAffordableAmount] = useState(null);

  const calculateAffordability = (e) => {
    e.preventDefault();

    const totalMonthly = parseFloat(income) - parseFloat(expenses);
    const yearlySavings = totalMonthly * 12 + parseFloat(savings);

    // Rule of thumb: ~3.5x annual income can be affordable
    const affordable = yearlySavings * 3.5;

    setAffordableAmount(affordable.toFixed(2));
  };

  return (
    <div>
      <h2>Affordability Calculator</h2>
      <form onSubmit={calculateAffordability}>
        <input
          type="number"
          placeholder="Monthly Income (₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Monthly Expenses (₹)"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Current Savings (₹)"
          value={savings}
          onChange={(e) => setSavings(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>

      {affordableAmount && (
        <div>
          <h3>Estimated Affordable Property Value: ₹{affordableAmount}</h3>
        </div>
      )}
    </div>
  );
}

export default AffordabilityCalculator;
