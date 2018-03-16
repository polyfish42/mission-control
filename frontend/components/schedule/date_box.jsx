import React from 'react';

class DateBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  addParentClass(c) {
    return c + (this.props.className ? this.addSelectedClass(` ${this.props.className}` ): this.addSelectedClass(""))
  }

  addSelectedClass(c) {
    return c + (this.props.selected ? this.addCurrentDayClass(" date-box--selected" ): this.addCurrentDayClass(""))
  }

  addCurrentDayClass(c) {
    return c + (this.props.currentDay ? " date-box--current-day" : "")
  }

  handleClick(e) {
    e.preventDefault();
    this.props.updateParent(this.props.day);
  }

  render () {
    return <button
            className={this.addParentClass("date-box date-box--button")}
            onClick={this.handleClick}>
            {this.props.day.getDate()}
          </button>
  }
}

export default DateBox;
