import React, { useState } from "react";

function EligibilityCalculator() {
  const [income, setIncome] = useState("");
  const [liabilities, setLiabilities] = useState("");
  const [creditScore, setCreditScore] = useState("");
  const [eligibility, setEligibility] = useState(null);

  const calculateEligibility = (e) => {
    e.preventDefault();

    const disposableIncome = parseFloat(income) - parseFloat(liabilities);

    let factor = 0.3; // 30% of disposable income rule
    if (creditScore >= 750) factor = 0.4;
    else if (creditScore < 600) factor = 0.2;

    const eligibleLoan = disposableIncome * 12 * factor;

    setEligibility(eligibleLoan.toFixed(2));
  };

  return (
    <div>
      <h2>Loan Eligibility Calculator</h2>
      <form onSubmit={calculateEligibility}>
        <input
          type="number"
          placeholder="Monthly Income (₹)"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Monthly Liabilities (₹)"
          value={liabilities}
          onChange={(e) => setLiabilities(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Credit Score"
          value={creditScore}
          onChange={(e) => setCreditScore(e.target.value)}
          required
        />
        <button type="submit">Check Eligibility</button>
      </form>

      {eligibility && (
        <div>
          <h3>Eligible Loan Amount: ₹{eligibility}</h3>
        </div>
      )}
    </div>
  );
}

export default EligibilityCalculator;
