class Test < ActiveRecord::Base
  validates :name, presence: true
  belongs_to :feature
end
