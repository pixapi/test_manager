class Feature < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
  has_many :tests

end
