import React from 'react';

const SearchResults = ({ countries, searchTerm }) => {
    const searchResults = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    let displayValue = ['']
    if (searchResults.length > 10 && searchTerm.length > 0) {
        displayValue[0] = "Too many matches, specify another filter";
    }

    return (
    displayValue.map(value => <p key={value}>{value}</p>)
    );
}

export default SearchResults;