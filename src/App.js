import Header from "./components/Header";

function App() {
  return (
    <div className="bg-gray-800 h-screen">
      <Header />
      <form className="w-72 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="font-bold text-2xl text-gray-800 mb-4">
          Add new transaction
        </h2>

        <section className="mb-4">
          <label className="block text-gray-700 text-lg mb-1">
            Description
          </label>
          <input
            type="text"
            placeholder="Enter description"
            className="w-full bg-gray-800 text-white text-lg p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </section>

        <section className="mb-4">
          <label className="block text-gray-700 text-lg mb-1">Amount</label>
          <input
            type="number"
            placeholder="0.00"
            className="w-full bg-gray-800 text-white text-lg p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </section>

        <section className="mb-4">
          <label className="block text-gray-700 text-lg mb-2">Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="type"
                value="expense"
                className="mr-2"
                defaultChecked
              />
              <span className="text-lg">Expense</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input type="radio" name="type" value="income" className="mr-2" />
              <span className="text-lg">Income</span>
            </label>
          </div>
        </section>

        <section className="mb-4">
          <label className="block text-gray-700 text-lg mb-1">Category</label>
          <select className="w-full bg-gray-800 text-white text-lg p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500">
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="utilities">Utilities</option>
            <option value="other">Other</option>
          </select>
        </section>

        <section className="mb-4">
          <label className="block text-gray-700 text-lg mb-1">Date</label>
          <input
            type="date"
            className="w-full bg-gray-800 text-white text-lg p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </section>

        <button
          type="submit"
          className="w-full text-white bg-violet-700 hover:bg-violet-800 py-2 rounded-lg text-lg font-semibold transition-colors"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default App;
