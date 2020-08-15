import React from 'react';
import {TrackerProvider} from './context/GlobalState';
import './App.css';

function App() {
  return (

  <TrackerProvider>  
    <div>
      <h1>Hello World...</h1>
    </div>
  </TrackerProvider>  
  );
}

export default App;
