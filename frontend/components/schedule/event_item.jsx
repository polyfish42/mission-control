import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { formatTime, isOnSameDay, fromTimeToTime } from './date.js'

class EventItem extends React.Component {
  displayTime() {
    const { startDate, endDate } = this.props.event
    const eventItemDate = new Date(parseInt(this.props.date))

    if (isOnSameDay(startDate, endDate)) {
      return fromTimeToTime(startDate, endDate)
    } else if (isOnSameDay(startDate, eventItemDate)) {
      return `${formatTime(startDate)} onward`
    } else if (isOnSameDay(endDate, eventItemDate)) {
      return `Until ${formatTime(endDate)}`
    } else {
      return null
    }
  }

  render () {
    const { event } = this.props

    return (
      <Link to={`/events/${event.id}`} className="event-index-item__link">
        <div className="event-index-item__event">
          <p className="event-index-item__event-title">{event.title}</p>
          <p className="event-index-item__event-time">{this.displayTime()}</p>
        </div>
      </Link>
    )

  }
}

export default EventItem;
