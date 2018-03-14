json.todo do
  json.partial! 'api/todos/todo', todo: @todo
end

json.users do
  @todo.assignees.each do |assignees|
    json.set! assignees.id do
      json.extract! assignees, :id, :name, :title, :bio, :email, :assignment_ids, :todo_list_ids
    end
  end
end

json.comments do
  @todo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id
    end
  end
end
