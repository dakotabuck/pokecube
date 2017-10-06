class Card < ApplicationRecord
  validates :name, :set, :pokemontype, :stage, :rarity, :number, presence: true
  validates :hp, numericality: { only_integer: true }, allow_nil: true
  validates :retreat, numericality: { only_integer: true }, allow_nil: true
end
