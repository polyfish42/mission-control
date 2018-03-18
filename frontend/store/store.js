import RootReducer from '../reducers/root_reducer';
import { createStore, applyMiddleware} from 'redux';
import { loadingBarMiddleware } from 'react-redux-loading-bar'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleWares = [loadingBarMiddleware({promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']}), thunk]

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middleWares.push(logger);
}

export default (preloadedState = {}) => (
  createStore(RootReducer, preloadedState, applyMiddleware(...middleWares))
);
