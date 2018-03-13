import React from 'react';
import CommentCount from './comment_count';
import { Link } from 'react-router-dom';

const MessageIndexItem = ({ message }) => {
  return (
    <li className="message">
      <Link to={`/messages/${message.id}`} className="message__link">
        <div className="message__body-title">{message.title}</div>
        <div className="message__body-container">
          <div className="message__body">{message.preview}</div>
          <div><CommentCount count={message.commentIds.length} size="small" /></div>
        </div>
      </Link>
    </li>
  )
}

export default MessageIndexItem;
