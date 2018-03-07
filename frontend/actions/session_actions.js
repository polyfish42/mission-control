import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LOGOUT = 'LOGOUT';

export const signup = (user) => {
  return (dispatch) => {
    return SessionUtil.signup(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const demo = () => {
  return (dispatch) => {
    return SessionUtil.demo().then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    return SessionUtil.login(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const logout = () => {
  return (dispatch) => {
    return SessionUtil.logout().then(
      () => dispatch(receiveCurrentUser(null)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
