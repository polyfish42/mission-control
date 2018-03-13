import CommentForm from './comment_form';
import { createComment } from '../../actions/comment_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    messageId: ownProps.messageId,
    comment: {body: ''},
    formType: "create"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (comment) => dispatch(createComment(comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
