import React, { useContext } from 'react';
import {GlobalContext } from '../context/GlobalState';
import {ITrans} from './../types/Interface';


const Transaction: React.FC<ITrans> = (transaction) => {
    const {dispatch} = useContext(GlobalContext);

    function delTransaction(transaction:ITrans){
        dispatch({
            type:'DEL',
            payload:transaction
        });
    }
     const sign = transaction.amount < 0 ? '-' : '+';
    return(
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => delTransaction(transaction)} className="delete-btn">x</button>
      </li>
    )
}

export default Transaction;
