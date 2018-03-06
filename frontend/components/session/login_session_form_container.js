import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Log in"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
