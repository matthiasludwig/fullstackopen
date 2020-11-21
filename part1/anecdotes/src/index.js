import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function Button({handleClick, text}) {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

function Random({selectedAnecdote, votes}) {
  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{selectedAnecdote}<br/>
      has {votes} votes
      </p>
    </>
  )
}

function Rated({highestRated, voteNumbers}) {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <p>{highestRated} <br/>
      has {voteNumbers} votes</p>
    </>
  )
}

const App = (props) => {
  const range = props.anecdotes.length;  // To use to generate random number and fill points Array

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(range).fill(0));

  const maxIndex = points.indexOf(Math.max(...points));  // The index of the most voted option

  const changePoints = (index) => {
    const copyPoints = points.slice();
    copyPoints[index] += 1;
    setPoints(copyPoints);
  }

  return (
    <div>
      <Random votes={points[selected]} selectedAnecdote={props.anecdotes[selected]} />
      <Button handleClick={() => changePoints(selected)} text={"vote"}/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * range))} text={"next anecdote"}/>
      <Rated highestRated={props.anecdotes[maxIndex]} voteNumbers={points[maxIndex]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
