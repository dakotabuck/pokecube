class CreateCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cards do |t|
      t.string :name
      t.integer :set
      t.integer :number
      t.integer :type
      t.integer :hp
      t.integer :stage
      t.integer :retreat
      t.string :rarity
      t.integer :dtype
      t.string :photo

      t.timestamps
    end
  end
end
