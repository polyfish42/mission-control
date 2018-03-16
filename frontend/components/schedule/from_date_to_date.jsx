import React from 'react';
import { isSameDay, isSameTime, abbrvDayOfTheWeek, month, formatTime } from './date.js';

const FromDateToDate = ({startDate, endDate}) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  function timeAndDate(date) {
    return `${abbrvDayOfTheWeek(date)}, ${month(date)} ${date.getDate()} at ${formatTime(date)}`
  }

  function sameDayEvent(start, end) {
    return `${timeAndDate(start)} - ${formatTime(end)}`
  }

  function multiDayEvent(start, end) {
    return `${timeAndDate(start)} - ${timeAndDate(end)}`
  }

  function _fromDateToDate(start, end) {
    if ( isSameDay(start, end) && isSameTime(start, end)) {
      return timeAndDate(date);
    } else if ( isSameDay(start, end) ) {
      return sameDayEvent(start, end)
    } else {
      return multiDayEvent(start, end)
    }
  }

  return (
      <p className={"event__from-date-to-date"}>{ _fromDateToDate(start, end)}</p>
  )
}

export default FromDateToDate;
