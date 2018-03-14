import React from 'react';
import CommentEditor from './comment_editor';

const Comment = ({ comment, user }) => {
  return (
    <li className="comment">
      <div className="comment__author">{user && user.name}</div>
        <CommentEditor comment={{body: comment.body}} readOnly={true} messageId={null} handleSubmit={ () => null }/>
    </li>
  )
}

export default Comment;
