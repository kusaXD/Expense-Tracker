import React from "react";

function TransactionItem({ transaction }) {
  return (
    <div className="m-3 bg-gray-100 rounded-lg h-20 p-3">
      <p className="text-lg font-bold">{transaction.amount}</p>
    </div>
  );
}

export default TransactionItem;
