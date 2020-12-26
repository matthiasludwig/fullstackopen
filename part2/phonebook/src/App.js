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


  // Getting Initial persons array
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

  // Helper Functions
  const cleanUpTasks = (name) => {
    setNewName('');
    setNewNumber('');
    setMessage({
      text: `Added ${name}`,
      id: 'green'
    })
    setTimeout(() => setMessage(null, 5000));
  }

  const errorHandling = (error, name) => {
    console.log(error);
    setMessage({
      text: error,
      id: 'red'
    })
    setTimeout(() => setMessage(null), 5000);
  }

  // Create and Update
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    // Included '.toLowerCase()' to person.name and newPerson.name to also match lower case matches
    if (persons.some(person => person.name.toLowerCase() === newPerson.name.toLocaleLowerCase())) {
      const userChoice = window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`);

      if (userChoice) {
        const currentPerson = persons.find(obj => obj.name === newPerson.name);
        personService
          .updatePerson(currentPerson.id, newPerson)
          .then((response) => {
            setPersons(persons.map(person => person.id !== currentPerson.id ? person : response.data));
            cleanUpTasks(response.name);
          })
          .catch(error => {
            errorHandling(error.response.data.error, currentPerson.name);
            // setPersons(persons.filter(obj => (obj.id !== currentPerson.id)));  Disabled since failed validators should not lead to deletion of elements in the frontend
            personService.getPersons().then(response => setPersons(response.data));  // Since an error occured get the correct list from the backend again
          })
        }
    }
    else {
      personService
        .postPerson(newPerson)
        .then((response) => {
          setPersons(persons.concat(response.data));
          cleanUpTasks(newPerson.name);
        })
        .catch(error => {
          errorHandling(error.response.data.error, newPerson.name)
        })
      }
  }

  // Deletion
  const handleDelete = (id, name) => {
    const userChoice = window.confirm(`Delete ${name}?`);

    if (userChoice) {
      personService.deletePerson(id)
      .then(response => setPersons(persons.filter(obj => (obj.id !== id))))
      .catch(error => {
        errorHandling(error.response.data.error, name);
        personService.getPersons().then(response => setPersons(response.data));  // Check the status of the db with the backend since an error occured
      })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
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
