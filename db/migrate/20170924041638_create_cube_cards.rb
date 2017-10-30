class CreateCubeCards < ActiveRecord::Migration[5.1]
  def change
    create_table :cube_cards do |t|
      t.string :set_id
      t.string :card_number
      t.string :image
      t.references :cube, foreign_key: true
      t.text :tags
      t.string :pimp
      t.string :rarity
      t.boolean :side
      t.string :evolutionary_line
      t.datetime :timestamps

      t.timestamps
    end
  end
end
