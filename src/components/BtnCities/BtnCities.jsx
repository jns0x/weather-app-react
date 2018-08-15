import React from 'react';
import store from '../../store';
import { getWeatherList } from '../../actions';
import { citiesArr } from '../../config';
import './BtnCities.scss';

const handleClick = (ids) => {
  console.log(citiesArr);
  store.dispatch(getWeatherList(ids));
}
const mapArr = () => {
  const ids = citiesArr.map(item => {
    return `${item.id}`
  })
  handleClick(ids);
}

const BtnCities = props => {
  return (
    <button onClick={mapArr} className="btn--cities">{props.label}</button>
  )
}

export default BtnCities;
