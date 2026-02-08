import React from "react";
import { useTransactions } from "../context/TransactionContext";
import TransactionItem from "./TransactionItem";

function TransactionList() {
  const { filteredTransactions } = useTransactions();

  return (
    <div className="card">
      <p className="text-3xl font-bold">Recent Transactions</p>
      {filteredTransactions.length > 0 ? (
        <div>
          {filteredTransactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
        </div>
      ) : (
        <p className="text-3xl m-3 p-3">empty</p>
      )}
    </div>
  );
}

export default TransactionList;
