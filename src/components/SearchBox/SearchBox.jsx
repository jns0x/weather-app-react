import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTypedCity, getWeather } from '../../actions';
import store from '../../store/';

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
          <button onClick={this.handleSubmit} className="btn--search">Search</button>
        </form>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    typing: state.typing
  };
};

export default connect(mapStateToProps)(SearchBox);
