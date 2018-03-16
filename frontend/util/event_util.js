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

export const fetchEvents = (search_start_date) => (
  $.ajax({
    url: 'api/events/filter',
    method: 'POST',
    data: {search_start_date}
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
