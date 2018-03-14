import {
  EVENT_SUCCESS,
  EVENTS_SUCCESS,
  REMOVE_EVENT_SUCCESS
} from '../../../actions/event_actions';
import { merge } from 'lodash';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case EVENT_SUCCESS:
      const newEvent = { [action.event.id]: action.event };
      return merge({}, state, newEvent);
    case EVENTS_SUCCESS:
      return action.events ? action.events : {};
    case REMOVE_EVENT_SUCCESS:
      const newEvents = merge({}, state);
      delete newEvents[action.event.id];
      return newEvents;
    default:
      return state;
  }
};
