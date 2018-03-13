import MessagesIndex from './message_index';
import { fetchMessages } from '../../actions/message_actions';
import { connect } from "react-redux";

const mapStateToProps = state => {
  const messages = state.entities.messages

  return {
    messages: Object.values(messages)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchMessages: () => dispatch(fetchMessages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesIndex);
