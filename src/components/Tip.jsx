import { useState } from "react";
import "./Tip.css";
const Tip = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("");
  const [tip, setTip] = 
  useState("0");
  const [total, setTotal] = useState("0");

  const handleClick = () => {
const bill=parseFloat(billAmount);
const tipPercent=parseFloat(tipPercentage)

const tip=(tipPercent/100*bill);
const totalAmount=tip+bill;

setTip(totalAmount.toFixed(2));
setTotal(tip.toFixed(2))


  };

  return (
    <div className="tip">
      <h1 className="heading">Tip Calculator</h1>
      <form action="submit" className="tipcalculator">
        <label htmlFor="text">Bill amount</label>
        <input
          className="amount"
          name="bill-amount"
          type="number"
          placeholder="Enter bill Amount"
          value={billAmount}
          onChange={(e)=>setBillAmount(e.target.value)}
        />
        <br />
        <label htmlFor="text">Tip percentage</label>
        <input
          className="amount"
          type="number"
          name="tip-percentage"
          placeholder="Enter tip %"
          value={tipPercentage}
          onChange={(e)=>setTipPercentage(e.target.value)}
        />

        <p>Tip amount :${tip}</p>
        <p>Total :${total}</p>
      </form>
      <button className="btn" onClick={handleClick}>
        Calculate
      </button>
    </div>
  );
};

export default Tip;
