class Message < ApplicationRecord
  validates :title, presence: true

  belongs_to :user
  has_many :comments, as: :commentable, dependent: :destroy
end
