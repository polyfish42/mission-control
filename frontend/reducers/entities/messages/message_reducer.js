import {
  MESSAGE_SUCCESS,
  MESSAGES_SUCCESS,
  REMOVE_MESSAGE_SUCCESS
} from '../../../actions/message_actions';
import { merge } from 'lodash';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case MESSAGE_SUCCESS:
      const newMessage = { [action.message.id]: action.message };
      return merge({}, state, newMessage);
    case MESSAGES_SUCCESS:
      return action.messages ? action.messages : {};
    case REMOVE_MESSAGE_SUCCESS:
      const newMessages = merge({}, state);
      delete newMessages[action.message.id];
      return newMessages;
    default:
      return state;
  }
};
