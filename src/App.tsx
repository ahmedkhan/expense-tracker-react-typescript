import React from 'react';
import {TrackerProvider} from './context/GlobalState';
import './App.css';
import Head from './components/Head';
import Balance from './components/Balance';

function App() {
  return (

  <TrackerProvider>  
    <div className="Container">
      <Head/>
      <Balance/>
    </div>
  </TrackerProvider>  
  );
}

export default App;
