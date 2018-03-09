import entitiesReducer from "./entities/entities_reducer";
import sessionReducer from "./session/session_reducer";
import errorsReducer from "./errors/errors_reducer";
import uiReducer from "./ui/ui_reducer";
import { loadingBarReducer } from 'react-redux-loading-bar';
import { combineReducers } from "redux";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer,
  loadingBar: loadingBarReducer
});
