@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :name, :title, :bio, :email
  end
end
