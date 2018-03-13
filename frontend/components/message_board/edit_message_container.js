import Editor from './message_editor';
import { updateMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.messageId

  return {
    message: state.entities.messages[id] || {title: '', body: ''},
    formType: "edit"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.messageId

  return {
    fetchMessage: () => dispatch(fetchMessage(id)),
    handleSubmit: (message) => dispatch(updateMessage(message))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Editor));
