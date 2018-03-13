export const creaetMessage = (message) => (
  $.ajax({
    url: 'api/todo_lists',
    method: 'POST',
    data: { message }
  })
);

export const fetchMessage = (id) => (
  $.ajax({
    url: `api/messages/${id}`,
    method: 'GET'
  })
);

export const fetchMessages = () => (
  $.ajax({
    url: 'api/messages/',
    method: 'GET'
  })
);

export const updateMessage = (message) => (
  $.ajax({
    url: `api/messages/${message.id}`,
    method: 'PATCH',
    data: { message }
  })
);

export const deleteMessage = (id) => (
  $.ajax({
    url: `api/messages/${id}`,
    method: 'DELETE'
  })
);
