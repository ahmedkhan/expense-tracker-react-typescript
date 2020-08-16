import React, { useContext } from 'react';
import {ITrans} from './../types/Interface';
import { GlobalContext } from '../context/GlobalState';
import CountUp from 'react-countup';

const Balance = () => {
    const {state} = useContext(GlobalContext);

    const amounts = state.transactions.map((transaction:ITrans) => transaction.amount);
    const total = +amounts.reduce((acc:number, item:number) => (acc += item),0).toFixed(2); 

    return (
        <>
         <h4>Balance</h4>
          <h1><CountUp
                    start={0}
                    end={total}
                    duration={3.00}
                    separator=","
                    decimals={2}
                    decimal="."
                    prefix="$" />
            </h1>
        
        </>
    )
}

export default Balance;

