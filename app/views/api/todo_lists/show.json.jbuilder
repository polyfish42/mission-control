json.todo_list do
  json.extract! @todo_list, :id, :name, :description, :user_id, :todo_ids
end

json.todos do
  @todo_list.todos.each do |todo|
    json.set! todo.id do
      json.partial! 'api/todos/todo', todo: todo
    end
  end
end

json.comments do
  @todo_list.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id
    end
  end
end
