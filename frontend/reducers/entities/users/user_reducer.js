import {
  USERS_SUCCESS,
  USERS_FAILURE
} from "../../../actions/user_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case USERS_SUCCESS:
      return merge({}, state, action.users);
    default:
      return state;
  }
};
