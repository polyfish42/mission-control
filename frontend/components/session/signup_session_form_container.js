import SessionForm from './session_form';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: "Sign up"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitAction: (user) => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
