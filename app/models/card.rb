class Card < ApplicationRecord
  validates :name, :set, :pokemontype, :stage, :rarity, :image, presence: true
  validates :number, presence: true, numericality: { only_integer: true }
  validates :hp, numericality: { only_integer: true }, allow_nil: true
  validates :retreat, numericality: { only_integer: true }, allow_nil: true
end
