import React from 'react';
import DateBox from './date_box';
import { now, daysInAMonth, isSameDay, monthFromNum } from './date.js';

class LargeDatePicker extends React.Component {
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
    return ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]
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
    return <div className="date-box date-box--large date-box--empty"></div>
  }

  dateBox(day) {
    const selected = isSameDay(this.props.selectedDay, day)
    const currentDay = isSameDay(now(), day)

    return <DateBox
              day={day}
              updateParent={this.props.updateParent}
              selected={selected}
              currentDay={currentDay}
              className={"date-box--large date-box--button--large date-box--selected--large"}/>
  }

  nextDay() {
    let currentDay = 6;

    return () => {
      currentDay = currentDay === 6 ? 0 : currentDay + 1
      return currentDay
    }
  }

  leftHeader() {
    return (
      <div className="date-picker__header date-picker__header--large--left">
        <div onClick={this.previousMonth} className="date-picker__arrow--large--left">←</div>
        { `${monthFromNum(this.state.month)} ${this.state.year}` }
      </div>
    )
  }

  rightHeader() {
    return (
      <div className="date-picker__header date-picker__header--large--right">
        { `${monthFromNum(this.rightMonth())} ${this.rightYear()}` }
        <div onClick={this.nextMonth} className="date-picker__arrow--large--right">→</div>
      </div>
    )
  }

  rightMonth(){
    return this.state.month === 11 ? 0 : this.state.month + 1
  }

  rightYear(){
    return this.state.month === 11 ? this.state.year + 1 : this.state.year
  }

  dayHeader() {
    return this.daysOfWeek().map((day, index) => {
      return <div className="date-box date-box--large date-box--empty date-box--empty--large date-box--day-of-week date-box--day-of-week--large">{day}</div>
    })
  }

  populateDatePicker(month, year) {
    let days = daysInAMonth(month, year)
    debugger
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
      <div className="calendar">
        <div className={this.addPropClasses("date-picker")}>
          {this.leftHeader()}
          {
            this.populateDatePicker(this.state.month, this.state.year).map((html, key) => {
              return <div key={key}>{html}</div>
            })
          }
        </div>
        <div className={this.addPropClasses("date-picker")}>
          {this.rightHeader()}
          {
            this.populateDatePicker(this.rightMonth(), this.rightYear()).map((html, key) => {
              return <div key={key}>{html}</div>
            })
          }
        </div>
      </div>
    )
  }
}

export default LargeDatePicker;
