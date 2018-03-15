import React from 'react';
import PersonPickerContainer from '../form_helpers/person_picker_container';
import ReactQuill from 'react-quill';
import TimePicker from './time_picker';
import { now, minutesFromNow, approxTime, timeTo30MinutesFormatted } from './date.js';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event ? this.props.event : ({
      title: "",
      startDate: now(),
      time1: approxTime(now()),
      endDate: minutesFromNow(30),
      time2: approxTime(minutesFromNow(30)),
      attendees: [],
      notes: ""
    })

    this.childUpdate = this.childUpdate.bind(this);
    this.startDateUpdate = this.startDateUpdate.bind(this);
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

 startDateUpdate(date) {
   date => this.setState({startDate: date})
 }

  render () {
    const {title, startDate, endDate, attendees, notes} = this.state

    return (
      <div className="main-content">
        <form className="event-form" onSubmit={() => console.log("freak out")}>
          <div className="event-form__row"><label className="event-form__label">Title:</label><input onChange={this.update("title")} value={title} className="event-form__input" placeholder="Type the name of the event..."/></div>
          <div className="event-form__row event-form__row--date"><label className="event-form__label">Start:</label><input onChange={this.update("startDate")} value={startDate} className="event-form__input event-form__input--date"/>
            <TimePicker updateParent={t => this.setState({time1: t})} time={this.state.time1}/>
          </div>
          <div className="event-form__row event-form__row--date"><label className="event-form__label">End:</label><input onChange={this.update("startDate")} value={endDate} className="event-form__input event-form__input--date"/>
            <TimePicker updateParent={t => this.setState({time2: t})} time={this.state.time2}/>
          </div>
          <div className="event-form__row">
                <label className="event-form__label">With:</label>
                <PersonPickerContainer people={attendees} update={this.childUpdate("attendees")} className="event-form__person-picker" />
          </div>
          <div className="event-form__row"><label className="event-form__label event-form__label--notes">Notes:</label><ReactQuill value={notes}
            readOnly={false}
            modules={this.modules()}
            className="event-show__editor"/></div>
          <button type="submit" className="button button--green button--edit-form">Post this event</button>
        </form>
      </div>
    )
  }
}

export default EventForm;
