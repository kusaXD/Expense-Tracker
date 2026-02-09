import React, { useMemo } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { useTransactions } from "../context/TransactionContext";

function Chart() {
  const { transactions } = useTransactions();

  const expenseData = useMemo(() => {
    const categoryMap = {};

    transactions
      .filter((t) => t.type === "expense")
      .forEach((t) => {
        categoryMap[t.category] =
          (categoryMap[t.category] || 0) + parseFloat(t.amount);
      });

    return Object.entries(categoryMap).map(([name, value]) => ({
      name,
      value: parseFloat(value.toFixed(2)),
    }));
  }, [transactions]);

  const COLORS = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FECA57"];

  if (expenseData.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg m-5 text-center">
        <p className="text-gray-500">No expenses yet</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg m-5">
      <h2 className="font-bold text-xl mb-4">Expenses by Category</h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={expenseData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {expenseData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
