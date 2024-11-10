import React, { useState } from "react";

function EMIcal() {
  const [loan, setLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);
  const [type, setSelectType] = useState("Months");
  const [emi, setEMI] = useState(0);

  const handleLoanAmount = (e) => {
    setLoan(parseFloat(e.target.value));
  };

  const handleTenure = (e) => {
    setTenure(parseInt(e.target.value));
  };

  const handleInterestRate = (e) => {
    setRate(parseFloat(e.target.value));
  };

  const myselect = (e) => {
    setSelectType(e.target.value);
  };

  const submitMe = (e) => {
    e.preventDefault();
    calculateEMI();
  };

  const calculateEMI = () => {
    let monthlyRate = rate / 12 / 100;
    let tenureInMonths = type === "Years" ? tenure * 12 : tenure;
    let emiCalculated =
      loan *
      monthlyRate *
      (Math.pow(1 + monthlyRate, tenureInMonths) /
        (Math.pow(1 + monthlyRate, tenureInMonths) - 1));
    setEMI(emiCalculated.toFixed(2));
  };

  const clear = () => {
    setLoan(0);
    setTenure(0);
    setRate(0);
    setSelectType("Months");
    setEMI(0);
  };

  return (
    <div className="App">
      <h1>EMI Calculator</h1>
      <table border="0px" align="Center" style={{ width: "50%" }}>
        <tbody>
          <tr>
            <td><label>Loan Amount: Rs </label></td>
            <td>
              <input type="number" name="loan" value={loan} onChange={handleLoanAmount} />
            </td>
          </tr>
          <tr>
            <td><label>Loan Tenure: </label></td>
            <td>
              <input type="number" name="tenure" value={tenure} onChange={handleTenure} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <select name="tenureType" id="tenureType" value={type} onChange={myselect}>
                <option value="Months">Months</option>
                <option value="Years">Years</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Interest Rate: </label></td>
            <td>
              <input type="number" name="rate" value={rate} onChange={handleInterestRate} />
            </td>
          </tr>
          <tr>
            <td><button onClick={clear}>Clear</button></td>
            <td><button onClick={submitMe}>Calculate</button></td>
          </tr>
        </tbody>
      </table>
      <div id="result">
        The Every Monthly Installment (EMI): Rs {emi}
      </div>
    </div>
  );
}

export default EMIcal;
