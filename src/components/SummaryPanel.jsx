function SummaryPanel({expenses}){

const total = expenses.reduce(
(sum,e)=>sum + e.amount,
0
);

const categories={};

expenses.forEach((e)=>{
categories[e.category]=(categories[e.category]||0)+e.amount;
});

return(

<div>

<h2>Total: ${total}</h2>

<h3>Category Breakdown</h3>

{Object.keys(categories).map((cat)=>(
<p key={cat}>
{cat}: ${categories[cat]}
</p>
))}

</div>

);

}

export default SummaryPanel;