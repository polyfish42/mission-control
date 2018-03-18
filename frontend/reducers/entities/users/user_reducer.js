import {
  USERS_SUCCESS,
  USERS_FAILURE
} from "../../../actions/user_actions";
import {
  MESSAGE_SUCCESS
} from "../../../actions/message_actions";
import {
  EVENT_SUCCESS
} from "../../../actions/event_actions";
import {
  COMMENT_SUCCESS
} from "../../../actions/comment_actions";
import { merge } from "lodash";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case USERS_SUCCESS:
      return merge({}, state, action.users);
    case MESSAGE_SUCCESS:
      return merge({}, state, action.users);
    case EVENT_SUCCESS:
      return merge({}, state, action.users);
    case COMMENT_SUCCESS:
      const newComment = ({[action.user.id]: action.user})
      return merge({}, state, newComment)
    default:
      return state;
  }
};
