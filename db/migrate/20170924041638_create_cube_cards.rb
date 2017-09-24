class CreateCubeCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cube_cards do |t|
      t.integer :card_id
      t.string :image
      t.references :cube, foreign_key: true
      t.text :tags
      t.string :pimp
      t.string :rarity
      t.boolean :side
      t.datetime :timestamps

      t.timestamps
    end
  end
end
