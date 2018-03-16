import Comments from './comments';
import { selectComments, selectCommentAuthors } from '../../reducers/selectors/comment_selectors';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: Object.values(state.entities.comments),
    id: ownProps.id,
    idName: ownProps.idName
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comments));
