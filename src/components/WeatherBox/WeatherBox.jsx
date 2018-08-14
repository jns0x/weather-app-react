import React from 'react';
import store from '../../store/';

import './WeatherBox.scss';


const WeatherBox = props => {
  const { name } = props.weather;
  const { temp } = props.weather.main;
  const { speed } = props.weather.wind;
  const { main, description, icon } = props.weather.weather[0]
  return (
    <div className="weather-box">
      <div>
        <p>{name}</p>
        <p>temp: {temp}</p>
        <p>wind: {speed}</p>
      </div>
      <img className="weather-icon" src={`https://openweathermap.org/img/w/${icon}.png`} />
    </div >
  )
}

export default WeatherBox;
