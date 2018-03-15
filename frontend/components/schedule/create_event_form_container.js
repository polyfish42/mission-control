import EventForm from './event_form';
import { approxTime, now, minutesFromNow } from './date.js';
import { createEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    event: {
      title: "",
      startDate: now(),
      time1: approxTime(now()),
      endDate: minutesFromNow(30),
      time2: approxTime(minutesFromNow(30)),
      attendees: [],
      notes: ""
    }
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEvent: () => null,
    handleSubmit: (event) => dispatch(createEvent(event)).then(({event}) => ownProps.history.push(`/events/${event.id}`))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
