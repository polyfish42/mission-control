import React from 'react';
import PersonPickerContainer from '../form_helpers/person_picker_container';
import ReactQuill from 'react-quill';
import DateTime from './date_time_picker';
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

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.event);
  }

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

  modules() {
    return {
     toolbar: [
       { 'header': '1'},
       'bold',
       'italic',
       'strike',
       { 'color': [] },
       { 'background': [] },
       'blockquote',
       'link',
       'image',
       {'list': 'ordered'},
       {'list': 'bullet'}
     ]
   }
 }

 formats() {
   [
   'header', 'font', 'size',
   'bold', 'italic', 'strike', 'blockquote',
   'list', 'bullet',
   'link', 'image'
   ]
 }

  render () {
    const {title, startDate, endDate, attendees, notes} = this.state

    return (
      <div className="main-content">
        <form onSubmit={() => console.log("freak out")}>
          <label>Title:</label><input onChange={this.update("title")} value={title}/>
          <label>Start:</label><input onChange={this.update("startDate")} value={startDate} />
          <DateTime />
          <label>End:</label><input onChange={this.update("startDate")} value={endDate} />
          <label>With:</label><PersonPickerContainer people={attendees} update={this.childUpdate("attendees")} />
          <label>Notes:</label><ReactQuill value={notes}
            readOnly={false}
            modules={this.modules()}
            className="event-show__editor"/>
          <button type="submit" className="button button--green">Post this event</button>
        </form>
      </div>
    )
  }
}

export default EventForm;
