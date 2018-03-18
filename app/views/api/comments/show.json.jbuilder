json.comment do
  json.extract! @comment, :id, :body, :user_id
end

json.user do
  json.partial! "api/users/user", user: @comment.author
end
