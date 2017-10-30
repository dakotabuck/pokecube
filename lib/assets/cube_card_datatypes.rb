# Build a model of cards to add, with all relevant information in place:
def TypeObj(type)
  # If the card is a trainer, it will have different subtypes
  if type == "Trainer"
    return {
      "Item" => [],
      "Supporter" => [],
      "Technical Machine" => [],
      "Rocket's Secret Machine" => [],
      "Stadium" => [],
      "Pokémon Tool" => [],
      "Special" => [],
      "Energy" => []
    }
  end

  # Default to the card being a Pokemon
  return {
    "Basic" => [],
    "Stage 1" => [],
    "Stage 2" => [],
    "Restored" => [],
    "EX" => [],
    "Level Up" => [],
    "MEGA" => [],
    "LEGEND" => [],
    "BREAK" => [],
    "Trainer" => [],
  }
end

# This will influence the order in which cards are listed on
#   the energy curve page
typelist = [
  "Grass",
  "Fire",
  "Water",
  "Lightning",
  "Psychic",
  "Fighting",
  "Darkness",
  "Metal",
  "Fairy",
  "Dragon",
  "Colorless",
  "Trainer"
]

# Add a case to this if the name of your type is discordant from
#   what you want displayed as the description for it
def process_subtype(name)
  if name == "Energy"
    name = "Special Energy"
  elsif name == "Special"
    name = "Ace-Spec"
  end

  return name
end

# Determines what to display empty fields for, for legibility's sake.
must_display = ["Basic", "Stage 1", "Stage 2", "Trainer", "Item", "Pokémon Tool", "Energy"]

# typecount counts the number of cards in each type
typecount = {}
colors_object = {}
