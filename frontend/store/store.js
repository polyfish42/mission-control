import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware} from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(loadingBarMiddleware({promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']}), thunk, logger))
);
