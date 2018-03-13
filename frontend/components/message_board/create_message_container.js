import Editor from './message_editor';
import { createMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    message: {title: '', body: ''},
    formType: "create"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (message) => dispatch(createMessage(message))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
