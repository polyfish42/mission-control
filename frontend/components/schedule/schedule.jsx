import React from 'react';
import ToolHeader from '../app/tool_header';
import { formatDate, setTimeToMidnight } from './date.js';
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

  events() {
    const days = this.groupByDays()

    const html = []

    for (var date in days) {
      if (days.hasOwnProperty(date)) {
        debugger
        html.push(
          <li>
            <p>{ formatDate(new Date (parseInt(date))) }</p>
            <ul>
              {
                days[date].map(event => {
                  return <li>{event.title}</li>
                })
              }
            </ul>
          </li>
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
        {
          this.events()
        }
      </div>
    );
  }
}

export default Schedule;
