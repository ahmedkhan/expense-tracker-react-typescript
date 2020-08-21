import React, { useContext } from 'react';

import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import { ITrans } from './../types/Interface';

export const TransactionList = () => {
  const { state } = useContext(GlobalContext);
 
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {state.transactions.map((transaction: ITrans) => (<Transaction id={transaction.id} text={transaction.text} amount={transaction.amount} />))}
      </ul>

    </>
  )
}
