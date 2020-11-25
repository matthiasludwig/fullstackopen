import React from 'react';

const Persons = ({persons, searchTerm, handleDelete}) => {
    const displayPersons = persons.filter(person => (person.name.toLowerCase().includes(searchTerm)));
    // console.log(displayPersons);  // Debug

    return (
        <>
        {displayPersons.map(person =>  <p key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person.id, person.name)}>delete</button> </p>)}
        </>
    )
}

export default Persons;
