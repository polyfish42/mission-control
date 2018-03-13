import * as CommentUtil from "../util/comment_util";
export const COMMENT_REQUEST = 'COMMENT_REQUEST';
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS';
export const COMMENT_FAILURE = 'COMMENT_FAILURE';

export const createComment = comment => {
  return dispatch => {
    dispatch({type: COMMENT_REQUEST})

    return CommentUtil.createComment(comment).then(
      comment => dispatch(receiveComment(comment)),
      errors => dispatch(receiveCommentErrors(errors))
    )
  }
}


const receiveComment = comment => ({
  type: COMMENT_SUCCESS,
  comment
})

const receiveCommentErrors = errors => ({
  type: COMMENT_FAILURE,
  errors
})
