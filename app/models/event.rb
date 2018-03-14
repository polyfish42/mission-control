class Event < ApplicationRecord
  validates :start_date, :end_date, presence: true

  belongs_to :user
  has_many :attendings
  has_many :attendees,
    through: :attendings,
    source: :user
end
