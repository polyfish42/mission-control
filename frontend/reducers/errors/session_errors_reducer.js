import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT
} from '../../actions/session_actions';

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON.errors;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    default:
      return state;
  }
};
