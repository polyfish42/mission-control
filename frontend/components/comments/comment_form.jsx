import React from 'react';
import { createComment } from '../../actions/comment_actions';
import CommentEditor from './comment_editor';

class CommentForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: props.comment,
      open: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  closeForm() {
    this.setState({open: false})
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value })
  }

  render () {
    return (
      <div className="comment-form">
        {
          this.state.open ? (
            <div>
              <CommentEditor comment={{body: ""}}
                             readOnly={false}
                             idName={this.props.idName}
                             id={this.props.id}
                             handleSubmit={ (comment) => dispatch(createComment(comment)).then(() => this.closeForm()) }/>
            </div>
          ) : (
            <button className="comment-form__fake-input" onClick={() => this.setState({open: true})}>Add a comment or upload an image...</button>
          )
        }
      </div>
    )
  }
}

export default CommentForm;
