import React from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionFilter() {
  const { filter, setFilter } = useTransactions();

  function handleChange(e) {
    setFilter(e.target.value);
  }

  return (
    <div className="card">
      <p className="text-3xl font-bold">Filter by</p>
      <select
        name="category"
        value={filter}
        onChange={handleChange}
        className="w-full bg-gray-800 text-white text-lg p-2 m-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
      >
        <option value="">All categories</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="utilities">Utilities</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}

export default TransactionFilter;
