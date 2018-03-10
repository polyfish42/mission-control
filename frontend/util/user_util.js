export const searchUsers = () =>
  $.ajax({
    url: "api/search/users",
    method: "GET"
  });
