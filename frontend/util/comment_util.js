export const createComment = comment =>
  $.ajax({
    url: "api/comments",
    method: 'POST'
  })
