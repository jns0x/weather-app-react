import React from 'react';
import store from '../../store';
import Button from '../Button/Button'
import { sortByTempFunc, sortByWindFunc, sortByHumidityFunc, sortByCloudsFunc } from '../../config';
import { sortTempAsc, sortTempDesc, sortWindAsc, sortWindDesc, sortHumidityAsc, sortHumidityDesc } from '../../actions';
import './BtnSorting.scss';


const BtnSorting = () => {

  const citiesArr = store.getState().cityList.list;
  const sortType = store.getState().cityList;
  const sortByTemp = () => {
    if (!sortType.sort) {
      store.dispatch(sortTempAsc(sortByTempFunc(citiesArr, 'asc')))
    } else if (sortType.sort.temp === 'asc') {
      store.dispatch(sortTempDesc(sortByTempFunc(citiesArr, 'desc')))
    } else {
      store.dispatch(sortTempAsc(sortByTempFunc(citiesArr, 'asc')))
    }
  }

  const sortByWind = () => {
    if (!sortType.sort) {
      store.dispatch(sortWindAsc(sortByWindFunc(citiesArr, 'asc')))
    } else if (sortType.sort.wind === 'asc') {
      store.dispatch(sortWindDesc(sortByWindFunc(citiesArr, 'desc')))
    } else {
      store.dispatch(sortWindAsc(sortByWindFunc(citiesArr, 'asc')))
    }
  }

  const sortByClouds = () => {
    if (!sortType.sort) {
      store.dispatch(sortWindAsc(sortByCloudsFunc(citiesArr, 'asc')))
    } else if (sortType.sort.wind === 'asc') {
      store.dispatch(sortWindDesc(sortByCloudsFunc(citiesArr, 'desc')))
    } else {
      store.dispatch(sortWindAsc(sortByCloudsFunc(citiesArr, 'asc')))
    }
  }
  const sortByHumidity = () => {
    if (!sortType.sort) {
      store.dispatch(sortWindAsc(sortByHumidityFunc(citiesArr, 'asc')))
    } else if (sortType.sort.wind === 'asc') {
      store.dispatch(sortWindDesc(sortByHumidityFunc(citiesArr, 'desc')))
    } else {
      store.dispatch(sortWindAsc(sortByHumidityFunc(citiesArr, 'asc')))
    }
  }

  return (
    <div className="sorting--buttons">
      <Button handleClick={sortByTemp} label="by temp" cn={"btn"} />
      <Button handleClick={sortByWind} label="by wind" cn={"btn"} />
      <Button handleClick={sortByClouds} label="by clouds" cn={"btn"} />
      <Button handleClick={sortByHumidity} label="by humidity" cn={"btn"} />
    </div>
  )
}

export default BtnSorting;
