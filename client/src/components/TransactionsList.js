import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((el) => (
          <Transaction key={el.id} transaction={el} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
