import EventForm from './event_form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.eventId
  const events = state.entities.events

  return {
    event: events[id] ? events[id] : null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.eventId

  return {
    fetchEvent: () => dispatch(fetchEvent(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EventForm));
