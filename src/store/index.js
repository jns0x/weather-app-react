import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { initialStore as initialState } from '../config';


const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);

export default store;
