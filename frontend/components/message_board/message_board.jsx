import React from 'react';
import ToolHeader from '../app/tool_header';
import MessagesIndexContainer from './message_index_container';
import Breadcrumbs from '../app/breadcrumbs';
import { withRouter } from 'react-router-dom';

class MessageBoard extends React.Component {
  render () {
    return (
      <div>
        <Breadcrumbs />
        <div className="main-content">
          <ToolHeader title="Messages"
            buttonText="New message"
            buttonAction={() => this.props.history.push("/messages/new")}
            editable={false} />
          <MessagesIndexContainer />
        </div>
      </div>
    );
  }
}

export default withRouter(MessageBoard);
