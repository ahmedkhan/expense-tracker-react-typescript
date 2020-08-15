import React, { useContext } from 'react';
import {ITrans} from './../types/Interface';
import { Tracker } from '../context/GlobalState';

const Balance = () => {
    const {state} = useContext(Tracker);

    const amounts = state.transactions.map((transaction:ITrans) => transaction.amount);
    const total = +amounts.reduce((acc:number, item:number) => (acc += item),0).toFixed(2); 

    return (
        <>
        <div className='balanceBox'>
            <h3>Balance</h3>
        </div>
        </>
    )
}

export default Balance;

