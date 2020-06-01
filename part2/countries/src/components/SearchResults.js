import React from 'react';

const SearchResults = ({ searchResults, setShowClick }) => {
    return (
        <ul>
            {searchResults.map(country => <li key={country.name}>{country.name} <button onClick={() => setShowClick(country.name)}>show</button></li>)}
        </ul>
    )
}

export default SearchResults;