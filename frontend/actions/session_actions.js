import * as SessionUtil from '../util/session_util';

export const SESSION_REQUEST = 'SESSION_REQUEST';
export const SESSION_SUCCESS = 'SESSION_SUCCESS';
export const SESSION_FAILURE = 'SESSION_FAILURE';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const LOGOUT = 'LOGOUT';

export const signup = (user) => {
  return (dispatch) => {
    dispatch({ type: SESSION_REQUEST });

    return SessionUtil.signup(user).then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const demo = () => {
  return (dispatch) => {
    dispatch({ type: SESSION_REQUEST });

    return SessionUtil.demo().then(
      currentUser => dispatch(receiveCurrentUser(currentUser)),
      errors => dispatch(receiveErrors(errors))
    );
  };
};

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: SESSION_REQUEST });

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
  type: SESSION_SUCCESS,
  currentUser
});

const receiveErrors = (errors) => ({
  type: SESSION_FAILURE,
  errors
});
