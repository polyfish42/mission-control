import React from 'react';
import ToolHeaderEdit from '../app/tool_header_edit';
import Days from './days';
import FromDateToDate from './from_date_to_date';
import ReactQuill from 'react-quill';
import CommentsContainer from '../comments/comments_container';
import Breadcrumbs from '../app/breadcrumbs';
import { abbrvMonth } from './date.js';

class ShowEvent extends React.Component {
  componentWillMount() {
    window.scrollTo(0,0)
    this.props.fetchEvent(this.props.match.params.eventId)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.eventId !== this.props.match.params.eventId) {
      this.props.fetchEvent(nextProps.match.params.eventId)
    }
  }

  postedBy(author) {
    const names = author.name.split(" ")
    return `Posted by ${names[0]} ${names[1].slice(0,1)}.`
  }

  isFullName(author) {
    return (typeof author !== 'undefined' && author.name !== null && author.name.split(" ").length >= 2)
  }

  postDate(createdAt) {
    const date = new Date(createdAt)
    return `${abbrvMonth(date)} ${date.getDay()}`
  }

  render () {
    const { event, author, comments, editEventRedirect, deleteEvent} = this.props;

    if (typeof event === 'undefined') {
      return null
    }

    return (
      <div>
        <Breadcrumbs links={[["Schedule", "/events"]]} />
        <div className="main-content">
          <div className="tool_header">
            <div className="tool_header__edit_wrapper">
              <ToolHeaderEdit editable={true} editAction={editEventRedirect} deleteAction={deleteEvent} />
              <div className="event">
                { event && <Days startDate={event.startDate} endDate={event.endDate} /> }
                <h1 className="event__title">{event && event.title}</h1>
                { event && <FromDateToDate startDate={event.startDate} endDate={event.endDate} />}
                <p className="event__postedOn">{ this.isFullName(author) && `${this.postedBy(author)} on ${this.postDate(event.createdAt)}`}</p>
                {
                  event && event.notes &&
                  <div className="event__notes">
                    <h2 className="event__notes-title">Notes:</h2>
                    <ReactQuill value={event.notes}
                      readOnly={true}
                      modules={{toolbar: null}}
                      className="event-show__editor"/>
                  </div>
                }
                {
                  event && comments && <CommentsContainer idName="event_id" id={event.id} type="event"/>
              }
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ShowEvent;
