import React from 'react';
import ReactQuill from 'react-quill';

class ShowMessage extends React.Component {
  componentDidMount() {
    this.props.fetchMessage()
  }

  render () {
    const { title, body } = this.props.message;

    return (
      <div className="main-content">
        <h1 className="message__title">{title}</h1>
        <ReactQuill value={body}
          readOnly={true}
          modules={{toolbar: null}}/>
      </div>
    )
  }
}

export default ShowMessage;
