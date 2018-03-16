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
    let dates = [f(event.startDate)]
    let endDate = f(event.endDate)

    while (dates[dates.length - 1].toString() !== endDate.toString()) {
      let date = new Date( dates[dates.length - 1].getTime() )
      date.setDate(date.getDate() + 1)
      dates.push(date)
    }

    return [...dates]
  }

  events() {
    this.groupByDays()
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

    console.log(grouped);
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
