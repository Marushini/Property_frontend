import React, { useState } from "react";

function EmiCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateEmi = (e) => {
    e.preventDefault();

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // monthly interest
    const months = parseInt(tenure) * 12; // years to months

    if (!principal || !rate || !months) return;

    const emiCalc =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    const totalPay = emiCalc * months;
    const totalInt = totalPay - principal;

    setEmi(emiCalc.toFixed(2));
    setTotalPayment(totalPay.toFixed(2));
    setTotalInterest(totalInt.toFixed(2));
  };

  return (
    <div>
      <h2>EMI Calculator</h2>
      <form onSubmit={calculateEmi}>
        <input
          type="number"
          placeholder="Loan Amount (₹)"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Interest Rate (%)"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Tenure (Years)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          required
        />
        <button type="submit">Calculate</button>
      </form>

      {emi && (
        <div>
          <h3>Results:</h3>
          <p>Monthly EMI: ₹{emi}</p>
          <p>Total Payment: ₹{totalPayment}</p>
          <p>Total Interest: ₹{totalInterest}</p>
        </div>
      )}
    </div>
  );
}

export default EmiCalculator;
