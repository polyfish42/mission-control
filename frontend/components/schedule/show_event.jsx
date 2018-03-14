import React from 'react';
import ToolHeaderEdit from '../app/tool_header_edit';
import Days from './days';

class ShowEvent extends React.Component {
  componentWillMount() {
    this.props.fetchEvent()
  }

  render () {
    const { event, editEventRedirect, deleteEvent} = this.props;

    return (
      <div className="main-content">
        <div className="tool_header">
          <div className="tool_header__edit_wrapper">
            <ToolHeaderEdit editable={true} editAction={editEventRedirect} deletAction={deleteEvent} />
            { event && <Days startDate={event.startDate} endDate={event.endDate} /> }
            <h1 className="event__title">{event && event.title}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowEvent;
