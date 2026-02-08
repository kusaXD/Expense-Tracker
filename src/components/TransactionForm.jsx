import React, { useState } from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionForm() {
  const { addTransaction } = useTransactions();
  const [formData, setFormData] = useState({
    id: "",
    description: "",
    amount: "",
    type: "expense",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: Date.now().toString(),
      description: formData.description,
      amount: parseFloat(formData.amount),
      type: formData.type,
      category: formData.category,
      date: formData.date,
    };
    addTransaction(newTransaction);

    setFormData({
      id: "",
      description: "",
      amount: "",
      type: "",
      category: "",
      date: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} class="card w-[500px]">
      <h2 className="font-bold text-2xl text-gray-800 mb-4">
        Add new transaction
      </h2>

      <section className="mb-4">
        <label className="block text-gray-700 text-lg mb-1">Description</label>
        <input
          type="text"
          name="description"
          placeholder="Enter description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 text-white text-lg p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </section>

      <section className="mb-4">
        <label className="block text-gray-700 text-lg mb-1">Amount</label>
        <input
          name="amount"
          onChange={handleChange}
          value={formData.amount}
          type="number"
          placeholder="0.00"
          required
          step="0.01"
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
              checked={formData.type === "expense"}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-lg">Expense</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="type"
              value="income"
              checked={formData.type === "income"}
              onChange={handleChange}
              className="mr-2"
            />
            <span className="text-lg">Income</span>
          </label>
        </div>
      </section>

      <section className="mb-4">
        <label className="block text-gray-700 text-lg mb-1">Category</label>
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
          required
          className="w-full bg-gray-800 text-white text-lg p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
        >
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
          name="date"
          onChange={handleChange}
          value={formData.date}
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
  );
}

export default TransactionForm;
