# encoding: utf-8
class Cube < ApplicationRecord
  has_many :cubecards, :class_name => CubeCard
  validates :name, length: { in: 3..30 }
end
