import ShowEvent from './show_event';
import { selectComments } from '../../reducers/selectors/comment_selectors';
import { fetchEvent, deleteEvent } from '../../actions/event_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.eventId
  const event = state.entities.events[id]
  const comments = state.entities.comments
  const users = state.entities.users

  return {
    event: event,
    comments: event ? selectComments(comments, event) : [],
    author: event ? users[event.userId] : {}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.eventId;

  return {
    fetchEvent: () => dispatch(fetchEvent(id)),
    editEventRedirect: () => ownProps.history.push(`/events/${id}/edit`),
    deleteEvent: () => dispatch(deleteEvent(id)).then(ownProps.history.push('/events'))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowEvent));
