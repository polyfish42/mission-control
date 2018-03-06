import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
);
