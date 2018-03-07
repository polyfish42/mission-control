class Todo < ApplicationRecord
  validates :name, presence: true

  belongs_to :todo_list
  belongs_to :user
  has_many :assignments
  has_many :assignees,
    through: :assignments,
    source: :user
end
  
