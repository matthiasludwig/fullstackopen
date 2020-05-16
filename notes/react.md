# Introduction to React

## JSX and Components

* JSX is XML-like this means that every tag that is opened needs to be closed.
* Component names must always be captialized

## React Hooks

### State hook

```javascript
import React, { useState } from 'react'import ReactDOM from 'react-dom'

const App = () => {
  const [ counter, setCounter ] = useState(0)
  setTimeout(    () => setCounter(counter + 1),    1000  )
  return (
    <div>{counter}</div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
```

## Functional Programming

* Higher Order Function (Callback Function)
* Examples: `.map()`, `filter()`, `reduce()`
