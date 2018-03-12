json.partial! 'api/todos/todo', todo: @todo

json.users do
  @todo.assignees.each do |assignees|
    json.set! assignees.id do
      json.extract! assignees, :id, :name, :title, :bio, :email, :assignment_ids, :todo_list_ids
    end
  end
end
