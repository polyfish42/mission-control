json.message do
  json.extract! @message, :id, :title, :body, :user_id, :comment_ids
end

json.comments do
  @message.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id
    end
  end
end

json.users do
  @message.comments.each do |comment|
    json.set! comment.author.id do
      json.partial! 'api/users/user', user: comment.author
    end
  end
end
