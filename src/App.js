import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header />
      <TransactionForm />
      <SummaryCards />
    </div>
  );
}

export default App;
