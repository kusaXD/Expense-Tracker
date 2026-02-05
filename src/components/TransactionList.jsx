import React from "react";
import { useTransactions } from "../context/TransactionContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { transactions } = useTransactions();

  return (
    <div className="bg-white text-black rounded-lg shadow-lg w-[900px] p-7 m-5">
      <p className="text-3xl font-bold">Recent Transactions</p>
      {transactions.length > 1 ? (
        <div>
          {transactions.slice(1).map((transaction) => (
            <TransactionItem transaction={transaction} />
          ))}
        </div>
      ) : (
        <p className="text-3xl m-3 p-3">empty</p>
      )}
    </div>
  );
}

export default TransactionList;
