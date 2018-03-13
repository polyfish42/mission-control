import React from 'react';
import ToolHeader from '../app/tool_header';
import MessagesIndexContainer from './message_index_container';

class MessageBoard extends React.Component {
  render () {
    return (
      <div className="main-content">
        <ToolHeader title="Messages"
          buttonText="New message"
          buttonAction={() => console.log("fix me")}
          editable={false} />
        <MessagesIndexContainer />
      </div>
    );
  }
}

export default MessageBoard;
