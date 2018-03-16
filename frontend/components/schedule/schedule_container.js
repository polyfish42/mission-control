import Schedule from './schedule';
import { withRouter } from 'react-router'
import { fetchEvents } from '../../actions/event_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    events: Object.values(state.entities.events)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: (search_start_date) => dispatch(fetchEvents(search_start_date))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Schedule));
