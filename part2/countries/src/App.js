import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState(' ');
  const [displayCountries, setDisplayCountries] = useState([])

  useEffect(() => {
    console.log("Getting data from restcountries.eu");
    axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;numericCode;population;flag;languages")
      .then(response => setCountries(response.data));
  }, []);

  function setSearch(event) {
    setSearchTerm(event.target.value);
    countriesToShow();
  }

  const countriesToShow = () => {
    let filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log(filteredCountries.length);
    if (filteredCountries.length > 10) {
      const messageOverTen = [{name: 'Too many matches, please specify another filter'}];
      setDisplayCountries(messageOverTen)
    }
    else if (filteredCountries.length > 1) {
      setDisplayCountries(filteredCountries);
    }
    else {
      setDisplayCountries([{name: 'I should be the one!'}]);
    }
  }


  return (
    <>
    find countries: <input onChange={setSearch} value={searchTerm}></input>
    {displayCountries.map((country, idx) => <p key={idx}>{country.name}</p>)}
    </>
  );
}

export default App;
