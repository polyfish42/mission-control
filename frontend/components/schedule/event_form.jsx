import React from 'react';
import PersonPickerContainer from '../form_helpers/person_picker_container';
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

    this.childUpdate = this.childUpdate.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent();
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState(nextProps.event);
  // }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  childUpdate(field) {
    const that = this;

    return value => {
      that.setState({"attendees": value})
    }
  }

  render () {
    const {title, startDate, endDate, attendees, notes} = this.state

    return (
      <div className="main-content">
        <form onSubmit={() => console.log("freak out")}>
          <label>Title:</label><input onChange={this.update("title")} value={title}/>
          <label>Start:</label><input onChange={this.update("startDate")} value={startDate} />
          <label>End:</label><input onChange={this.update("startDate")} value={endDate} />
          <PersonPickerContainer people={attendees} update={this.childUpdate("attendees")} />
        </form>
      </div>
    )
  }
}

export default EventForm;
