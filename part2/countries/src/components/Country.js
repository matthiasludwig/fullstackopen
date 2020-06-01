import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Country = ({ countryInformation }) => {
    const [weather, setWeather] = useState({});  // Not sure if child components should have a state or if App.js should have the state and pass down to Country.js

    const apiKey = `access_key=${process.env.REACT_APP_API_KEY}`;
    const weatherUrl = "http://api.weatherstack.com/current?";
    let capital = `query=${countryInformation.capital}`;

    useEffect(() => {
        axios
            .get(`${weatherUrl}${apiKey}&${capital}`)
            .then(response => setWeather(response.data['current']))
    }, [apiKey, capital]);

    console.log(weather);

    return (
        <>
            <h2>{countryInformation.name}</h2>
            <div>
                <p>capital {countryInformation.capital}</p>
                <p>population {countryInformation.population}</p>
            </div>
            <h3>languages</h3>
            <div>
                <ul>
                    {countryInformation.languages.map(language => <li key={language.iso639_2}>{language.name}</li> )}
                </ul>
            </div>
            <img src={countryInformation.flag} alt={countryInformation.name} width='200px'/>
            <h3>Weather in {countryInformation.capital}</h3>
            <div>
                <p><strong>temperature:</strong> {weather['temperature']} Celcius</p>
                <img src={weather["weather_icons"]} alt={weather["weather_descriptions"]} />
                <p><strong>wind:</strong> {weather['wind_speed']} mph direction {weather['wind_dir']}</p>
            </div>
        </>
    )
}

export default Country;