import { useContext, useState } from "react";
import { createContext } from "react";

const TransactionsContext = createContext();

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider = ({ children }) => {
  const [state, setState] = useState({
    transactions: [],
    totals: {
      expense: 0,
      income: 0,
    },
  });

  const addTransaction = (transaction) => {
    setState((prev) => {
      const amount = parseFloat(transaction.amount);

      const newTotals = { ...prev.totals };

      if (transaction.type === "expense") {
        newTotals.expense += amount;
      } else {
        newTotals.income += amount;
      }

      return {
        transactions: [...prev.transactions, transaction],
        totals: newTotals,
      };
    });
  };

  const removeTransaction = (id) => {
    setState((prev) => {
      return {
        transactions: prev.transactions.filter((item) => item.id !== id),
        totals: prev.totals,
      };
    });
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        totals: state.totals,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
