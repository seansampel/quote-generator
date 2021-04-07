import React, { useState } from 'react';
import axios from "axios";
import Quotes from './components/Quotes';
import './App.css';

function Quote () {


    return (
    <div className="Quote" >
      <header className="Generator">
      </header>
      <div id="text">
          <p>Lorem30  
          </p>
          
      </div>
      <div id="author">
        <p>John Doe</p>
        <button>Kick it!!</button>
      </div>
    </div>
    )
  };



export default Quote;
