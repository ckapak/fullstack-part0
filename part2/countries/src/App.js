import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './components/Weather'

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

  const searchHandler = (e) => {
    setSearchFilter(e.target.value)
  }

  const filteredCountries =
    searchFilter.length === 1
      ? countries
      : countries.filter(
        (country) => country.name.toLowerCase().indexOf(searchFilter.toLowerCase()) > -1
      )


  const showCountries = () => {

    if (!filteredCountries.length) {
      return <p>No results</p>
    }

    if (filteredCountries.length > 10) {
      return <p>Too many matches</p>
    }

    if (filteredCountries.length === 1) {
      return (
        <div>
          <h1>{filteredCountries[0].name}</h1>
          <p>capital: {filteredCountries[0].capital}</p>
          <p>population:{filteredCountries[0].population}</p>
          <h2>Languages</h2>
          <ul>
            {filteredCountries[0].languages.map(lang => (
              <li key={lang.name}>{lang.name}</li>
            ))}
          </ul>
          <img src={filteredCountries[0].flag} alt="country flag" width="200" height="150" />
          <Weather capital={filteredCountries[0].capital} />
        </div>
      )
    }

    return (
      filteredCountries.map(country => (
        <div key={country.alpha2Code}>{country.name}
          <button value={country.name} onClick={searchHandler}>show</button></div>
      ))
    )
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
