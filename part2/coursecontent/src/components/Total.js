import React from 'react';

const Total = ({ parts }) => {
    const sum = parts.reduce(((acc, cur) => acc + cur.exercises), 0);
    return(
        <p><strong>total of {sum} exercises</strong></p>
    ) 
}

export default Total;