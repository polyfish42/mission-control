import ShowMessage from './show_message';
import { fetchMessage, deleteMessage } from '../../actions/message_actions';
import { selectComments } from '../../reducers/selectors/message_selectors';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.messageId
  const message = state.entities.messages[id]
  const comments = state.entities.comments
  
  return {
    message: message || {title: '', body: ''},
    comments:  message ? selectComments(comments, message) : []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.messageId

  return {
    fetchMessage: () => dispatch(fetchMessage(id)),
    editMessage: () => ownProps.history.push(`/messages/${id}/edit`),
    deleteMessage: () => dispatch(deleteMessage(id)).then(ownProps.history.push('/messages/'))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowMessage));
