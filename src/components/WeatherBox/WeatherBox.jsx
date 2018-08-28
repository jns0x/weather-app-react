import React from 'react';
import store from '../../store/';

import './WeatherBox.scss';


const WeatherBox = props => {
  const { weather } = props;
  const { name } = weather;
  const { temp, humidity } = weather.main;
  const { speed } = weather.wind;
  const { icon } = weather.weather[0];
  const { all: clouds } = weather.clouds;
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
