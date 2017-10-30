class AddEvolutionaryLineToCubeCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cube_cards, :evolutionary_line, :string
  end
end
