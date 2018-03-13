import React from 'react';

const CommentCount = ({count, size}) => {
  return (
    <button className={"CommentCount CommentCount--" + size}>
      { count }
    </button>
  )
}

export default CommentCount;
