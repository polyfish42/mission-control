import React from 'react';
import CommentCount from './comment_count';
import CommentContainer from './comment_container';
import CreateCommentFormContainer from './create_comment_form_container';

class Comments extends React.Component {
  render () {
    const { comments, messageId } = this.props

    return (
      <div className="comments">
        <div className="comments__header-flex">
          <CommentCount count={comments.length} size="large" />
          <h1 className="comments__h1">{comments.length === 1 ? "Comment" : "Comments"}</h1>
          <svg className="comments__header-svg-container">
            <line x1="0" x2="490" className="comments_header-line"/>
          </svg>
        </div>
        <ul>
          {
            comments.map((comment, key) => {
              return <CommentContainer comment={comment} key={key} />
            })
          }
        </ul>
        {
          <CreateCommentFormContainer idName={this.props.idName} id={this.props.id} />
        }
      </div>
    )
  }
}

export default Comments;
