var allQuery, setList, dataTypes, makeSet, count = 0;

allQuery = [];

"[\"Rising Rivals\",\"Mysterious Treasures\",\"Stormfront\",\"Plasma Blast\",\"BREAKthrough\",\"Dragon\",\"Team Aqua-Team Magma\",\"Legend Maker\",\"Holon Phantoms\",\"Secret Wonders\",\"Triumphant\",\"Roaring Skies\",\"Plasma Freeze\",\"Power Keepers\",\"XY Promos\",\"Supreme Victors\",\"Noble Victories\",\"Dark Explorers\",\"Furious Fists\",\"Ancient Origins\",\"Primal Clash\",\"XY\",\"BREAKPoint\",\"Phantom Forces\",\"Fossil\",\"Skyridge\",\"Neo Revelation\",\"Majestic Dawn\",\"Arceus\",\"Sandstorm\",\"Ruby and Sapphire\",\"Dragons Exalted\",\"Crystal Guardians\",\"Neo Genesis\",\"Aquapolis\",\"Unseen Forces\",\"Unleashed\",\"Base\",\"Legendary Collection\",\"Expedition\",\"Black and White\",\"McDonald's Promos 2011\",\"HeartGold SoulSilver\",\"Undaunted\",\"Deoxys\",\"Great Encounters\",\"Platinum\",\"Black and White Promos\",\"Boundaries Crossed\",\"Legendary Treasures\",\"Generations\",\"Emerald\",\"Dragon Frontiers\",\"Next Destinies\",\"Plasma Storm\",\"OP Series 7\",\"Call of Legends\",\"Hidden Legends\",\"Legends Awakened\",\"Double Crisis\",\"XY Trainer Kit (Noivern)\",\"WoTC Promo\",\"Fire Red Leaf Green\",\"EX Trainer Kit 2 (Blue)\",\"Diamond and Pearl Promos\",\"OP Series 1\",\"Nintendo Promos\",\"Emerging Powers\",\"BW Trainer Kit (Excadrill)\",\"Flashfire\",\"Team Rocket Returns\",\"Delta Species\",\"Diamond and Pearl\",\"EX Trainer Kit (Red)\",\"Dragon Vault\",\"OP Series 6\",\"Rumble\",\"BW Promos (Unlimited)\",\"Neo Discovery\",\"EX Trainer Kit 2 (Red)\",\"Jungle\",\"Kalos Starter Set (Froakie)\",\"OP Series 5\",\"Gym Challenge\",\"Gym Heroes\",\"OP Series 3\",\"Kalos Starter Set (Fennekin)\",\"Neo Destiny\",\"DP Trainer Kit 1 (Blue)\",\"OP Series 9\",\"OP Series 2\",\"Kalos Starter Set (Chespin)\",\"McDonald's Promos 2014\",\"Southern Islands\",\"OP Series 8\",\"Team Rocket\",\"OP Series 4\",\"HGSS Promos\",\"HGSS Trainer Kit (Lighting)\",\"HGSS Trainer Kit (Water)\",\"Best of Promos\",\"N/A\",\"BW Trainer Kit (Zoroark)\",\"BW Promos (Unlimited)\\n\",\"McDonald's Promos 2012\",\"XY Trainer Kit (Sylveon)\",\"EX Trainer Kit (Blue)\",\"DP Trainer Kit 1 (Gold)\",\"Kalos Starter Set (All)\"]"

dataTypes = {
  set: {

  },
  type: {},
  stage: {}
};
allQuery = [];
document.querySelectorAll("card").forEach(function (card) {
  var a = [];
  count++;
  var escapeName = function (str) {
    return card.querySelector(str).innerHTML.replace("'", "\\" + "'");
  };
  var escapeInt = function (str) {
    if (isFinite(parseInt(card.querySelector(str).innerHTML, 10))) {
      return parseInt(card.querySelector(str).innerHTML, 10);
    } else {
      return "''";
    }
  }
  var cardData = [
    count,
    "'" + escapeName("name") + "'",
    "'" + escapeName("set") + "'",
    escapeInt("number"),
    "'" + escapeName("type") + "'",
    escapeInt("hp"),
    "'" + escapeName("stage") + "'",
    escapeInt("retreat"),
    "'" + escapeName("rarity") + "'",
    "'" + escapeName("dtype") + "'"
  ];

  allQuery.push("(" + cardData.join(",") + ")");
});

allQuery = allQuery.join(',');document.querySelector("cards").innerHTML = allQuery;
// the following will punctuate the query for execution in rails ActiveDirectory
//allQuery = "INSERT INTO cards (name, set, number, type, hp, stage, retreat, rarity, dtype, description | create_date"
