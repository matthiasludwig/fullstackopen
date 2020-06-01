import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './components/Display';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    //console.log("Getting data from restcountries.eu");
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;numericCode;population;flag;languages")
      .then(response => setCountries(response.data));
  }, []);

  function setSearch(event) {
    setSearchTerm(event.target.value);
  }

  function setShowClick(countryName) {
    setSearchTerm(countryName)
  }

  return (
    <>
    find countries: <input onChange={setSearch} value={searchTerm}></input>
    <Display countries={countries} searchTerm={searchTerm} setShowClick={setShowClick}/>
    </>
  );
}

export default App;
