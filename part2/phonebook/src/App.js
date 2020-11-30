import React, {useState, useEffect} from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/persons';
//import './index.css'; // Alternative solution with centralized stylesheet

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ message, setMessage ] = useState(null);

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
    if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLocaleLowerCase())) {  // Included '.toLowerCase()' to person.name and newPerson.name to also match lower case matches
      const userChoice = window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`);

      if (userChoice) {
        const currentPerson = persons.find(obj => obj.name === newPerson.name);
        personService.updatePerson(currentPerson.id, newPerson)
          .then((response) => {
            setPersons(persons.map(person => person.id !== currentPerson.id ? person : response.data));
          });
      }
    }
    else {
      personService
        .postPerson(newPerson)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName('');
          setNewNumber('');
          setMessage({
            text: `Added ${newPerson.name}`,
            id: 'green'
          })
          setTimeout(() => setMessage(null), 5000);
        });
    }
  }
  const handleDelete = (id, name) => {
    const userChoice = window.confirm(`Delete ${name}?`);

    if (userChoice) {
      personService.deletePerson(id)
      .then(response => setPersons(persons.filter(obj => (obj.id !== id))))
      .catch(error => {
        setMessage({
          text: `Information of ${name} has already been removed from server`,
          id: 'red'
        })
        setTimeout(() => setMessage(null), 5000);
        setPersons(persons.filter(obj => (obj.id !== id)));
      });
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={ message } />
      <Filter handleSearchChange={handleSearchChange}/>
      <h3>add a new</h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        />
      <h3>Numbers</h3>
        <Persons
          persons={persons}
          searchTerm={searchTerm}
          handleDelete={handleDelete}
          />
    </div>
  )
}

export default App;
