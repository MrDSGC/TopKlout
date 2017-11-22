class List < ApplicationRecord

  validates :twitter_id, presence: true
  validates :twitter_id, uniqueness: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: "User"
  
end
