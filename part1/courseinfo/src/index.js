// the goal is to refactor the data provided into a React project with components

import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      }, 
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }

  // Part is a child component which will go inside Content
  // Pass through data in the parameter
  // Part and exercises are the only pieces of data required to pass through
  const Part = ({ part, exercises }) => {
    return (
      <div>
        {part} {exercises}
      </div>
    )
  }

  // Content is a component
  // Part is the child within Content
  // in step 4 no need to go through the arrays using loops
  const Content = ({ parts }) => {
    // console.log(parts.length)
    // console.log(parts[0].name)
    return (
      <>
        <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} />
      </>
    )
  }

  const Total = ({ parts }) => {
    // console.log(parts[0].exercises)
    return (
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))