import {
  SESSION_SUCCESS,
  SESSION_FAILURE,
  CLEAR_SESSION_ERRORS,
  LOGOUT
} from '../../actions/session_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SESSION_FAILURE:
      return action.errors.responseJSON.errors;
    case SESSION_SUCCESS:
      return _nullErrors;
    case CLEAR_SESSION_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
