class CreateCards < ActiveRecord::Migration[5.1]
  def change
    drop_table :cards
    create_table :cards do |t|
      t.string :name
      t.string :set
      t.string :number
      t.string :pokemontype
      t.integer :hp
      t.string :stage
      t.integer :retreat
      t.string :rarity
      t.string :dtype
      t.string :image

      t.timestamps
    end
  end
end
