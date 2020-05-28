import React from 'react'

const AddPersonForm = ({ addPerson, newName, handleNewName, handleNewNumber, newNumber }) => {
  return (
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
  )
}

export default AddPersonForm