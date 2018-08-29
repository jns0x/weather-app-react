import {
  SET_TYPING_VALUE, ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, RESET_FIELDS, CITY_FETCH_DATA_SUCCESS, ID_FETCH_DATA_SUCCESS, SORT_BY_TEMP_ASC, SORT_BY_TEMP_DESC,
  SORT_BY_WIND_ASC,
  SORT_BY_WIND_DESC,
  SORT_BY_HUMIDITY_ASC,
  SORT_BY_HUMIDITY_DESC,
  SORT_BY_CLOUDS_ASC,
  SORT_BY_CLOUDS_DESC
} from "./actionTypes";
import { apiUrl, apiUrlCity, apiKey, metric } from '../config';
import axios from 'axios';

export const setTypedCity = value => ({
  type: SET_TYPING_VALUE,
  inputField: value
})

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_HAS_ERRORED,
    hasErrored: bool
  };
}
export function itemsIsLoading(bool) {
  return {
    type: ITEMS_IS_LOADING,
    isLoading: bool
  };
}

export function resetFields() {
  return {
    type: RESET_FIELDS,
    isLoading: false,
    hasErrored: false,
    cityName: '',
  }
}

export function cityNameFetchDataSuccess(data) {
  return {
    type: CITY_FETCH_DATA_SUCCESS,
    data
  };
}

export function idFetchDataSuccess(data) {
  return {
    type: ID_FETCH_DATA_SUCCESS,
    data
  };
}

export function sortTempAsc(sortedData) {
  return {
    type: SORT_BY_TEMP_ASC,
    sortedData
  };
}
export function sortTempDesc(sortedData) {
  return {
    type: SORT_BY_TEMP_DESC,
    sortedData
  };
}
export function sortWindAsc(sortedData) {
  return {
    type: SORT_BY_WIND_ASC,
    sortedData
  };
}
export function sortWindDesc(sortedData) {
  return {
    type: SORT_BY_WIND_DESC,
    sortedData
  };
}

export function sortHumidityAsc(sortedData) {
  return {
    type: SORT_BY_HUMIDITY_ASC,
    sortedData
  };
}

export function sortHumidityDesc(sortedData) {
  return {
    type: SORT_BY_HUMIDITY_DESC,
    sortedData
  };
}
export function sortCloudsAsc(sortedData) {
  return {
    type: SORT_BY_CLOUDS_ASC,
    sortedData
  };
}
export function sortCloudsDesc(sortedData) {
  return {
    type: SORT_BY_CLOUDS_DESC,
    sortedData
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
