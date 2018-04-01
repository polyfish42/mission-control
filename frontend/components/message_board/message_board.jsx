import React from 'react';
import ToolHeader from '../app/tool_header';
import MessagesIndexContainer from './message_index_container';
import { withRouter } from 'react-router-dom';

class MessageBoard extends React.Component {
  render () {
    return (
      <div className="main-content">
        <ToolHeader title="Messages"
          buttonText="New message"
          buttonAction={() => this.props.history.push("/messages/new")}
          editable={false} />
        <MessagesIndexContainer />
      </div>
    );
  }
}

export default withRouter(MessageBoard);
