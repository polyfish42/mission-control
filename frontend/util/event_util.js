export const createEvent = event => (
  $.ajax({
    url: 'api/events',
    method: 'POST',
    data: { event }
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    url: `api/events/${id}`,
    method: 'GET'
  })
);

export const fetchEvents = () => (
  $.ajax({
    url: 'api/events/',
    method: 'GET'
  })
);

export const updateEvent = event => (
  $.ajax({
    url: `api/events/${event.id}`,
    method: 'PATCH',
    data: { event }
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    url: `api/events/${id}`,
    method: 'DELETE'
  })
);
