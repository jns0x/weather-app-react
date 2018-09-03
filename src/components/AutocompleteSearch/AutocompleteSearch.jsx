import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { setTypedCity, getWeather } from "../../actions";
import store from "../../store/";
import "./AutocompleteSearch.sass";

class LocationSearchInput extends React.Component {
  state = {
    address: ""
  };

  handleChange = address => {
    this.setState({ address });
    store.dispatch(setTypedCity(address));
    console.log(address);
  };

  handleSelect = el => {
    const end = el.indexOf(",");
    const cityName = el.substring(0, end);
    console.log(cityName);
    store.dispatch(getWeather(cityName));
    this.setState({
      address: ""
    });
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search city ...",
                className: "input-search"
              })}
              ref={this.textInput}
            />
            <div className="autocomplete-dropdown-container">
              {loading && (
                <div className="autocomplete-dropdown">
                  <span>Loading...</span>
                </div>
              )}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                // const style = suggestion.active
                //   ? { backgroundColor: "#fafafa", cursor: "pointer" }
                //   : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className: "autocomplete-dropdown"
                      //   style
                    })}
                  >
                    <span>
                      {suggestion.description.length > 25
                        ? suggestion.description.substring(0, 25).concat("...")
                        : suggestion.description.substring(0, 25)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
export default LocationSearchInput;
