json.message do
  json.partial! 'api/events/event', event: @event
end

json.users do
  @event.attendees.each do |attendee|
    json.set! attendee.id do
      json.partial! "api/users/user", user: attendee
    end
  end

  json.set! @event.user.id do |user|
    json.partial! "api/users/user", user: user
  end
end
