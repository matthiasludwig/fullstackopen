import React from 'react';

const SearchResults = ({ searchResults }) => {
    return (
        <ul>
            {searchResults.map(country => <li key={country.name}>{country.name}</li>)}
        </ul>
    )
}

export default SearchResults;