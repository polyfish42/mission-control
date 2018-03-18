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
  {title: "Customer Interactions",
    body: "<p>When a customer emails you outside of Support Desk, what do you do?</p><p><br></p><p>It's a situation that James brought up in his check-in and also one that I run into on a daily basis with enterprise customers emailing my Basecamp email address. It's great to give out my direct email for accounts that I rep but at the same time, those interactions don't make their way into Support Desk. That leaves others on our team trying to piece together a customer's history as best as they can.</p><p><br></p><p>There's two methods that I've tried so far but I'm curious if anyone else has a better option.</p><p><br></p><p><strong>1) Separate Support Desk Mailbox</strong></p><p>With BC3 Big customers, I've been forwarding them into a separate mailbox. I stole the idea from Tony with his marketing emails. 😁</p><p><br></p><p>Pros - it gets every interaction into Support Desk, which means you can see previous tickets in the customer's history.</p><p><br></p><p>Cons - it's a very manual process since each email has to be forwarded in.</p><p><br></p><p><strong>2) Using the phone notes as a workaround</strong></p><p>When you create a new ticket, you can pick the phone option. That gives you a straight notes section to copy/paste in any emails from the customer or any other notes.</p><p><br></p><p><a href=\"https://3.basecamp.com/3961421/blobs/6d2abf4e09a17a8744ec58d622c982080010/download/images-new-conversation.png\" target=\"_blank\" style=\"color: inherit; background-color: transparent;\"><img src=\"https://preview.3.basecamp.com/3961421/blobs/6d2abf4e09a17a8744ec58d622c982080010/previews/full/images-new-conversation.png\"></a></p><p><br></p><p><br></p><p>Pros - it gets things into Support Desk and keeps it in one mailbox.</p><p><br></p><p>Cons - still a pretty manual process.</p><p><br></p><p><strong>Has anyone seen / used a better method?</strong></p>",
    preview: "When a customer emails you outside of Support Desk, what do you do?It's a situation that James brought up in his check-in and also one that I run into on a daily basis with enterp",
    user: User.order("RANDOM()").first },
  {title: "Weekender Vacation Policy",
    body: "<ul><li><span style=\"color: rgb(230, 0, 0);\">Having one person off on Sautday and/or Sunday is never a problem. We'll only be a few hours shy of 24/7 support, which is still a lot closer than most other companies</span></li><li>Two people off isn't ideal, but possible in exceptional circumstances. If you're going to a wedding while someone else is out for a week's vacation, that's fine</li><li>We should only plan to have everyone off on the weekends before and after meetups, for travel. We aren't 24/7 during the actual meetup, and usually find a way to manage customer's expectations about that - besides, your lovely teammates will probably find time to pop in for a bit of case clearance (not a requirement)</li><li>(probably goes without saying) - use your judgment. You were hired to work weekends, so you can't take every weekend off. If you do, someone else can't. Be nice!</li></ul><p><br></p><p>To see how we arrived at this, and to add your two cents, check out the 'Create policy surrounding weekender scheduling' to-do.</p>",
    preview: "Having one person off on Sautday and/or Sunday is never a problem. We'll only be a few hours shy of 24/7 support, which is still a lot closer than most oth",
    user: User.order("RANDOM()").first }
])

Comment.destroy_all
messages.each do |message|
  message.comments.create({body: "<p>Wow, what a great message!</>", user_id: User.order("RANDOM()").first.id})
  message.comments.create({body: "<p>Yeah, super cool 😁</p>", user_id: User.order("RANDOM()").first.id})
end

