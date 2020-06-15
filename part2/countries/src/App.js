import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './components/Display';


function App() {
  // Creating State for App()
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect is used to gather data from the REST API
  useEffect(() => {
    //console.log("Getting data from restcountries.eu");
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;numericCode;population;flag;languages")  // Only requesting the fields that we need later
      .then(response => setCountries(response.data));
  }, []);  // passing an empty array as second argument to useEffect

  // Functions to manipulate the state
  function setSearch(event) {
    setSearchTerm(event.target.value);  // Use the value of the text field to set the searchTerm state
  }

  function setShowClick(countryName) {
    setSearchTerm(countryName);  // Using another function to set the searchTerm via setSearchTerm() when the "show" button next to the country is clicked
  }

  return (
    <>
    find countries: <input onChange={setSearch} value={searchTerm}></input>
    <Display countries={countries} searchTerm={searchTerm} setShowClick={setShowClick}/>
    </>
  );
}

export default App;
