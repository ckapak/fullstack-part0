import React from 'react'

const Persons = ({ persons, personsToShow }) => {
  return (
    <ul>
      {personsToShow.map((person, i) => (
        <li key={i}>{person.name} {person.number}</li>
      ))}
    </ul>
  )
}

export default Persons


