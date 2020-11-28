import React from 'react';

const Filter = ({handleSearchChange}) => {
    return (
        <>
            <label htmlFor="filter">filter shown with</label>
            <input onChange={handleSearchChange} name="filter" />
        </>
    )
}

export default Filter;
