import React from 'react';
import ReactQuill from 'react-quill';
import ToolHeaderEdit from '../app/tool_header_edit';
import CommentsContainer from '../comments/comments_container';
import Breadcrumbs from '../app/breadcrumbs';

class ShowMessage extends React.Component {
  componentDidMount() {
    this.props.fetchMessage()
  }

  render () {
    const { title, body, id } = this.props.message;
    const { editMessage, deleteMessage, comments } = this.props;

    return (
      <div>
        <Breadcrumbs links={[["Messages", "/messages"]]} />
        <div className="main-content">
          <div className="tool_header">
            <div className="tool_header__edit_wrapper">
              <ToolHeaderEdit
                editable={true}
                editAction={editMessage}
                deleteAction={deleteMessage} />
            </div>
          </div>
          <h1 className="message__title">
            {title}
          </h1>
          <ReactQuill
            value={body}
            readOnly={true}
            modules={{toolbar: null}}
            className="message-show__editor"/>
          {
            comments &&
            <CommentsContainer idName="message_id" id={id}/>
          }
        </div>
      </div>
    )
  }
}

export default ShowMessage;
