import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import Button from '../Button/Button';
import { getWeatherList } from '../../actions';
import { citiesArr } from '../../config';
import './BtnCities.scss';


const BtnCities = props => {

  const getCities = (ids) => {
    store.dispatch(getWeatherList(ids));
  }
  const mapArr = () => {
    const ids = citiesArr.map(item => {
      return `${item.id}`
    })
    getCities(ids);
    totalRecall();
  }

  const totalRecall = () => {
    setInterval(() => mapArr(), 300000)
  }
  return (
    <Button label={props.label} handleClick={mapArr} cn={"btn btn--cities"} />
  )
}

export default BtnCities;
