import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas'
  }])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()

    const filterDuplicateName = persons.filter(
      person => person.name === newName
    )

    if (filterDuplicateName.length > 0) {
      alert(`${newName} is already added to phonebook`)
      setNewName("")
      return
    }

    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNewName} />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
