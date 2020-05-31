import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries =
    searchFilter.length === 1
      ? countries
      : countries.filter(
        (country) => country.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
      )

  const showCountries = () => {
    if (filteredCountries.length > 10) {
      return <p>Too many matches</p>
    } else if (filteredCountries.length > 1) {
      return (
        <div>
          {filteredCountries.map(country => (
            <p key={country.alpha2Code}>{country.name}</p>
          ))}
        </div>
      )
    } else if (filteredCountries.length === 1) {
      return (
        <div>
          <h1>{filteredCountries[0].name}</h1>
          <img src={filteredCountries[0].flag} alt='' />
          <p>capital: {filteredCountries[0].capital}</p>
          <p>population:{filteredCountries[0].population}</p>
          <h2>Languages</h2>
          <ul>
            {filteredCountries[0].languages.map(lang => (
              <li key={lang.name}>{lang.name}</li>
            ))}
          </ul>
        </div>
      )
    } else {
      return <p>No results</p>
    }
  }

  const searchHandler = (e) => {
    setSearchFilter(e.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      find countries: <input
        onChange={searchHandler}
      />
      {showCountries()}
    </div>
  )
}

export default App
