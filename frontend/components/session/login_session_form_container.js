import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    formType: "Log in"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
