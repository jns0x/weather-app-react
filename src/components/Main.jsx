import React, { Component } from 'react';
import { connect } from 'react-redux';
// import SelectBox from './SelectBox/SelectBox';
import SearchBox from './SearchBox/SearchBox';
import WeatherBox from './WeatherBox/WeatherBox';
import BtnCities from './BtnCities/BtnCities';
import BtnSorting from './BtnSorting/BtnSorting';
import Loading from './Loading/Loading';
import './Main.scss';

const Main = (props) => {
  const { hasErrored, isLoading, cityWeather, cityList } = props
  return (
    <div className="main-container">
      <SearchBox />
      {hasErrored && <p>Sorry! There was an error loading the items</p>}
      {isLoading && <Loading />}
      {cityWeather.id && <WeatherBox weatherInCity={cityWeather} key={cityWeather.id} />}
      {cityList.list && <BtnSorting />}
      <div className="weather-box-wrapper">
        {cityList.list && cityList.list.map(item => <WeatherBox weatherInCity={item} key={item.id} />)}
        <BtnCities label="Cities in Poland" />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    cityWeather: state.cityWeather,
    cityList: state.cityList
  };
};

export default connect(mapStateToProps)(Main);
