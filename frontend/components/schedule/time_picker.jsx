import React from 'react';
import { now, approxTime, isValidTime } from './date.js';

const TIMES = [
  "12:00am","12:30am","1:00am","1:30am","2:00am","2:30am","3:00am","3:30am",
  "4:00am","4:30am","5:00am","5:30am","6:00am","6:30am","7:30am","8:00am",
  "8:30am","9:00am","9:30am","10:00am","10:30am","11:00am","11:30am",
  "12:00pm","12:30pm","1:00pm","1:30pm","2:00pm","2:30pm","3:00pm","3:30pm",
  "4:00pm","4:30pm","5:00pm","5:30pm","6:00pm","6:30pm","7:00pm","7:30pm","8:00pm",
  "8:30pm","9:00pm","9:30pm","10:00pm","10:30pm","11:00pm","11:30pm"
]

class TimePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: this.props.time,
      lastValid: this.props.time,
      menuOpen: false
    }

    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClickInside = this.handleClickInside.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const t = nextProps.time;
    this.setState({inputText: t, lastValid: this.validate(t)})
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOpen === false && this.state.menuOpen === true) {
      this.scrollDiv()
    }
  }

  handleClickOutside(e) {
    if (!this.input.contains(e.target)) {
      this.setState({menuOpen: false})
      this.props.updateParent(this.state.lastValid, false)
    }
  }

  handleClickInside(value) {
    this.setState({menuOpen: false})
    this.handleChange(value, false);
  }

  handleChange(value, menuOpen) {
    this.props.updateParent(value, menuOpen)
  }

  validate(time) {
    if (time && isValidTime(time)) {
      return time
    } else {
      return this.state.lastValid
    }
  }

  openMenu() {
    this.setState({menuOpen: true})
    this.scrollDiv()
  }

  scrollDiv(){
    const position = TIMES.indexOf(this.state.inputText) * 37

    $(".time-picker__ul").animate({scrollTop:position}, 1);
  }

  render () {
    const { inputText, menuOpen } = this.state;

    return (
      <div ref={i => this.input = i} className="time-picker">
        <input className="time-picker__input"
               value={inputText}
               onChange={(e) => this.handleChange(e.currentTarget.value)}
               onFocus={this.openMenu}/>
        {
          menuOpen &&
          <div className="time-picker__ul-parent">
            <ul className="time-picker__ul">
              {
                TIMES.map((time, key) => {
                  return <li key={key} onClick={() => this.handleClickInside(time)} className="time-picker__li">{time}</li>
                })
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default TimePicker;
