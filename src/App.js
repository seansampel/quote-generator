import React from 'react';
import Quotes from './components/Quotes';
import Keano from './Keano.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Roy Keane Quote Generator</h1>
        <h5>Roy Keane is not a man to mince his words as you're about to find out!</h5>
        <img alt='Keano' 
        className='Keano'
        src={Keano}/>
      </header>
      <Quotes />
    </div>
  );
}

export default App;
