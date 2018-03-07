@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :title, :bio, :email, :assignment_ids, :todo_list_ids
  end
end