Event.destroy_all
User.order("RANDOM()").first.attending_events.create!(
  title: "Launch Plan Meeting",
  start_date: Faker::Time.between(DateTime.now, DateTime.now + 4),
  end_date: Faker::Time.between(DateTime.now + 5, DateTime.now + 10),
  notes: "These are my event notes",
  user_id: User.order("RANDOM()").first.id
)
User.order("RANDOM()").first.attending_events.create!(
  title: "Rocket Fuel Brewing Hour",
  start_date: Faker::Time.between(Date.today, Date.today + 1.hours),
  end_date: Faker::Time.between(Date.today + 2.hours, Date.today + 3.hours),
  notes: "<p>\t\t\t\t\t\t\t\t\t<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhISEREQFRUXFRUTFxUWGBcVFRkZFhcWFhYYGBcYHSggGBolHRgVITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUvKy0tLS0uLS0tLS0tLTItNysvLSstLS0vLS0rLS0tLS0tLS0tKy0tLS0tLTctLSstLf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgEDBAUHAgj/xAA+EAABAwIDBQQHBwMEAwEAAAABAAIRAyEEEjEFQVFhcQYigZETMqGxwdHwBxRCUmJy4SMzsoKSosIkNdIW/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAECAwUGBP/EACcRAQACAQQABwACAwAAAAAAAAABAhEDBCExBRITMkFRYYGhFHHB/9oADAMBAAIRAxEAPwDuCIilAiIgIiIKhECKEiIiAiIgIvBqBeXvPAILqKyHFC8qMi8isZzxCZymRfRWRVT0sapkXkXkPHEL0pBERAREQEREFERFKBERAREQEREBERAREQEREFQiBFCRERBRxhWXOnVMUbeIVtQLkrw56tVnwFpcbj8vVVtbC0RltK+NDd4VgbTbxEqPVnF13OI5BYzoG9x8V57azLGmk52gBfMOioNqt4qJVHt/V5q0arR+bzVPWT6abs2kOSq7abeIUG9MOL/NehXgQHP8/wCFPrI9NNWYsONlfG0MpvooE3GOb6r3exesPia1SrTZmnO4N05q8aqJo6e0yJVV5ptgADcAPJel6mEREQEREFERFKBERAREQEREBERAREQEREFQiBFCRERBi498ADnPkrLavEr3jLnoFqqrzm5ZfdChKztraOUWUediQLuu436LE7TbS9G5ojMXTDZiAN5Ucr7ceTIo68JMdLLxa2pETiZerS0pmMwl33kclj1MSFGztWraKNQkzoJFgN4F9+5WGbQqukejI7w1mADvPATyWD1tP7ZvRv8ASRVMSFjurjVaT7xUP4Zdmy5BJfyIbFwrFTFFpOcVGvDsvo8h0jWePJV9bT+0+jf6SEYgKprhadmf0Lq5gMBA1702kAReJv4rGZtJs3cQOYNjE6q9dSlupUnTtHwkYrBbbssfSYukPy5neQKhlDajDbNrp10tOqlXYTFH0pdTZ6R2R0AEATaSXbh81n08TaGG8TEOphFpaWIxpuaeGaPyy8nz/hXBtcstiGej/UDmZ42BHkva8zbIvLXAgEEEG4I0K9ICIiCiIilAiIgIiICIiAiIgIiICIiCoRAihIiIgwcT6x8FottYv0bSRGi3uLEO6ifgof2secjrSYNvBVtOIWiMyg2HxHpalao50kuDBfdrELY4PKCM7g1sgFx0APPy81r9gUf6b3GJ9I6eIsDErcYZx7uZrSBAhkCW6zJtN1zniHUNxoNgaWgFRwuMr2mCeFzMgjis3I/VhaLgHNJtcHQ6xce1WW0gB3my05bQXCDocgGqz20x3bkRoBaVzOpfH9s0ytVKQc05g68zeDe2rdFglrACGwQyxF3mdYJuSfas3F0W2JDiQZEZzfnG7rZecS4NixJJiACddSSBbxVaW+spiUexWCBJe+nSL7gDvFoBG6fOVpto4ctDot+B0QCZvliNLKU13EucS0NHdAbOaTOoEW3a8FodpUHOLzdzoL3E6xvPuELaaGpOeZWyilRsSMoIOsTcA35tFx7F0Ls9jDg8L6ZoDnnKxuUd092AbcmzxXP8Q4SIAFg2ZMG5Mut0Hkpvs6gatbZ+HaRlMveBvaLmfAEeK6HbWnzQ1+4jMJzszGY11JtQ0c0jNEhpM8AT71nYfHU8Wx7IIe2WupuEOaei3ICjPamn6CpSxrLZXNp1o303GAT+0keBK3DWNP2b2/8Ad8W7BVT3HGKZP4Xfl6H39VP1yz7T9mw+liqcgOsSNzhdpH1uU97LbV+9YWlV/ERlf+9tne2/ioicymYbZERShRERSgREQEREBERAREQEREBERBUIgRQkREQYuN3HqoN2tf3XKdY8dwkbr/Bc27W4iGvngVj1Ol6don2dxgFMNI1qOi95Nhbfz8FJMEBaxItO76uo92bqtFFkj+4+oWk+I08DfopFgh01j2T5LnfEva22i2uDZAEBuUi0GCCDwFoKyWMnKYe2AZAiDobxNrcVbo07ER1ix56b4WWxxkjKYixtBt5zK5fUtmeGWZeGVA67dDvHh5qyGnvZi3XRsjdz3lXarx3Xd7gB3o4aR71Zr0xZsgSSTAEmLkzu01hVrBDX4kQXXzPLfzWbuHTWY3rQbTYXEtkg3kTl3SZ8gpJiCR11tx1F/BRjabCS8klxguJMaAch9StjtZzZeOmgOHpv0MEMB71gXZtBfoF17sRsJoy4txl7qQpsbua2e8epPsXIahaSxsQQ6Z46GI5EHyXfezlLJhqI/QPbddVsa5nMtdu7YjDZLD2vgxXoVaR/GxzPMGD5wsxFtWvQd7Di9k3Hfa3/AJMsfcVhfZLjf79AnhVaP+Lv+i3fZunlfjcOdBWqR0f3x/koh2Q/8faQZoCX0j4gke0NVJ4stHtdZRAiuqoiIpQIiICIiAiIgIiICIiAiIgqEQIoSIiIKObIhcu+0nBFlN9jEajUhdSUS7f0g+mGnQtcednMn3qt4zC1J5QXZdHJRZLgRkBsBAmSYjS5IjlzWxwsZmhzg0FwBJFo+HVYVNoYDTD3T/cmLiXWG/xBG9ZuC18r+y/mue8T4htNDmG7o3sCLOgrLZ8isCi4hrozesJtmAJ1gC5WwboLHy+C5PWriWaXhtTOCQdDuMhWao3brz47lfLrm0DURv8AbdWKzgC0EGTYHdOuu5Y4jnghrq8SC6Y7oIiLDd1+ajG0nDM6zg0ukDQx06qTYsSIJAGbNMSbTH1vUb2hBFxfMCTNoAuFtdr2yfDQUaXfa6fxOHst719A7IphtCk0bmN93NcAwjZqi07/AAmPivoXBthjBwaB7F12xjhrN3PMLyIi2DxIzgu7tHEj8zKT/wDjl/6qIbZHotpB2kVWP9olTCqI2n1oM9jnhRbtvTjGT+lpVb/C1XTkXmkZaDyC9KyqiIilAiIgIiICIiAiIgIiICIiCoRAihIiIgKFdvHOFSiM3de17Y6OYTHVTVQrt+wOq4Wfwio/lbL/ACq26Wr2jbqVi4gSTF43G1wOe/kr+DG62uu/QeY/lWXQZIn8t5ixmR56q9g9fl0M7vq65/xZs9t022Dg3GU7iRvgQZ8VmsEDfvusPCSA1uut7crGBfqsjClxHf16ZY+uK5HUjnMM8lRxzAC40NvjOqsVaYzSZtprrH5ZgnS/NXsU8sFgDEnvGPoq3UdaYOkxvvuURmOSGrxLjF9bSPrko5tF/fc8AN4D1hYH+FIsc6JB3ECbakCLhR3aVIFpImc4aN4NjN1tNpnLJ8NVgKcvAB+frNGnS6+gaIhrRyHuXANln+paxtA0mXtsfavoCkIAHILr9l7Wq3XuekRCvc8iNV//AGXSgz/N60Hbdk4pv7B71v8ACnPtCu78jadPybmP+S0vaTv4s8mgLHqfH+4Xp3KdYX1Gftb7grq802wAOAAXpZFFERFKBERAREQEREBERAREQEREFQiBFCRERAUF+0OfSUCCe62oSLQQ6Ab8ZhTpQP7RnglrYuG583IGSPGB5Kt+lq9tHU/dNhA3akW+twV3CbvV1Omp0EETZeH5gO9YyR4bkwx0v7NPnC57xTps9v03FMmG5SB3rmJsSfjaVm24clg0Km66yGakyRMDUwPguS1O3omCo1jSS5zQXaTb3m6s1G+sTv8AKI15G/sVyuxr/wAs2BHdJ9oMLHqxGWLRlggG0Qlef+piGFjnWI8Ynhx4qNbSbY3M2y2sYPeut/i3hwBBacoIHmARp7+C0G0wWvh4duf1zGT9c1tdpVb4YuygPSNkH8FxaP6jRM+JHku+NXAtmO/qiBaWa3gCpTjyHDiu+hddsvY1O69yqt16oY1znGA0FxPAASVcUa7X4suDMIz1qpGeN1MG8/uNukr2vKp2SYSx9d4g1HOqmd2YkgeAgLS4J3p8YTrNUDwbc+wFb/bOJGFwhjUjKOpWo7BYXM9zzoxuX/W+CfENj/esF7Z1K1/llrGKTb+E4REWdiUREUoEREBERAREQEREBERAREQVCIEUJEREBc+7cPLsU1giPQmx3mTHhcLoK5v2qq5sc7vGGsA6aSqX6henbBrOMAGDYydYPDqrVIxBJEEmIjNaJkbryrmIygQOscp1WGx9/qI+vctB4jGWz23TcU6xAENLiSLNPjrZZoqQOHUxc/FarD1LXM7/AOP5WTRry2zs3MZb/BcvqUevDLbUabiOcRu3HirD3xHs5LyamtiPAR4ELHqVePzVYpynDFxbtZi4JO8zM7/C4K0WOeQZcDcNI5ibRu3La4lw5ct1z8FH8c/WOms3W221eVbdLWHq5axjjMzm0c06jXQL6EpGQDyC+eqGFc6q686gusJJGYWXSNidqcRRotFeiajYhj2WNrAPB16hdTs/bhqdz2mG29rMwtM1H3OjWjVztwHz3LRdmMA97n4vEeu8zyA3AcAAsfZ+z34qp95xZAA9Rm4DgOCwu2PaYkHDYbgQ940aBqvVfUikZlgppzecQwO0+2TicRlYC6nTdlaB+OobADxXQNgbN+70GUzd13PPF7ruPTcOQCiH2fbBzFuKqAhjZFFp1JNnVTzOgXQFj0aTGb27n+vxfVtHtr1AiIs7CoiIpQIiICIiAiIgIiICIiAiIgqEQIoSIiIC5xtQZ8RXeNMxH+0gfBdFqugE8AT5LmWzM1Vr3C4c90idLkzP1qsd4nharGxr/rfvWqdU10Oh3gjWbb9FsNo0Xi1us6brqO1qVQHQuG4jQ+a1W80/M2O3thumYnWTN7ndPUWWU3Eji0dAB7Bqowx1TVoMyLAEnQnTSAYBle/T1MzpbUIzT6sEjwBAMStJfa/r3xZJvSkWD2OPEywaeKsVsRx9/wDHyWie6sGhxZUh2kjh7/JWquIfYODv9IB1uY8x7VSNrz8JzDYV682+PTj4rXQajw3uy4hsuMASRBncArFWs/KB6N9s14deeWlldwOHLnRUbUAyn1RfNBLR0mJhe3S0vLLDe3DO2Dgqjngt7xFQMkcdRbhAPDeurdnsOKmGYajYd3swiwdmMxyXOdnMqYdocKcufDQHHR34XNAuSDBUs2Xj696LGOe5vd7oAa0gDMJ0ABtqug21cVy1OvbMq9rMW6mQxgdki+SM3gsDs12YdiSKlZmSgDmDPxVCNMx3j6vqJXhNgZiH4ghx1yD1fE/iW9a2LBZ506zbzT2xxeYr5YUYwAAAAAWAFgBwXpEV1BERBRERSgREQEREBERAREQEREBERBUIgRQkREQavtNiBTwtdxP4HDzt8VzTAUgyk0B2ovP6uPmp/wBuaDn4SoGtc4AtLg3XKNYjhr4LndPaVBzcra9NmUaPcGG269ieSjjKVSS5xzQdARpOvUR56rzU7POquLmhpk6Bxbz0BhYmDDHvc4ODtACOGqkuy9ntPHwJVLadLLxe0MIdlyRBwlZxI1ZWYDAseGq81+y2Y97DYsSAwRktcRdrgJ5gTZTXCbKZrL/9x+a2NLZzG6GoLfmd81552mnLJG4vDmjuyWpGFxpnWSAPDvqn/wCOYAT9xxBPB9RgHvNl0x2zGfr8z81rsXslsG7+HrO68VEbPT/T/Iu51jOzThJFEUm8BUJtyi8rXMpupOJbmyhxgE5Tb81p9ymW09nNbeX2/UfmohtLDgGxd5kyssbbTj4VnXvPyzcDt+rWrR6NuYANYRJDAdSJtMrpHY2iKTHU80unO7eJdrfjpPULl3ZZlWlVJc0ZQWxmguMl1g03OnvXU+z+Pr16hc6iKdAM7hJGZxJF8o9UQDZZ+IjEMXPaQoiKUCIiAiIgoiIpQIiICIiAiIgIiIKKqIgIiIKhERQkREQFHNtdh8DiiXVKDQ/8zJafGLFURBHB9lwolxw2Ke2TOWo3MPOVk4fs7j6WhwlThd7T7QiKPKnzNrg24xvrYWj1bV+YWezE1xf7r1h7fNEVZp+nn/B+LrxbCu8XN+awMQcW71cKPF7f/pESKT9z/SYvE/DUYjY20Kh/tUWdanyBWKOwGIqGatai39sk+4Iiny/qPM22xPs7w9B/pXOdUfbWMttICmFGkGiAPj7TqiKyFxERAREQEREFERFKBFREFUVEQVREQf/Z\"></p><p><br></p><p>Let's get to work on that new formula....</p>",
  user_id: User.order("RANDOM()").first.id
)
User.order("RANDOM()").first.attending_events.create!(
  title: "Launch Failure Retrospective",
  start_date: Faker::Time.between(DateTime.now, DateTime.now + 2),
  end_date: Faker::Time.between(DateTime.now + 3, DateTime.now + 5),
  notes: "These are my event notes",
  user_id: User.order("RANDOM()").first.id
)
User.order("RANDOM()").first.attending_events.create!(
  title: "Mars social calendar",
  start_date: Faker::Time.between(DateTime.now + 4, DateTime.now + 6),
  end_date: Faker::Time.between(DateTime.now + 8, DateTime.now + 9),
  notes: "These are my event notes",
  user_id: User.order("RANDOM()").first.id
)
