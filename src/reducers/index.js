import { combineReducers } from 'redux';
import { initialStore } from '../config';


export default combineReducers({
  itemsHasErrored,
  itemsIsLoading,
  cityWeather,
  typing
});

function itemsHasErrored(state = false, action) {
  switch (action.type) {
    case 'ITEMS_HAS_ERRORED':
      return action.hasErrored;
    default:
      return state;
  }
}
function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;
    default:
      return state;
  }
}
export function cityWeather(state = [], action) {
  switch (action.type) {
    case 'CITY_FETCH_DATA_SUCCESS':
      return action.cityName;
    default:
      return state;
  }
}
export function typing(state = "", action) {
  switch (action.type) {
    case "SET_TYPING_VALUE":
      return action.payload;
    default:
      return state;
  }
}
