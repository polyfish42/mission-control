class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :author,
    foreign_key: :user_id,
    class_name: :User
  belongs_to :commentable, polymorphic: true
end
