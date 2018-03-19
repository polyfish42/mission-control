# Mission Control
Mission Control is a clone of [basecamp](https://basecamp.com) and is used to manage projects on teams. It features todo lists, messages, and scheduling.

Live Site: [https://demo-mission-control.herokuapp.com/](https://demo-mission-control.herokuapp.com/).

## Technologies Used
* Rails
* React
* Redux

## Todos

Users can create todo lists, todos, and assign those todos. Both todos and todo lists are commentable.

![user creates todo](https://raw.githubusercontent.com/polyfish42/mission-control-wiki-assets/master/Todos.gif)

## Messaging

Users can create rich text messages, and comment on those messages.

![user creates a message](https://raw.githubusercontent.com/polyfish42/mission-control-wiki-assets/master/MessageGif.gif)

## Scheduling

Users can schedule events with other users. The schedule view is filterable by date. Events are commentable.

![user filter events with a calendar](https://raw.githubusercontent.com/polyfish42/mission-control-wiki-assets/master/Calendar.gif)

## Date functions

All date and time functions for validating, formatting, and manipulating dates were done in pure javascript with no external libraries.

``` JavaScript
export const formatDate = date => {
  return `${abbrvDayOfTheWeek(date)}, ${abbrvMonth(date)} ${date.getDate()}`
}

export const approxTime = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  const amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours === 0 ? 12 : hours
  minutes = minutes < 30 ? '00' : "30";

  return `${hours}:${minutes}${amOrPm}`
}
```
