import React from "react";

function SummaryCards() {
  return (
    <div className="grid grid-cols-2 gap-4 w-80 m-5">
      <section className="bg-white p-4 rounded-lg shadow-lg">
        <p>Total Expenses</p>
        <p className="font-bold text-2xl text-red-600">$11</p>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg">
        <p>Total Income</p>
        <p className="font-bold text-2xl text-green-600">$22</p>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg w-80">
        <p>Balance</p>
        <p className="font-bold text-2xl text-blue-600">$33</p>
      </section>
    </div>
  );
}

export default SummaryCards;
