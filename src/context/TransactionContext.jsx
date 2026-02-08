import { useContext, useState, useMemo } from "react";
import { createContext } from "react";

const TransactionsContext = createContext();

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider = ({ children }) => {
  const [state, setState] = useState({
    transactions: [],
    totals: {
      expense: 0,
      income: 0,
      balance: 0,
    },
  });
  const [filter, setFilter] = useState("");

  const filteredTransactions = useMemo(() => {
    if (!filter || filter === "") {
      return state.transactions;
    }
    return state.transactions.filter(
      (transaction) => transaction.category === filter,
    );
  }, [state.transactions, filter]);

  const addTransaction = (transaction) => {
    setState((prev) => {
      const amount = parseFloat(transaction.amount);

      const newTotals = { ...prev.totals };

      if (transaction.type === "expense") {
        newTotals.expense += amount;
        newTotals.balance -= amount;
      } else {
        newTotals.income += amount;
        newTotals.balance += amount;
      }

      return {
        transactions: [...prev.transactions, transaction],
        totals: newTotals,
      };
    });
  };

  const removeTransaction = (id) => {
    setState((prev) => {
      const transactionToRemove = prev.transactions.find(
        (item) => item.id === id,
      );

      if (!transactionToRemove) {
        return prev;
      }

      const amount = parseFloat(transactionToRemove.amount);
      const newTotals = { ...prev.totals };

      if (transactionToRemove.type === "expense") {
        newTotals.expense -= amount;
        newTotals.balance += amount;
      } else {
        newTotals.income -= amount;
        newTotals.balance -= amount;
      }

      return {
        transactions: prev.transactions.filter((item) => item.id !== id),
        totals: newTotals,
      };
    });
  };

  return (
    <TransactionsContext.Provider
      value={{
        transactions: state.transactions,
        totals: state.totals,
        filter,
        filteredTransactions,
        setFilter,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
