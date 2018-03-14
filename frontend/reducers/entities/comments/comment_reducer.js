import {
  COMMENT_REQUEST,
  COMMENT_SUCCESS,
  COMMENT_FAILURE
} from '../../../actions/comment_actions';
import {
  MESSAGE_SUCCESS,
  REMOVE_MESSAGE_SUCCESS
} from '../../../actions/message_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case COMMENT_SUCCESS:
      const newComment = {[action.comment.id]: action.comment}
      return merge({}, state, newComment);
    case MESSAGE_SUCCESS:
      return action.comments ? action.comments : {};
    case REMOVE_MESSAGE_SUCCESS:
      const newComments = merge({}, state);

      action.message.commentIds.forEach(id => {
        delete newComments[id]
      })
      return newComments;
    default:
      return state;
  }
}
