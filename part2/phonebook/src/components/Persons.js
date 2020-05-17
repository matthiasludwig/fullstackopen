import React from 'react';

const Persons = ({persons, searchTerm}) => {
    return (
        <>
        {persons.map(person => (person.name.toLowerCase().includes(searchTerm)) ? <p key={person.name}>{person.name} {person.number}</p> : null)}
        </>
    )
}

export default Persons;
