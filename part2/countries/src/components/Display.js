import React from 'react';
import SearchResults from './SearchResults';
import Message from './Message';
import Country from './Country';

const Display = ({ countries, searchTerm }) => {
    const searchResults = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));

    if (searchResults.length === 1) {
        return <Country countryInformation={searchResults[0]} />;
    }
    else if (searchResults.length < 10) {
        console.log(searchResults.length)
       return <SearchResults searchResults={searchResults}/>;
    }
    
    else {
        return <Message text="Too many matches, specify another filter"/>
    }
}

export default Display;