import {
  MESSAGE_SUCCESS,
  REMOVE_MESSAGE_SUCCESS
} from '../../../actions/message_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MESSAGE_SUCCESS:
      return action.comments ? action.comments : {};
    case REMOVE_MESSAGE_SUCCESS:
      const newComments = merge({}, state);

      return newComments.reduce(comment, newComs => {
        if (action.message.comment_ids.includes(comment.id)) {
          newComs[comment.id] = comment
          return newComs
        } else {
          return newComs
        }
      }, {})
    default:
      return state;
  }
};
