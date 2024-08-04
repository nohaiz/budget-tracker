function App() {

  const expenses = [
    {name: 'Groceries', amount: 50, budget: 100},
    {name: 'Electricity Bill', amount: 120, budget: 100},
    {name: 'Internet', amount: 40, budget: 50},
    {name: 'Rent', amount: 800, budget: 800},
    {name: 'Entertainment', amount: 60, budget: 50}
  ];

  return (
    <>
      <h1>Budget Tracker</h1>
      <ul>
        {expenses.map((expense, index) => {
          const isOverBudget = expense.amount > expense.budget;
          return (
            <li 
              key={index} 
              className={isOverBudget ? 'over-budget' : 'within-budget'}
            >
              {expense.name}: ${expense.amount} 
              {isOverBudget && <span className="warning"> (Over Budget)</span>}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
