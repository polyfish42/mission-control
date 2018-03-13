json.comment do
  json.set! @comment.id do
    json.extract @comment, :body, :user_id, :message_id, :todo_id, :todo_list_id
  end
end
