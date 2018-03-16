import React from 'react';
import ToolHeader from '../app/tool_header';
import EventItem from './event_item';
import LargeDatePicker from './large_date_picker';

import { formatDate, setTimeToMidnight, now } from './date.js';
import { merge } from 'lodash';

class Schedule extends React.Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  eventDays(event) {
    let f = setTimeToMidnight
    let dates = [f(event.startDate).getTime()]
    let endDate = f(event.endDate).getTime()

    while (dates[dates.length - 1].toString() !== endDate.toString()) {
      let date = new Date( dates[dates.length - 1] )
      date.setDate(date.getDate() + 1)
      dates.push(date.getTime())
    }

    return [...dates]
  }

  eventsByDate() {
    const days = this.groupByDays()

    const html = []

    for (var date in days) {
      if (days.hasOwnProperty(date)) {
        html.push(
          <div className="event-index-item">
            <div className="event-index-item__date">{formatDate(new Date (parseInt(date)))}</div>
             <div className="event-index-item__events">
               {
                 days[date].map((event, key) => {
                   return <EventItem key={key} event={event} date={date}/>
                 })
               }
             </div>
          </div>
        )
      }
    }

    return html
  }

  groupByDays(events) {
    const grouped = {}

    this.props.events.forEach(event => {
      let days = this.eventDays(event)

      days.forEach(day => {
        if (grouped[day]) {
          grouped[day] = [...grouped[day], event]
        } else {
          grouped[day] = [event]
        }
      });
    });

    return grouped
  }

  render () {
    return (
      <div className="main-content">
        <ToolHeader
          title="Schedule"
          buttonText="New Event"
          buttonAction={() => this.props.history.push("/events/new")}
          editable={false} />
        <LargeDatePicker
          selectedDay={now()}
          updateParent={() => console.log("fix me")}
          className={"date-picker--large"}/>
        <div className="events-index">
          {
            this.eventsByDate().map((e, key) => {
              return <div key={key}>{e}</div>
            })
          }
        </div>
      </div>
    );
  }
}

export default Schedule;
