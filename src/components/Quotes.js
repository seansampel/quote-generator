import { useState, useEffect } from 'react';

const Quotes = () => {

  const [quote, setQuote] = useState('title');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote()
  }, []) 
  
  const getQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let dataQuotes = data.quotes;
      let randomNum = Math.floor(Math.random() * dataQuotes.Math
      .length); 
      let randomQuote = dataQuotes[randomNum];
      console.log(randomQuote)
    })
    
    const handleSubmit = () => {
      getQuote();
    }
  return (
    <div className="Quote" >
    <header className="Generator">
    </header>
    <div id="text">
        <p>Lorem30  
        </p>
    </div>
    <div id="author">
      <p>Keane on...</p>
    </div>
    <button onClick={handleSubmit}>Kick it!</button>
  </div>
    )
  }
};

export default Quotes;