import React from 'react';
import store from '../../store/';

import './WeatherBox.scss';


const WeatherBox = props => {
  const { name } = props.weather;
  const { temp, humidity } = props.weather.main;
  const { speed } = props.weather.wind;
  const { icon } = props.weather.weather[0];
  const { all: clouds } = props.weather.clouds;
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

export default WeatherBox;
