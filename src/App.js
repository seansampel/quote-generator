import axios from "axios";
import React from 'react';
import './App.css';

class Quote extends React.Component {
  constructor() {
    super();
    this.state = {
      Quote: '',
    }
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote () {
    axios.get('https://movie-database-imdb-alternative.p.rapidapi.com/')
    .then(res => {
      // let data = res.data.quotes
      // let quoteNum = Math.floor(Math.random() * data.length)
      // let Quote = data[quoteNum]

    this.state({
      quote: Quote['quote'],
    })
  })
}

getNewQuote = () => {
  this.Quote()
}
  
render() {
  const { Quote } = this.state

    return (
    <div className="Quote">
      <header className="Generator">

        <p>
          <h1>Quote generator</h1>
  
          <button className="seachButton"
          onClick={this.state.quote}>Click</button>
        </p>
 
      </header>
    </div>
    )
  };
};

export default Quote;
