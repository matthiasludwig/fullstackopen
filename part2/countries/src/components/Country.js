import React from 'react';

const Country = ({ countryInformation }) => {
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
                    {countryInformation.languages.map(language => <li key={language}>{language.name}</li> )}
                </ul>
            </div>
            <img src={countryInformation.flag} alt={countryInformation.name} width='200px'/>
        </>
    )
}

export default Country;