import React, { Component } from "react";
import { setTypedCity, getWeather } from "../../actions";
import store from "../../store/";
import Button from "../Button/Button";
import LocationSearchInput from "../AutocompleteSearch/AutocompleteSearch";

import "./SearchBox.scss";
class SearchBox extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { typing } = store.getState();
    store.dispatch(getWeather(typing));
  }
  render() {
    return (
      <div className="search-box">
        <h3 className="search-heading">Type city name</h3>
        <form onSubmit={this.handleSubmit} className="form-field">
          <LocationSearchInput />
          <Button
            handleClick={this.handleSubmit}
            cn="btn--search"
            label={"Search"}
          />
        </form>
      </div>
    );
  }
}

export default SearchBox;
