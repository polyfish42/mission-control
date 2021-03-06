import React from 'react';
import DateBox from './date_box';
import { now, daysInAMonth, isSameDay, monthFromNum } from './date.js';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: now().getMonth(),
      year: now().getFullYear()
    }

    this.populateDatePicker = this.populateDatePicker.bind(this);
    this.dateBox = this.dateBox.bind(this);
    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
  }

  daysOfWeek() {
    return ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
  }

  previousMonth() {
    const { month, year } = this.state

    if (month === 0) {
      this.setState({month: 11, year: year - 1})
    } else {
      this.setState({month: this.state.month - 1})
    }
  }

  nextMonth() {
    const { month, year } = this.state

    if (month === 11) {
      this.setState({month: 0, year: year + 1})
    } else {
      this.setState({month: this.state.month + 1})
    }
  }

  emptyBox() {
    return <div className="date-box date-box--empty"></div>
  }

  dateBox(day) {
    const selected = isSameDay(this.props.selectedDay, day)
    const currentDay = isSameDay(now(), day)

    return <DateBox
              day={day}
              updateParent={this.props.updateParent}
              selected={selected}
              currentDay={currentDay}/>
  }

  nextDay() {
    let currentDay = 6;

    return () => {
      currentDay = currentDay === 6 ? 0 : currentDay + 1
      return currentDay
    }
  }

  header() {
    return (
      <div className="date-picker__header">
        <div onClick={this.previousMonth} className="date-picker__arrow">←</div>
        { `${monthFromNum(this.state.month)} ${this.state.year}` }
        <div onClick={this.nextMonth} className="date-picker__arrow">→</div>
      </div>
    )
  }

  dayHeader() {
    return this.daysOfWeek().map((day, index) => {
      return <div className="date-box date-box--empty date-box--day-of-week">{day}</div>
    })
  }

  populateDatePicker() {
    let days = daysInAMonth(this.state.month, this.state.year)
    const nextDay = this.nextDay()
    const outputHTML = []

    while (true) {
      let dayOfWeek = nextDay();
      let [currentDay, ...restOfDays] = days
      if (typeof currentDay === 'undefined' && dayOfWeek === 0) {
        break
      }

      if (currentDay && dayOfWeek === currentDay.getDay()) {
        outputHTML.push(this.dateBox(currentDay))
        days = [...restOfDays]
      } else {
        outputHTML.push(this.emptyBox())
      }
    }
    return [...this.dayHeader(), ...outputHTML]
  }

  addPropClasses(c) {
    return c + (this.props.className ? " " + this.props.className : "")
  }

  render () {
    return (
      <div ref={this.props.inputRef} className={this.addPropClasses("date-picker")}>
        { this.header() }
        {
          this.populateDatePicker().map((html, key) => {
            return <div key={key}>{html}</div>
          })
        }
      </div>
    )
  }
}

export default DatePicker;
