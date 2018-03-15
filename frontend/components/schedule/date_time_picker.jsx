import React from 'react';
import PropTypes from 'prop-types';
import TimePicker from './time_picker';
import { now, approxTime } from './date.js';

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time1: approxTime(now())
    }
  }

  render () {
    return <TimePicker updateParent={t => this.setState({time1: t})} time={this.state.time1}/>
  }
}

export default DateTimePicker;
