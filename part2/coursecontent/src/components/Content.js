import React from 'react';

const Total = ({ parts }) => {
    const sum = parts.reduce(((acc, cur) => acc + cur.exercises), 0);
    return(
      <p><strong>total of {sum} exercises</strong></p>
    ) 
  }
  
const Part = ({part}) => {
    return (
        <p>
        {part.name} {part.exercises}
        </p>    
    )
}

const Content = ({course}) => {
    return (
        <>
        {course.parts.map(part => <Part key={part.id} part={part} /> )}
        <Total parts={course.parts} />
        </>
    )
}

  export default Content;