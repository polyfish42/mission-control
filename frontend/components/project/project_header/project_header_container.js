import ProjectHeader from './project_header';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null, mapDispatchToProps)(ProjectHeader);
