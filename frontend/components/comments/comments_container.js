import Comments from './comments';
import { selectCommentAuthors } from '../../reducers/selectors/comment_selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: ownProps.comments,
    messageId: ownProps.messageId
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
