class AddCardNumberToCubeCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cube_cards, :card_number, :string
  end
end
