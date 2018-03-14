import React from 'react';
import { dayOfTheWeek, month } from './date.js';

const Days = ({ startDate, endDate }) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  function day(date) {
    return (
      <div className="day">
        <div className="day__month">{month(date)}</div>
        <div className="day__date">{date.getDate()}</div>
        <div className="day__day-of-the-week">{dayOfTheWeek(date)}</div>
      </div>
    )
  }

  function daysBetween(start, end) {
    const one_day = 1000 * 60 * 60 * 24;
    const difference = end.getTime() - start.getTime();

    return Math.round(difference / one_day)
  }

  function days(start, end) {
    return start.toDateString() === end.toDateString() ? (
      <div className="days__item">
        {day(start)}
      </div>
    ) : (
      <div className="days__item">
          {day(start)}
        <p className="days__total">{"··· " + daysBetween(start, end) + " days total ···"}</p>
          {day(end)}
      </div>
    )
  }

  return (
    <div className="days">
      { days(start, end) }
    </div>
  )
}

export default Days;
