import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  LOGOUT
} from '../../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null
};

export default (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, { currentUser });
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};
