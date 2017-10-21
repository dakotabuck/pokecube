class AddSetIdToCubeCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cube_cards, :set_id, :string
  end
end
