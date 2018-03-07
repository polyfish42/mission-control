# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
10.times do
  User.create!(email: Faker::Internet.unique.email,
            name: Faker::Name.unique.name,
            title: Faker::Job.title,
            bio: Faker::HitchhikersGuideToTheGalaxy.quote,
            password: 'password')
end

TodoList.destroy_all
todolist = 3.times do
  TodoList.create!(name: Faker::SiliconValley.invention,
            description: Faker::HarryPotter.quote,
            user: User.order("RANDOM()").first)
end

Todo.destroy_all
todos = 10.times do
  User.order("RANDOM()").first.assigned_todos.create!(
            name: Faker::Dune.saying,
            due_date: Faker::Date.forward(23),
            description: Faker::Dune.quote,
            done: false,
            todo_list: TodoList.order("RANDOM()").first,
            user: User.order("RANDOM()").first
          )
end
