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
      return 'Too many matches'
    }

    return filteredCountries.map((country) =>
      <p key={country.alpha2Code}>{country.name}</p>
    )
  }

  const searchHandler = (e) => {
    setSearchFilter(e.target.value)
  }

  return (
    <div>
      <h1>Countries</h1>
      find countries: <input
        onChange={searchHandler} />
      {showCountries()}
    </div>
  )
}

export default App
