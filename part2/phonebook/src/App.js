import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{
    name: 'Arto Hellas', id: 1
  }])
  const [newName, setNewName] = useState('')

  const addPerson = (e) => {
    e.preventDefault()
    // console.log('button clicked', e.target)
    const personObject = {
      name: newName,
      id: persons.length + 1,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handlePersonChange = (e) => {
    // console.log(e.target.value)
    setNewName(e.target.value)
  }

  if (persons.some(e => e.name === newName)) {
    alert(`${newName} is already added to phonebook.`)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handlePersonChange} />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <div key={person.id} >
            {person.name} </ div>
        )}
      </ul>
    </div>
  )
}

export default App
