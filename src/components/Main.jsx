import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBox from "./SearchBox/SearchBox";
import WeatherBox from "./WeatherBox/WeatherBox";
import BtnCities from "./BtnCities/BtnCities";
import BtnSorting from "./BtnSorting/BtnSorting";
import Loading from "./Loading/Loading";
import "./Main.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Main = props => {
  const { hasErrored, isLoading, cityWeather, cityList } = props;

  const numCreate = () => {
    let i = 0;
    return function() {
      i++;
      return i;
    };
  };
  const increment = numCreate();

  return (
    <div className="main-container">
      <SearchBox />
      {hasErrored && <p>Sorry! There was an error loading the items</p>}
      {isLoading && <Loading />}

      {cityWeather.id && (
        <CSSTransition key={cityWeather.id} timeout={500} classNames="fading">
          <WeatherBox weatherInCity={cityWeather} key={cityWeather.id} />
        </CSSTransition>
      )}

      {cityList.list && <BtnSorting />}
      <div className="weather-box-wrapper">
        {cityList.list &&
          cityList.list.map(item => (
            <CSSTransition key={item.id} timeout={500} classNames="fading">
              <WeatherBox
                weatherInCity={item}
                key={item.id}
                animationOrder={increment()}
              />
            </CSSTransition>
          ))}
      </div>
      <BtnCities label="Cities in Poland" />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading,
    cityWeather: state.cityWeather,
    cityList: state.cityList
  };
};

export default connect(mapStateToProps)(Main);
