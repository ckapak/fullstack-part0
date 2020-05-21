import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = ({ anecdote }) =>
  <p>{anecdote}</p>

const Votes = ({ votes }) =>
  <p>has {votes} votes </p>

const App = () => {
  const [selected, setSelected] = useState(0)

  // setup an array to the length of anecdotes, when .fill gets passed an object it
  // will copy the reference and fill the modifed array with references to that object
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  // generates a random anecdote 
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  // votes for an anecdote
  const handleVote = () => {
    console.log('clicked')
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // find the anecdote with the most votes
  const mostVotes = Math.max(...votes)
  const winningAnecdote = anecdotes[votes.indexOf(mostVotes)]

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <hr />
      <button onClick={handleClick}>Next Anecdote</button>
      <button onClick={handleVote}>Vote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={winningAnecdote} />
      <Votes votes={mostVotes} />
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