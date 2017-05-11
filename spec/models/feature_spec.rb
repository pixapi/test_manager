require 'rails_helper'

RSpec.describe Feature, type: :model do
  it { should have_many(:tests) }
end
