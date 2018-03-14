import ShowEvent from './show_event';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.eventId
  const event = state.entities.events[id]
  const comments = state.entities.comments

  return {
    event: event,
    comments: event ? selectComments(comments, event) : []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.eventId;

  return {
    fetchEvent: () => dispatch(fetchEvent(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowEvent);
