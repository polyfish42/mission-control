import React from 'react';
import PersonPickerContainer from '../form_helpers/person_picker_container';
import ReactQuill from 'react-quill';
import TimePicker from './time_picker';
import DatePicker from './date_picker';
import update from 'immutability-helper';
import { now,
  minutesFromNow,
  approxTime,
  timeTo30MinutesFormatted,
  abbrvMonth,
  abbrvDayOfTheWeek,
  setTime,
  isDateAfter,
  minutesFromDate
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
    this.startDateUpdate = this.startDateUpdate.bind(this);
    this.endDateUpdate = this.endDateUpdate.bind(this);
    this.time1Update = this.time1Update.bind(this);
    this.time2Update = this.time2Update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    if (!this.input1.contains(e.target) && !this.input2.contains(e.target)) {
      this.closeAllDatePickers()
    }
  }

  closeAllDatePickers() {
    this.setState({datePicker1Showing: false, datePicker2Showing: false})
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
    if (isDateAfter(date, this.state.endDate)) {
      this.setState({startDate: date})
    } else {
      this.setState({startDate: date, endDate: minutesFromDate(30, date)})
    }
    this.closeAllDatePickers()
  }

  endDateUpdate(date) {
    if (isDateAfter(this.state.startDate, date)) {
      this.setState({endDate: date})
    } else {
      this.shakeError(".event-form__input--date");
    }
    this.closeAllDatePickers()
  }

  time1Update(t, menuOpen) {
    const start = setTime(this.state.startDate, t);
    const end = setTime(this.state.endDate, this.state.time2);

    if (!isDateAfter(start, end) && menuOpen === false) {
      this.setState({time1: t, time2: approxTime(minutesFromDate(30, start))})
    } else {
      this.setState({time1: t})
    }
  }

  time2Update(t, menuOpen) {
    const start = setTime(this.state.startDate, this.state.time1);
    const end = setTime(this.state.endDate, t);

    if (!isDateAfter(start, end) && menuOpen === false) {
      this.shakeError(".time-picker__input");
    } else {
      this.setState({time2: t})
    }
  }

  formatDate(date) {
    return `${abbrvDayOfTheWeek(date)}, ${abbrvMonth(date)} ${date.getDate()}, ${date.getFullYear()}`
  }

  shakeError(c) {
    $($(c)[1]).addClass("shaking")

    window.setTimeout(
      () => $($(c)[1]).removeClass("shaking"),
      420
    )
  }

  datePickerShowingClass(c, n) {
    if (n === 1) {
      return c + (this.state.datePicker1Showing ? " " + "event-form__date-picker--showing" : "")
    }

    if (n === 2) {
      return c + (this.state.datePicker2Showing ? " " + "event-form__date-picker--showing" : "")
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const event = update(this.state, {
      start_date: { $set: setTime(this.state.startDate, this.state.time1)},
      end_date: { $set: setTime(this.state.endDate, this.state.time2)},
      attendees: { $set: this.state.attendees.map(a => parseInt(a.id))},
      $unset: ['datePicker1Showing', 'datePicker2Showing', 'time1', 'time2', 'attendees', 'startDate', 'endDate']
    })

    this.props.handleSubmit(event)
  }

  render () {
    const {title, startDate, endDate, attendees, notes} = this.state

    return (
      <div className="main-content">
        <form
          className="event-form"
          onSubmit={this.handleSubmit}>

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
              <DatePicker
                selectedDay={startDate}
                inputRef={el => this.input1 = el}
                updateParent={this.startDateUpdate}
                className={this.datePickerShowingClass("event-form__date-picker", 1)}/>
            </div>
            <TimePicker
              updateParent={this.time1Update}
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
              <DatePicker
                selectedDay={endDate}
                inputRef={el => this.input2 = el}
                updateParent={this.endDateUpdate}
                className={this.datePickerShowingClass("event-form__date-picker", 2)}/>
            </div>
            <TimePicker
              updateParent={this.time2Update}
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
