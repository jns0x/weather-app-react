import { apiUrl, apiUrlCity, apiKey, metric } from '../config';
import axios from 'axios';

export const setTypedCity = value => ({
  type: "SET_TYPING_VALUE",
  inputField: value
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

export function resetFields() {
  return {
    type: 'RESET_FIELDS',
    isLoading: false,
    hasErrored: false,
    cityName: '',
  }
}

export function cityNameFetchDataSuccess(data) {
  return {
    type: 'CITY_FETCH_DATA_SUCCESS',
    data
  };
}

export function idFetchDataSuccess(data) {
  return {
    type: 'ID_FETCH_DATA_SUCCESS',
    data
  };
}

export function getWeather(cityName) {
  return (dispatch) => {
    dispatch(resetFields());
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
      .catch(() => {
        dispatch(itemsHasErrored(true))
        dispatch(itemsIsLoading(false))
      }
      );
  };
}

export function getWeatherList(ids) {
  return (dispatch) => {
    dispatch(resetFields());
    dispatch(itemsIsLoading(true));
    axios.get(`${apiUrl}${ids}${apiKey}${metric}`)
      .then((response) => {
        if (response.statusText !== "OK") {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        // console.log(response);
        return response;
      })
      .then((response) => response.data)
      .then((item) => dispatch(idFetchDataSuccess(item)))
      .catch(() => {
        dispatch(itemsHasErrored(true))
        dispatch(itemsIsLoading(false))
      }
      );
  };
}
