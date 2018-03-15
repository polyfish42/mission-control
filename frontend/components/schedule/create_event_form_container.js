import EventForm from './event_form';
import { approxTime, now, minutesFromNow } from './date.js';
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

const mapDispatchToProps = dispatch => {
  return {
    fetchEvent: () => null
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
