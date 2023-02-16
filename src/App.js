import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 1, 28),
      location: 'AMAZON',
    },
    {
      id: "e2",
      title: "news Paper",
      amount: 104.12,
      date: new Date(2023, 2, 2),
      location: 'LOCAL',
    },
    {
      id: "e3",
      title: "car Insurance",
      amount: 294.12,
      date: new Date(),
      location: 'LIC',
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></ExpenseItem>
    </div>
  );
}

export default App;
