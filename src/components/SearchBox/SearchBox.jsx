import React, { Component } from 'react';
import { setTypedCity, getWeather } from '../../actions';
import store from '../../store/';
import Button from '../Button/Button';

import './SearchBox.scss';
class SearchBox extends Component {
  handleChange(e) {
    e.preventDefault();
    store.dispatch(setTypedCity(e.target.value));
  }
  handleSubmit(e) {
    e.preventDefault();
    const { typing } = store.getState();
    store.dispatch(getWeather(typing));
  };
  render() {
    return (
      < div className="search-box" >
        <h3 className="search-heading">Type city name</h3>
        <form onSubmit={this.handleSubmit}>
          <input className="input-search" type="text" placeholder="Type city name" onChange={this.handleChange} />
          <Button handleClick={this.handleSubmit} cn="btn--search" label={"Search"} />
        </form>
      </div >
    )
  }
}

export default SearchBox;
