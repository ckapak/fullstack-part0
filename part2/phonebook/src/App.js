import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [showAll, setShowAll] = useState(true)

  // filters the name
  const personsToShow = showAll
    ? persons
    : persons.filter(person => {
      return person.name.toLowerCase().includes(newSearch.toLowerCase())
    })

  const addPerson = (e) => {
    e.preventDefault()

    const filterDuplicateName = persons.filter(
      person => person.name === newName
    )

    if (filterDuplicateName.length > 0) {
      alert(`${newName} is already added to phonebook`)
      setNewName('')
      return
    }

    // if the person hasn't entered a phone number
    if (newNumber === '' || /[^\d -]/.test(newNumber)) {
      alert(`Please enter a valid phone number`)
      setNewNumber('')
      return
    }

    const personObject = {
      name: newName,
      number: newNumber
    }
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  // updating state based on input updates
  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleNewSearch = (e) => {
    console.log('we are typing', e.target)
    setNewSearch(e.target.value)
    setShowAll(false)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with: <input
          value={newSearch}
          onChange={handleNewSearch} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNewName} />
          Number: <input
            value={newNumber}
            onChange={handleNewNumber} />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person, i) => (
          <li key={i}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
