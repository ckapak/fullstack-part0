import React, { useState, useEffect } from 'react'
import axios from 'axios'
const API_KEY = process.env.REACT_APP_API_KEY

const Weather = ({ capital }) => {

  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${capital}`)
      .then(response => {
        setWeather(response.data.current)
      })
  }, [capital])

  return (
    <div>
      <h1>Weather in {capital}</h1>
      <p>temperature: {weather.temperature}</p>
      <img src={weather.weather_icons} alt="weather icon" />
      <p>wind: {weather.wind_speed} mph direction {weather.wind_dir}</p>
    </div>
  )
}

export default Weather







