import React from 'react';
import CommentCount from './comment_count';

const MessageIndexItem = ({ message }) => {
  return (
    <li className="message">
      <div className="message__body-title">{message.title}</div>
      <div className="message__body-container">
        <div className="message__body">{message.body}</div>
        <div><CommentCount count={message.commentIds.length} size="small" /></div>
      </div>
    </li>
  )
}

export default MessageIndexItem;
