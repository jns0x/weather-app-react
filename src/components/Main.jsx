import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectBox from './SelectBox/SelectBox';
import SearchBox from './SearchBox/SearchBox';
import WeatherBox from './WeatherBox/WeatherBox';
import './Main.css';
import store from '../store';
import _ from "lodash";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <SearchBox />
        {this.props.hasErrored ?
          (<p>Sorry! There was an error loading the items</p>) : ''}
        {this.props.isLoading ?
          (<p>Loading…</p>) : ''}
        {this.props.cityWeather.id ?
          <WeatherBox weather={this.props.cityWeather} key={this.props.cityWeather} /> : ''
        }
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    cityWeather: state.cityWeather
  };
};

export default connect(mapStateToProps)(Main);
