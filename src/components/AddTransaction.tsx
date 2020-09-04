import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ITrans } from './../types/Interface';
import {deferredPrompt} from '../sw';
const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);


    const { dispatch } = useContext(GlobalContext);

    function addTransaction(transaction: ITrans) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };

        addTransaction(newTransaction);
        
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then(function(choiceResult:any){
             console.log(choiceResult.outcome);

             if (choiceResult.outcome === 'dismissed'){
                 console.log("user cancel installiation")
             }else {
                 console.log("User Added to Home screen")
             }
            });                   
           
        }  
         
    
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)
                  </label>
                    <input type="number" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )

}

export default AddTransaction;