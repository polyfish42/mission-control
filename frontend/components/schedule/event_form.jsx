import React from 'react';
import PersonPickerContainer from '../form_helpers/person_picker_container';
import ReactQuill from 'react-quill';
import TimePicker from './time_picker';
import DatePicker from './date_picker';
import { now,
  minutesFromNow,
  approxTime,
  timeTo30MinutesFormatted,
  abbrvMonth,
  abbrvDayOfTheWeek
} from './date.js';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event ? this.props.event : ({
      title: "",
      startDate: now(),
      datePicker1Showing: false,
      time1: approxTime(now()),
      endDate: minutesFromNow(30),
      datePicker2Showing: false,
      time2: approxTime(minutesFromNow(30)),
      attendees: [],
      notes: ""
    })

    this.childUpdate = this.childUpdate.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    // this.startDateUpdate = this.startDateUpdate.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.event);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  handleClickOutside(e) {
    debugger
    if (!this.input1.contains(e.target) && !this.input2.contains(e.target)) {
      this.setState({datePicker1Showing: false, datePicker2Showing: false})
    }
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

  // startDateUpdate(date) {
  //   date => this.setState({startDate: date})
  // }

  formatDate(date) {
    return `${abbrvDayOfTheWeek(date)}, ${abbrvMonth(date)} ${date.getDate()}, ${date.getFullYear()}`
  }

  datePickerShowingClass(c, n) {
    if (n === 1) {
      return c + (this.state.datePicker1Showing ? " " + "event-form__date-picker--showing" : "")
    }

    if (n === 2) {
      return c + (this.state.datePicker2Showing ? " " + "event-form__date-picker--showing" : "")
    }
  }

  render () {
    const {title, startDate, endDate, attendees, notes} = this.state

    return (
      <div className="main-content">
        <form
          className="event-form"
          onSubmit={() => console.log("freak out")}>

          <div className="event-form__row">
            <label className="event-form__label">Title:</label>
            <input
              onChange={this.update("title")}
              value={title}
              className="event-form__input"
              placeholder="Type the name of the event..."/>
          </div>

          <div className="event-form__row event-form__row--date">
            <label className="event-form__label">Start:</label>
            <div className="event-form__input--date-wrapper">
              <button
                type="button"
                className="event-form__input event-form__input--date"
                onClick={() => this.setState({datePicker1Showing: true, datePicker2Showing: false})}>
                {this.formatDate(startDate)}
              </button>
              <DatePicker inputRef={el => this.input1 = el} className={this.datePickerShowingClass("event-form__date-picker", 1)}/>
            </div>
            <TimePicker
              updateParent={t => this.setState({time1: t})}
              time={this.state.time1}/>
          </div>

          <div className="event-form__row event-form__row--date">
            <label className="event-form__label">End:</label>
            <div className="event-form__input--date-wrapper">
              <button
                type="button"
                className="event-form__input event-form__input--date"
                onClick={() => this.setState({datePicker1Showing: false, datePicker2Showing: true})}>
                {this.formatDate(endDate)}
              </button>
              <DatePicker inputRef={el => this.input2 = el}  className={this.datePickerShowingClass("event-form__date-picker", 2)}/>
            </div>
            <TimePicker
              updateParent={t => this.setState({time2: t})}
              time={this.state.time2}/>
          </div>

          <div className="event-form__row">
            <label className="event-form__label">With:</label>
            <PersonPickerContainer
              people={attendees}
              update={this.childUpdate("attendees")}
              className="event-form__person-picker" />
          </div>

          <div className="event-form__row">
            <label className="event-form__label event-form__label--notes">Notes:</label>
            <ReactQuill
              value={notes}
              readOnly={false}
              modules={this.modules()}
              onChange={(i) => this.setState({notes: i})}
              className="event-show__editor"/>
          </div>

          <button
            type="submit"
            className="button button--green button--edit-form">
            Post this event
          </button>
        </form>
      </div>
    )
  }
}

export default EventForm;
