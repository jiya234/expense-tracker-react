import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SummaryPanel from "./components/SummaryPanel";
import CurrencyConverter from "./components/CurrencyConverter";
import "./App.css";

function App() {

const [expenses,setExpenses] = useState(()=>{
const saved = localStorage.getItem("expenses");
return saved ? JSON.parse(saved) : [];
});
useEffect(()=>{
localStorage.setItem("expenses",JSON.stringify(expenses));
},[expenses]);
const addExpense = (expense)=>{
setExpenses([...expenses,expense]);
};

const deleteExpense = (id)=>{
if(window.confirm("Are you sure you want to delete this expense?")){
setExpenses(expenses.filter((e)=>e.id !== id));
}
};
const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

const categoryTotals = expenses.reduce((acc, e) => {
  if (!acc[e.category]) {
    acc[e.category] = 0;
  }
  acc[e.category] += Number(e.amount);
  return acc;
}, {});
// ... logic same rahega
return (
  <div className="container">
    <h1>Expense Tracker</h1>
    
    {/* Input Form Section */}
    <div className="card-panel">
      <ExpenseForm addExpense={addExpense} />
    </div>

    {/* Main Grid Section */}
    <div className="main-layout">
      
      {/* Left Column: Expenses List */}
      <div className="list">
        <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      </div>

      {/* Right Column: Sidebar (Summary + Converter) */}
<div className="sidebar">
<div className="summary">
  <h3>Summary</h3>

  <div className="summary-box">
    <span>Total Expenses</span>
    <div className="total">${total.toFixed(2)}</div>
  </div>

  <div className="summary-count">
    Total Items: {expenses.length}
  </div>
    <h4>By Category</h4>

    {Object.entries(categoryTotals).map(([cat, amt]) => (
      <div className="category-box" key={cat}>
        <span>{cat}</span>
        <span>${amt.toFixed(2)}</span>
      </div>
    ))}
  </div>

 <div className="converter">
  <CurrencyConverter expenses={expenses} />
</div>

</div>

    </div>
  </div>
);
}

export default App;