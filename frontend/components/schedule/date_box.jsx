import React from 'react';

class DateBox extends React.Component {
  constructor(props) {
    super(props);
  }

  addSelectedClass(c) {
    return c + (this.props.selected ? " date-box--selected" : "")
  }

  render () {
    return <button
            className={this.addSelectedClass("date-box date-box--button")}
            onClick={() => this.props.updateParent(this.props.day)}>
            {this.props.day.getDate()}
          </button>
  }
}

export default DateBox;
