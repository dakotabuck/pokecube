# encoding: utf-8
class Cube < ApplicationRecord
  has_many :cubecards, :class_name => 'CubeCard'
  validates :name, length: { in: 3..30 }
  validates :private, inclusion: { in: ["1", "0"] }
end
