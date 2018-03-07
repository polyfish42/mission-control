import ProjectHeader from './project_header';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);
