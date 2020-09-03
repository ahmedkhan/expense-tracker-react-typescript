import React from 'react';
import {GlobalProvider} from './context/GlobalState';
import './App.css';
import Head from './components/Head';
import Balance from './components/Balance';
import IncomeExp from './components/IncomeExp';
import { TransactionList } from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
  
function App() {
  return (
   
  <GlobalProvider>      
      <Head/>
    <div className="container">  
      <Balance/>
      <IncomeExp/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  </GlobalProvider>  
  );
}

export default App;
