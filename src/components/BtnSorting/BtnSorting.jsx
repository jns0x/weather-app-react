import React from 'react';
import store from '../../store';
import Button from '../Button/Button'
import { sortByTempFunc, sortByWindFunc } from '../../config';
import { sortTempAsc, sortTempDesc, sortWindAsc, sortWindDesc } from '../../actions';
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


  return (
    <div className="sorting--buttons">
      <Button handleClick={sortByTemp} label="Sort by temp" cn={"btn"} />
      <Button handleClick={sortByWind} label="Sort by wind" cn={"btn"} />
      <Button label="sort" cn={"btn"} />
    </div>
  )
}

export default BtnSorting;
