import { useContext, useState } from "react";
import { createContext } from "react";

const TransactionsContext = createContext();

export const useTransactions = () => useContext(TransactionsContext);

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <TransactionsContext.Provider
      value={{ transactions, setTransactions, addTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
