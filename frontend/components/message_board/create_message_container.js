import Editor from './message_editor';
import { createMessage } from '../../actions/message_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    message: {title: '', body: ''},
    formType: "create"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (message) => dispatch(createMessage(message))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
