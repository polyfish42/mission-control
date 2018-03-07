import entitiesReducer from './entities/entities_reducer';
import sessionReducer from './session/session_reducer';
import errorsReducer from './errors/errors_reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer
});
