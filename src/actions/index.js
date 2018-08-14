import { apiUrlCity, apiKey, metric } from '../config';
import axios from 'axios';

export const setTypedCity = value => ({
  type: "SET_TYPING_VALUE",
  payload: value
})

export function itemsHasErrored(bool) {
  return {
    type: 'ITEMS_HAS_ERRORED',
    hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: 'ITEMS_IS_LOADING',
    isLoading: bool
  };
}

export function cityNameFetchDataSuccess(cityName) {
  return {
    type: 'CITY_FETCH_DATA_SUCCESS',
    cityName
  };
}
export function getWeather(cityName) {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    axios.get(`${apiUrlCity}${cityName}${apiKey}${metric}`)
      .then((response) => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        // console.log(response);
        return response;
      })
      .then((response) => response.data)
      .then((item) => dispatch(cityNameFetchDataSuccess(item)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
