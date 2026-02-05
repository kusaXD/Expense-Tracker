import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-[550px_1fr] gap-6 p-6 max-w-7xl mx-auto">
        <div className="space-y-6">
          <TransactionForm />
          <SummaryCards />
        </div>
        <div>
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;
