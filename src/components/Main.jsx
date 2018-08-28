import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectBox from './SelectBox/SelectBox';
import SearchBox from './SearchBox/SearchBox';
import WeatherBox from './WeatherBox/WeatherBox';
import BtnCities from './BtnCities/BtnCities';
import BtnSorting from './BtnSorting/BtnSorting';
import './Main.scss';

class Main extends Component {

  render() {
    const { hasErrored, isLoading, cityWeather, cityList } = this.props
    return (
      <div className="main-container">
        <SearchBox />
        {hasErrored && <p>Sorry! There was an error loading the items</p>}
        {isLoading && <p>Loading…</p>}
        {cityWeather.id && <WeatherBox weather={cityWeather} key={cityWeather.id} />}
        {cityList.list && <BtnSorting />}
        <div className="weather-box-wrapper">
          {cityList.list && cityList.list.map(item => <WeatherBox weather={item} key={item.id} />)}
          <BtnCities label="Cities in Poland" />
        </div>
      </div>
    )
  }
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
