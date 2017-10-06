#! /usr/bin/env ruby

require 'nokogiri'
require 'open-uri'

# Fetch and parse XML document
#doc = File.open("app/assets/pokemoncards.xml") { |f| Nokogiri::XML(f) }
doc = Nokogiri::XML(open("app/assets/pokemoncards.xml"))

cards = doc.xpath("//card")

cards.each do |entry|
  name = entry.xpath("name").text
  set = entry.xpath("set").text
  number = entry.xpath("number").text
  pokemontype = entry.xpath("type").text
  dtype = entry.xpath("dtype").text
  hp = entry.xpath("hp").text
  stage = entry.xpath("stage").text
  retreat = entry.xpath("retreat").text
  rarity = entry.xpath("rarity").text

  creation = Card.create(:name => name, :set => set, :number => number,
              :pokemontype => pokemontype, :dtype => dtype, :hp => hp,
              :stage => stage, :retreat => retreat, :rarity => rarity)
end
