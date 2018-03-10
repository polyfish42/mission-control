import * as UserUtil from "../util/user_util";
export const USERS_SUCCESS = "USERS_SUCCESS";
export const USERS_FAILURE = "USERS_FAILURE";

export const searchUsers = () => {
  return dispatch => {
    return UserUtil.searchUsers().then(
      users => dispatch({type: USERS_SUCCESS, users}),
      errors => dispatch({type: USERS_FAILURE, errors})
    );
  };
};
