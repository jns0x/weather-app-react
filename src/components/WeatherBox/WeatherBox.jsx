import React from 'react';
import store from '../../store/';
import { oneOfType, arrayOf, objectOf, shape, string, number, object } from 'prop-types';

import './WeatherBox.scss';

const WeatherBox = props => {
  console.log(props);
  const { weatherInCity } = props;
  const { name } = weatherInCity;
  const { temp, humidity } = weatherInCity.main;
  const { speed } = weatherInCity.wind;
  const { icon } = weatherInCity.weather[0];
  const { all: clouds } = weatherInCity.clouds;

  return (
    <div className="weather-box">
      <div>
        <p>{name}</p>
        <p>temp: {temp}</p>
        <p>wind: {speed}</p>
        <p>humidity: {humidity}</p>
        <p>clouds: {clouds}</p>
      </div>
      <img className="weather-icon" src={`https://openweathermap.org/img/w/${icon}.png`} />
    </div >
  )
}

WeatherBox.propTypes = {
  weatherInCity: object.isRequired,
  weatherInCity: shape({
    name: string.isRequired,
    id: number.isRequired,
    main: shape({
      humidity: number.isRequired,
      temp: number.isRequired
    }),
    wind: shape({
      speed: number.isRequired
    }),
    weather: arrayOf(
      shape({
        icon: string.isRequired
      })
    )
  })
}

export default WeatherBox;
