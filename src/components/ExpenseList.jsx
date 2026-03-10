function ExpenseList({expenses,deleteExpense}){
if(expenses.length === 0){
return <p>No expenses added yet</p>
}
return(

<div>

<h2>Expenses</h2>

{expenses.map((e)=>(
<div key={e.id} className="card">

<p>{e.name}</p>

<p>{e.category}</p>

<p>${e.amount}</p>

<button onClick={()=>deleteExpense(e.id)}>
Delete
</button>

</div>
))}

</div>

);
}

export default ExpenseList;