class Cube < ActiveRecord::Migration[5.1]
  def change
    create_table :cubes do |t|
      t.string :name
      t.integer :owner
      t.text :description
      t.boolean :has_img
      t.boolean :private
      t.datetime :create_date

      t.timestamps
    end
  end
end
