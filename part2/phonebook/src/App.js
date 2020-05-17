import React, {useState} from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if (persons.some(person => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to the phonebook`); // sonarlint complains but the task requires an alert() function
    }
    else {
      setPersons(persons.concat(newPerson));
      setNewName('');
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
        filter shown with <input onChange={handleSearchChange}></input>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
          <br/>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button onClick={handleSubmit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person => (person.name.toLowerCase().includes(searchTerm)) ? <p key={person.name}>{person.name} {person.number}</p> : null)}
    </div>
  )
}

export default App;
