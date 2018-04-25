import React from 'react';
import ToolHeader from '../app/tool_header';
import EventItem from './event_item';
import LargeDatePicker from './large_date_picker';
import Breadcrumbs from '../app/breadcrumbs';
import {formatDate, setTimeToMidnight, now, isDateAfter} from './date.js';
import {merge} from 'lodash';

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: setTimeToMidnight(now())
    }

    this.childUpdate = this.childUpdate.bind(this);
  }
  componentWillMount() {
    this.props.fetchEvents(this.state.selectedDay);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedDay !== this.state.selectedDay) {
      this.props.fetchEvents(this.state.selectedDay);
    }
  }

  eventDays(event) {
    let f = setTimeToMidnight
    let dates = [f(event.startDate).getTime()]
    let endDate = f(event.endDate).getTime()

    while (dates[dates.length - 1].toString() !== endDate.toString()) {
      let date = new Date(dates[dates.length - 1])
      date.setDate(date.getDate() + 1)
      dates.push(date.getTime())
    }

    return [...dates]
  }

  eventsByDate() {
    const days = this.groupByDays()

    const datesWithHtml = []

    for (var date in days) {
      if (days.hasOwnProperty(date)) {
        if (isDateAfter(this.state.selectedDay, new Date(parseInt(date)))) {
          datesWithHtml.push({
            date: parseInt(date), html: <div className="event-index-item">
                <div className="event-index-item__date">{formatDate(new Date(parseInt(date)))}</div>
                <div className="event-index-item__events">
                  {
                    days[date].map((event, key) => {
                      return <EventItem key={key} event={event} date={date}/>
                    })
                  }
                </div>
              </div>
          })
        }
      }
    }

    return this.sortByDate(datesWithHtml)
  }

  groupByDays(events) {
    const grouped = {}

    this.props.events.forEach(event => {
      let days = this.eventDays(event)

      days.forEach(day => {
        if (grouped[day]) {
          grouped[day] = [
            ...grouped[day],
            event
          ]
        } else {
          grouped[day] = [event]
        }
      });
    });

    return grouped
  }

  sortByDate(dates) {
    return dates.sort((a, b) => {

      return new Date(a.date) - new Date(b.date)
    })
  }

  childUpdate(selectedDay) {
    this.setState({selectedDay})
  }

  render() {
    return (<div>
      <Breadcrumbs/>
      <div className="main-content">
        <ToolHeader title="Schedule" buttonText="New Event" buttonAction={() => this.props.history.push("/events/new")} editable={false}/>
        <LargeDatePicker selectedDay={this.state.selectedDay} updateParent={this.childUpdate} className={"date-picker--large"}/>
        <div className="events-index">
          {
            this.eventsByDate().map((eventWithHtml, key) => {
              return <div key={key}>{eventWithHtml.html}</div>
            })
          }
        </div>
      </div>
    </div>);
  }
}

export default Schedule;
