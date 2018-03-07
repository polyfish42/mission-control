@todo_lists.each do |todo_list|
  json.set! todo_list.id do
    json.extract! todo_list, :id, :name, :description, :user_id
  end
end
