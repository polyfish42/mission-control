import React from 'react';

const Comment = ({ comment, user }) => {
  return (
    <li className="comment">
      <div className="comment__author">{user && user.name}</div>
      <div>{comment.body}</div>
    </li>
  )
}

export default Comment;
