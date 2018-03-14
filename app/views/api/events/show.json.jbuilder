json.event do
  json.partial! 'api/events/event', event: @event
end

json.users do
  @event.attendees.each do |attendee|
    json.set! attendee.id do
      json.partial! "api/users/user", user: attendee
    end
  end

  json.set! @event.user.id do
    json.partial! "api/users/user", user: @event.user
  end
end

json.comments do
  @event.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id
    end
  end
end
