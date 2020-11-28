import React from 'react';

const PersonFrom = ({handleSubmit, handleNameChange, handleNumberChange, newName, newNumber}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="name">name:</label>
        <input onChange={handleNameChange} value={newName} name="name" />
        <br/>
        <label for="number">number</label>
        <input onChange={handleNumberChange} value={newNumber} name="number" />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
  </form>
  )
}

export default PersonFrom;