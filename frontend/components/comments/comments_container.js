import Comments from './comments';
import { selectCommentAuthors } from '../../reducers/selectors/comment_selectors';
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
