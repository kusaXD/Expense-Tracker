import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header />
      <TransactionForm />
      <SummaryCards />
      <TransactionList />
    </div>
  );
}

export default App;
