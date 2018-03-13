# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
100.times do
  User.create!(email: Faker::Internet.unique.email,
               name: Faker::Name.name,
               title: Faker::Job.title,
               bio: Faker::HitchhikersGuideToTheGalaxy.quote,
               password: 'password')
end

TodoList.destroy_all
TodoList.create!(name: "Launch plan for HIPSTAT",
                 description: "Perform trajectory design, optimization, and dispersion analysis",
                 user: User.order("RANDOM()").first)
TodoList.create!(name: "Retrieve Telsa Roadster",
                 description: "Convince Starman to turn around and come back home",
                 user: User.order("RANDOM()").first)
TodoList.create!(name: "NASA resupply to ISS (Flight 13)",
                 description: "Falcon 9 - Florida Launch Site",
                 user: User.order("RANDOM()").first)

Todo.destroy_all
User.order("RANDOM()").first.assigned_todos.create!(
          name: "Select flight constants and guidance parameters",
          due_date: Faker::Date.forward(23),
          description: "",
          done: false,
          todo_list: TodoList.first,
          user: User.order("RANDOM()").first
)
User.order("RANDOM()").first.assigned_todos.create!(
          name: "Verify compliance with contractual mission requirements",
          due_date: Faker::Date.forward(23),
          description: "",
          done: false,
          todo_list: TodoList.first,
          user: User.order("RANDOM()").first
)
User.order("RANDOM()").first.assigned_todos.create!(
          name: "Launch processing system test conductors",
          due_date: Faker::Date.forward(23),
          description: "",
          done: false,
          todo_list: TodoList.first,
          user: User.order("RANDOM()").first
)
Message.destroy_all
messages = Message.create!([
  {title: "Thank You Cards",
    body: "I'd like to spend a bit more time delighting our customers. Sometimes we get too busy to send a card or gift. Or perhaps we get distracted and sometimes we forget!I'm here to help with that! If there's a customer that you want to send something to, please add their name as a to-do item. If you're able to find their physical mailing address, (which would be awesome!) please add that as a comment or note on the to-do item. I'm planning on sending hand-written cards to most folks, (who doesn't love a handwritten card) but will take a small monthly budget to send some gifts as well. Even comping a free month of service (for long-time customers) is a super nice gesture. Here's to more delighting!",
    user: User.order("RANDOM()").first },
  {title: "The Road",
    body: "Once there were brook trout in the streams in the mountains. You could see them standing in the amber current where the white edges of their fins wimpled softly in the flow. They smelled of moss in your hand. Polished and muscular and torsional. On their backs were vermiculate patterns that were maps of the world in its becoming. Maps and mazes. Of a thing which could not be put back. Not be made right again. In the deep glens where they lived all things were older than man and they hummed of mystery.",
    user: User.order("RANDOM()").first }
])

Comment.destroy_all
messages.each do |message|
  message.comments.create({body: "this is a comment", user_id: User.order("RANDOM()").first.id})
end
