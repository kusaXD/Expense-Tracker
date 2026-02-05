import React from "react";

function SummaryCards() {
  return (
    <div className="grid grid-cols-2 gap-4 w-[500px] m-5">
      <section className="bg-white p-4 rounded-lg shadow-lg">
        <p className="font-bold text-xl">Total Expenses</p>
        <p className="font-bold text-2xl text-red-600">$11</p>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg">
        <p className="font-bold text-xl">Total Income</p>
        <p className="font-bold text-2xl text-green-600">$22</p>
      </section>

      <section className="bg-white p-4 rounded-lg shadow-lg w-[500px]">
        <p className="font-bold text-xl">Balance</p>
        <p className="font-bold text-2xl text-violet-700">$33</p>
      </section>
    </div>
  );
}

export default SummaryCards;
