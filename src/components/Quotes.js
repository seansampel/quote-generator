import React, { useState, useEffect } from 'react';

const Quotes = () => {

  const [quote, setQuote] = useState('');

  const useEffect(() => {
    getQuote()
  }, []) 
  
  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
    .then(res => res.json());
    .then(data => (data => {
      let dataQuotes = data.quotes;
      let randomNumb = math.floor(Math.random() * dataQuotes.Math
      length);     
    })
    
  return (
    <div>
      Quotes
    </div>
  )
}

export default Quotes;