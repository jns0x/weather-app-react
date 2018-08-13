import { combineReducers } from 'redux';
import { initialStore } from '../config';

export default combineReducers({
  initialState
});

function initialState(state = initialStore) {
  return state;
}
