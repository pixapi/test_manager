class AddFeatureIdToTest < ActiveRecord::Migration
  def change
    add_reference :tests, :feature, index: true, foreign_key: true
  end
end
