json.todo_lists do
  @todo_lists.each do |todo_list|
    json.set! todo_list.id do
      json.extract! todo_list, :id, :name, :description, :user_id, :todo_ids;
    end
  end
end

json.todos do
  @todo_lists.each do |todo_list|
    todo_list.todos.each do |todo|
      json.set! todo.id do
        json.partial! 'api/todos/todo', todo: todo
      end
    end
  end
end
