import { useState } from "react";

function ExpenseForm({addExpense}){

const [name,setName] = useState("");
const [amount,setAmount] = useState("");
const [category,setCategory] = useState("Food");

const submitHandler = (e)=>{
e.preventDefault();

const expense={
id:Date.now(),
name,
amount:Number(amount),
category
};

addExpense(expense);

setName("");
setAmount("");
};

return(

<form onSubmit={submitHandler}>

<input
type="text"
placeholder="Expense Name"
value={name}
onChange={(e)=>setName(e.target.value)}
required
/>

<input
type="number"
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
required
/>

<select
value={category}
onChange={(e)=>setCategory(e.target.value)}
>

<option>Food</option>
<option>Travel</option>
<option>Marketing</option>
<option>Utilities</option>
<option>Other</option>

</select>

<button>Add</button>

</form>

);

}

export default ExpenseForm;