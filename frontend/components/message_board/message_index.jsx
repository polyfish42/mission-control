import React from 'react';
import MessageIndexItem from './message_index_item';

class MessagesIndex extends React.Component {
  componentWillMount() {
    this.props.fetchMessages()
  }

  render () {
    const { messages } = this.props

    return (
      <ul className="messages__container">
        { messages && messages.map((message, key) => {
          return <MessageIndexItem key={key} message={message}/>
        })}
      </ul>
    )
  }
}

export default MessagesIndex;
