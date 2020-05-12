import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
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
      <h1>give feedback</h1>
        <Button handleClick={() => handleClick('good')} text={'good'} />
        <Button handleClick={() => handleClick('neutral')} text={'neutral'} />
        <Button handleClick={() => handleClick('bad')} text={'bad'} />
      <h1>statistics</h1>
        <p>good {sentiment.good}</p>
        <p>neutral {sentiment.neutral}</p>
        <p>bad {sentiment.bad}</p>
    </div>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

