import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import personService from './services/persons';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');

  useEffect(() => {
    // console.log("effecting!");  // Debug
    personService.getPersons().then(response => setPersons(response.data));
  }, []);

  // Controlled Components
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  }

  // Event handler
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
      personService
        .postPerson(newPerson)
        .then(response => setPersons(persons.concat(response.data)));
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearchChange={handleSearchChange}/>
      <h3>add a new</h3>
      <PersonForm
        handleSubmit={handleSubmit}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        />
      <h3>Numbers</h3>
        <Persons persons={persons} searchTerm={searchTerm}/>
    </div>
  )
}

export default App;
