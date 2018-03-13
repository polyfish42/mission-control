import ShowMessage from './show_message';
import { fetchMessage } from '../../actions/message_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.messageId

  return {
    message: state.entities.messages[id] || {title: '', body: ''}
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.messageId

  return {
    fetchMessage: () => dispatch(fetchMessage(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShowMessage));
