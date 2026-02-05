import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TransactionProvider } from "./context/AppContext";
import { TransactionsProvider } from "./context/TransactionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TransactionProvider>
    <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </TransactionProvider>,
);
