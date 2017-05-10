class RemoveTestStatusFromFeatures < ActiveRecord::Migration
  def change
    remove_column :features, :test_status
  end
end
