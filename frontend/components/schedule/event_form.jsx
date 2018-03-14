import React from 'react';
import { now, minutesFromNow } from './date.js';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event ? this.props.event : ({
      title: "",
      startDate: now(),
      endDate: minutesFromNow(30),
      attendees: [],
      notes: ""
    })
  }

  componentWillMount() {
    this.props.fetchEvent();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.event);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  render () {
    const {title, startDate, endDate, attendees, notes} = this.state

    return (
      <div className="main-content">
        <form>
          <label>Title:</label><input onChange={this.update("title")} value={title}/>
          <label>Start:</label><input onChange={this.update("startDate")} value={startDate} />
          <label>End:</label><input onChange={this.update("startDate")} value={endDate} />
          
        </form>
      </div>
    )
  }
}

export default EventForm;
