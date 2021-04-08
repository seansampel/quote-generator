import { useState, useEffect } from 'react';

  const Quotes = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
  
    useEffect(() => {
      getQuote()
    }, []);
  
    const getQuote = () => {
      let url = `https://gist.githubusercontent.com/seansampel/624675351cdf87accbab7d147a3e92f3/raw/835d36ed0332a800db7d8b53b1d5d07675b89585/quotes.json`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          let dataQuotes = data.quotes;
          let randomNum = Math.floor(Math.random() * dataQuotes.length);
          let randomQuote = dataQuotes[randomNum];
  
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author);
        })
    }
  
    const handleClick = () => {
      getQuote();
    }
 
    return (
      <footer id="quote-box">
        <div id="text"><p>{quote}</p></div>
        <br/>
        <div id="author"><h5>{author}</h5></div>
        <div id="Keane"></div>
        <div id="buttons">
        <br/>
          <button onClick={handleClick} id="new-quote">Keano...</button>
        </div>
      </footer>
    )
  }



export default Quotes;