class Feature < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true

  def display_status
    status.capitalize
  end

  def default_test_status
    test_status == "undefined"
  end

  def approve_test
    test_status == "passed"
  end

  def fail_test
    test_status == "failed"
  end
end
