json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :title, :body, :preview, :user_id, :comment_ids;
    end
  end
end
