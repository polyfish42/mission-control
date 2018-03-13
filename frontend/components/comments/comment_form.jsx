import React from 'react';

class CommentForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      body: props.comment
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ body: e.currentTarget.value })
  }

  render () {
    return (
      <form onSubmit={() => this.props.handleSubmit({body: this.state.body, message_id: this.props.messageId})}>
        <input onChange={this.handleInput} placeholder="Add a comment..."/>
        <button type="submit">Add this comment</button>
      </form>
    )
  }
}

export default CommentForm;
