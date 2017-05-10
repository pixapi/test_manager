class CreateTest < ActiveRecord::Migration
  def change
    create_table :tests do |t|
      t.string :name
      t.string :status, default: "undefined"

      t.timestamps null: false
    end
  end
end
