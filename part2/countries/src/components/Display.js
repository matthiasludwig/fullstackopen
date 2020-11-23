import React from 'react';
import SearchResults from './SearchResults';
import Message from './Message';
import Country from './Country';

const Display = ({ countries, searchTerm, setShowClick }) => {
    const searchResults = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase().trim())); // Added trim() to remove Leading or trailing whitespaces

    if (searchResults.length === 1) {
        return <Country countryInformation={searchResults[0]} />;  // If only one country is left, show the details
    }
    else if (searchResults.length < 10) {
       return <SearchResults searchResults={searchResults} setShowClick={setShowClick}/>;  // If the results are less than 10, show the list of countries
    }
    else {
        return <Message text="Too many matches, specify another filter"/>  // Else show a message to specify the filter better
    }
}

export default Display;