import React from 'react';

const CommentCount = ({count, size}) => {
  return (
    <button className={"commentCount commentCount--" + size}>
      { count }
    </button>
  )
}

export default CommentCount;
