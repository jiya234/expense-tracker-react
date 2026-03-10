import {useState,useEffect} from "react";

function CurrencyConverter({expenses}){

const [currency,setCurrency] = useState("INR");
const [rate,setRate] = useState(null);

const total = expenses.reduce(
(sum,e)=>sum + e.amount,
0
);

useEffect(()=>{

fetch(`https://api.frankfurter.app/latest?from=USD&to=${currency}`)

.then(res=>res.json())

.then(data=>{
setRate(data.rates[currency]);
});

},[currency]);

return(

<div>

<h2>Currency Converter</h2>

<select
value={currency}
onChange={(e)=>setCurrency(e.target.value)}
>

<option value="INR">INR</option>
<option value="EUR">EUR</option>
<option value="GBP">GBP</option>

</select>

{rate && (
<div className="convert-result">

  <div className="convert-title">
    Converted Total
  </div>

  <div className="convert-value">
    {(total * rate).toFixed(2)} {currency}
  </div>

</div>
)}

</div>

);

}

export default CurrencyConverter;