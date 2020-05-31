import React from 'react';

const PersonFrom = (props) => {
  return (
    <form>
      <div>
        name: <input onChange={props.handleNameChange} value={props.newName} />
        <br/>
        number: <input onChange={props.handleNumberChange} value={props.newNumber} />
      </div>
      <div>
        <button onClick={props.handleSubmit} type="submit">add</button>
      </div>
  </form>
  )
}

export default PersonFrom;