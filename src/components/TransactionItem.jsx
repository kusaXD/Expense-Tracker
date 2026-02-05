import React from "react";
import { useTransactions } from "../context/TransactionContext";

function TransactionItem({ transaction }) {
  return (
    <div className="m-3 bg-gray-100 rounded-lg h-20 p-3">
      <p className="text-lg font-bold">{transaction.transaction}</p>
    </div>
  );
}

export default TransactionItem;
