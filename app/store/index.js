import {createStore} from 'redux';
import reducer from '../reducer';

var defaultState = {
  count: 0
}

export var configureStore = (intialState=defaultState) => {
  return createStore(reducer, intialState);
}
