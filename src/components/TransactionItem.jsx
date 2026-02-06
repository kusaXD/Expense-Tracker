import React from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionItem({ transaction }) {
  const { removeTransaction } = useTransactions();

  const handleRemove = () => {
    removeTransaction(transaction.id);
  };

  return (
    <div className="m-3 bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between shadow-sm">
      <section className="flex-1">
        <p className="text-lg font-medium text-gray-800">
          {transaction.description}
        </p>
        <p className="text-sm text-gray-500 capitalize">
          {transaction.category}
        </p>
      </section>

      <section className="mx-4 text-center min-w-[90px]">
        <p className="text-sm text-gray-500">Date</p>
        <p className="text-base font-medium text-gray-700">
          {transaction.date}
        </p>
      </section>

      <section className="min-w-[100px] text-right">
        <p
          className={`text-lg font-bold ${transaction.type === "expense" ? "text-red-600" : "text-green-600"}`}
        >
          {transaction.type === "expense" ? "-" : "+"}${transaction.amount}
        </p>
      </section>

      <button
        onClick={handleRemove}
        className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default TransactionItem;
