import React from 'react';
import store from '../../store';
import { object, array } from 'prop-types';
import { connect } from 'react-redux';
import Button from '../Button/Button'
import { sortByTempFunc, sortByWindFunc, sortByHumidityFunc, sortByCloudsFunc } from '../../config';
import { sortTempAsc, sortTempDesc, sortWindAsc, sortWindDesc, sortHumidityAsc, sortHumidityDesc, sortCloudsDesc, sortCloudsAsc } from '../../actions';
import './BtnSorting.scss';


const BtnSorting = (props) => {
  const { citiesArr, sortType } = props;
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
      store.dispatch(sortCloudsAsc(sortByCloudsFunc(citiesArr, 'asc')))
    } else if (sortType.sort.clouds === 'asc') {
      store.dispatch(sortCloudsDesc(sortByCloudsFunc(citiesArr, 'desc')))
    } else {
      store.dispatch(sortCloudsAsc(sortByCloudsFunc(citiesArr, 'asc')))
    }
  }
  const sortByHumidity = () => {
    if (!sortType.sort) {
      store.dispatch(sortHumidityAsc(sortByHumidityFunc(citiesArr, 'asc')))
    } else if (sortType.sort.humidity === 'asc') {
      store.dispatch(sortHumidityDesc(sortByHumidityFunc(citiesArr, 'desc')))
    } else {
      store.dispatch(sortHumidityAsc(sortByHumidityFunc(citiesArr, 'asc')))
    }
  }

  const handleSymbol = (type) => {
    if (sortType[type] === 'asc') {
      return '&uarr;'
    } else if (sortType[type] === 'desc') {
      return '&darr;'
    } else {
      return '';
    }
  }


  return (
    <div className="sorting--buttons">
      <Button handleClick={sortByTemp} label={`by temp ${handleSymbol('temp')}`} cn={"btn"} />
      <Button handleClick={sortByWind} label="by wind" cn={"btn"} />
      <Button handleClick={sortByClouds} label="by clouds" cn={"btn"} />
      <Button handleClick={sortByHumidity} label="by humidity" cn={"btn"} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    citiesArr: state.cityList.list,
    sortType: state.cityList,
  };
};

BtnSorting.propTypes = {
  citiesArr: array.isRequired,
  sortType: object.isRequired,
}

export default connect(mapStateToProps)(BtnSorting);
