import {
  SET_TYPING_VALUE, ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, RESET_FIELDS, CITY_FETCH_DATA_SUCCESS, ID_FETCH_DATA_SUCCESS, SORT_BY_TEMP_ASC, SORT_BY_TEMP_DESC,
  SORT_BY_WIND_ASC,
  SORT_BY_WIND_DESC,
  SORT_BY_HUMIDITY_ASC,
  SORT_BY_HUMIDITY_DESC,
  SORT_BY_CLOUDS_ASC,
  SORT_BY_CLOUDS_DESC
} from "../actions/actionTypes";
import { combineReducers, bindActionCreators } from 'redux';
import { initialStore } from '../config';


export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  cityWeather,
  cityList,
  typing
});

function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case ITEMS_HAS_ERRORED:
      return action.hasErrored;
    case RESET_FIELDS:
      return action.hasErrored;
    default:
      return state;
  }
}
function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case ITEMS_IS_LOADING:
      return action.isLoading;
    case RESET_FIELDS:
      return action.isLoading;
    default:
      return state;
  }
}
export function cityWeather(state = [], action) {
  switch (action.type) {
    case CITY_FETCH_DATA_SUCCESS:
      return action.data;
    case RESET_FIELDS:
      return '';
    default:
      return state;
  }
}
export function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.inputField;
    default:
      return state;
  }
}

export function cityList(state = [], action) {
  // console.log(state)
  switch (action.type) {
    case ID_FETCH_DATA_SUCCESS:
      return action.data;
    case SORT_BY_TEMP_ASC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: 'asc',
          wind: ''
        }
      }
    case SORT_BY_TEMP_DESC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: 'desc',
          wind: ''
        }
      }
    case SORT_BY_WIND_ASC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: '',
          wind: 'asc'
        }
      }
    case SORT_BY_WIND_DESC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: '',
          wind: 'desc'
        }
      }
    case SORT_BY_HUMIDITY_ASC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: '',
          wind: '',
          clouds: '',
          humidity: 'asc'
        }
      }
    case SORT_BY_HUMIDITY_DESC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: '',
          wind: '',
          clouds: '',
          humidity: 'desc'
        }
      }
    case SORT_BY_CLOUDS_ASC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: '',
          wind: '',
          clouds: 'asc',
          humidity: ''
        }
      }
    case SORT_BY_CLOUDS_DESC:
      return {
        ...state,
        list: action.sortedData,
        sort: {
          temp: '',
          wind: '',
          clouds: 'desc',
          humidity: ''
        }
      }
    case RESET_FIELDS:
      return '';
    default:
      return state;
  }
}
