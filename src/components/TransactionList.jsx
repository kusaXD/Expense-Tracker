import React from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionList() {
  const { transactions } = useTransactions();

  return (
    <div>
      {transactions.map((item) => (
        <div className="text-3xl text-white">{item.transaction}</div>
      ))}
    </div>
  );
}

export default TransactionList;
