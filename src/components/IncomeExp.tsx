import React, { useContext } from 'react';
import CountUp from 'react-countup';
import { GlobalContext } from '../context/GlobalState';
import { ITrans } from './../types/Interface';


const IncomeExp = () => {

    const { state } = useContext(GlobalContext);
 
    const amounts: Array<number> = state.transactions.map((transaction: ITrans) => transaction.amount);

    const income = +amounts.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = +(amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);

    return (
        <div className="inc-exp-container">
           <div>
            <h4>Income</h4>
            <p className="money plus">
                <CountUp
                    start={0}
                    end={income}
                    duration={3.00}
                    separator=","
                    decimals={2}
                    decimal="."
                    prefix="$" />
            </p>
           </div> 

           <div>
            <h4>Expense</h4>
            <p className="money minus">
                <CountUp
                    start={0}
                    end={expense}
                    duration={3.00}
                    separator=","
                    decimals={2}
                    decimal="."
                    prefix="$" />
            </p>
           </div> 
        </div>


    )
}

export default IncomeExp;