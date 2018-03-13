import React from 'react';
import ReactQuill from 'react-quill';
import ToolHeaderEdit from '../app/tool_header_edit';

class ShowMessage extends React.Component {
  componentDidMount() {
    this.props.fetchMessage()
  }

  render () {
    const { title, body } = this.props.message;
    const { editMessage, deleteMessage } = this.props;

    return (
      <div className="main-content">
        <div className="tool_header">
          <div className="tool_header__edit_wrapper">
            <ToolHeaderEdit editable={true} editAction={editMessage} deleteAction={deleteMessage} />
            <h1 className="message__title">{title}</h1>
            <ReactQuill value={body}
              readOnly={true}
              modules={{toolbar: null}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowMessage;
