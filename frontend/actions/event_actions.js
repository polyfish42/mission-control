import * as EventUtil from "../util/event_util";
import update from 'immutability-helper';

export const EVENT_SUCCESS = "EVENT_SUCCESS";
export const EVENT_REQUEST = "EVENT_REQUEST";
export const EVENTS_REQUEST = "EVENTS_REQUEST";
export const EVENTS_SUCCESS = "EVENTS_SUCCESS";
export const CREATE_EVENT_REQUEST = "CREATE_EVENT_REQUEST";
export const UPDATE_EVENT_REQUEST = "UPDATE_EVENT_REQUEST";
export const REMOVE_EVENT_REQUEST = "REMOVE_EVENT_REQUEST";
export const EVENT_FAILURE = "EVENT_FAILURE";
export const REMOVE_EVENT_SUCCESS = "REMOVE_EVENT_SUCCESS";
export const CLEAR_EVENT_ERRORS = "CLEAR_EVENT_ERRORS";

export const createEvent = event => {
  return dispatch => {
    dispatch({ type: CREATE_EVENT_REQUEST });

    return EventUtil.createEvent(event).then(
      event => dispatch(receiveEvent(event)),
      errors => dispatch(receiveEventErrors(errors))
    );
  };
};

export const fetchEvent = id => {
  return dispatch => {
    dispatch({ type: EVENT_REQUEST });

    return EventUtil.fetchEvent(id).then(
      event => dispatch(receiveEvent(event)),
      errors => dispatch(receiveEventErrors(errors))
    );
  };
};

export const fetchEvents = () => {
  return dispatch => {
    dispatch({ type: EVENTS_REQUEST });

    return EventUtil.fetchEvents().then(
      events => dispatch(receiveEvents(events)),
      errors => dispatch(receiveEventErrors(errors))
    );
  };
};

export const updateEvent = event => {
  return dispatch => {
    dispatch({ type: UPDATE_EVENT_REQUEST });

    return EventUtil.updateEvent(event).then(
      event => dispatch(receiveEvent(event)),
      errors => dispatch(receiveEventErrors(errors))
    );
  };
};

export const deleteEvent = id => {
  return dispatch => {
    dispatch({ type: REMOVE_EVENT_REQUEST });

    return EventUtil.deleteEvent(id).then(
      event => dispatch(removeEvent(event)),
      errors => dispatch(removeEvent(errors))
    );
  };
};

export const receiveEvent = ({ event, comments, users }) => {
  const formattedEvent = formatEventDates(event)
  return {type: EVENT_SUCCESS,
          event: formattedEvent,
          comments,
          users
        }
};

const formatEventDates = event => {
  return update(event, {
    startDate: {$apply: d => new Date(d)},
    endDate: {$apply: d => new Date(d)}
  })
}

const mapFormattedDatesToEvent = events => {
  const arr = Object.values(events)
  const newEvents = arr.map(event => {
    return formatEventDates(event)
  })

  const result = {}

  newEvents.forEach(event => {
    result[event.id] = event
  })

  return result
}

const receiveEvents = ({ events }) => {
  return ({
  type: EVENTS_SUCCESS,
  events: mapFormattedDatesToEvent(events)
})};

const removeEvent = ({ event }) => ({
  type: REMOVE_EVENT_SUCCESS,
  event
});

export const receiveEventErrors = errors => ({
  type: EVENT_FAILURE,
  errors
});
