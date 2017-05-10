class RemoveTestIdFromFeatures < ActiveRecord::Migration
  def change
    remove_column :features, :test_id
  end
end
