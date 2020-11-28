import React from 'react';

const Filter = ({handleSearchChange}) => {
    return (
        <>
            <label for="filter">filter shown with</label>
            <input onChange={handleSearchChange} name="filter" />
        </>
    )
}

export default Filter;
