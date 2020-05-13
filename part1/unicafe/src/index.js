import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function Statistics({sentiment}) {
  const total = (Object.values(sentiment)).reduce((curr, acc) => curr + acc); // Get total numbers of votes
  const average = ((sentiment.good * 1) + (sentiment.bad * (-1))) / total;
  const positive = (sentiment.good / total) * 100;

  return (
    <div>
    <h1>statistics</h1>
    <p>good {sentiment.good}</p>
    <p>neutral {sentiment.neutral}</p>
    <p>bad {sentiment.bad}</p>
    <p>all {total}</p>
    <p>average {(average) ? average : 0}</p>
    <p>positive {(positive) ? positive : 0} %</p>
  </div>
  )
}

function Buttons({sentiment, handleClick}) {
  const sentimentArray = Object.keys(sentiment);
  return (
    <>
    <h1>give feedback</h1>
    {sentimentArray.map((sentiment, index) => <Button key={index} handleClick={() => handleClick(sentiment)} text={sentiment} />)}
    </>
  )
}

const App = () => {
  const [sentiment, setSentiment] = useState({good: 0, neutral: 0, bad: 0});

  function handleClick(feedback) {
    const newSentiment = {...sentiment, [feedback]: (sentiment[feedback] + 1)};
    setSentiment(newSentiment);
  }

  return (
    <div>
      <Buttons sentiment={sentiment} handleClick={handleClick} />
      <Statistics sentiment={sentiment}/>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

