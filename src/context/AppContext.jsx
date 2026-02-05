import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useReducer } from "react";

const TransactionContext = createContext();

const initialState = {
  transaction: [],
};

//reducer func
function TransactionReducer(state, action) {
  switch (action.type) {
    case "Add_Transaction":
      return {
        ...state,
        transaction: [...state, action.payload],
      };
  }
}

//provider
export function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  function AddTransaction(transaction) {
    dispatch({ type: "Add_Transaction", payload: transaction });
  }

  return (
    <TransactionContext.Provider
      value={{ transaction: state.transaction, AddTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

//hook for context
export const useTransactionContext = () => {
  return useContext(TransactionContext);
};
