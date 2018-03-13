import Comment from './comment';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.comment.userId],
    comment: ownProps.comment
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
