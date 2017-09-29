var allQuery, setList, dataTypes, makeSet;

allQuery = [];

"[\"Rising Rivals\",\"Mysterious Treasures\",\"Stormfront\",\"Plasma Blast\",\"BREAKthrough\",\"Dragon\",\"Team Aqua-Team Magma\",\"Legend Maker\",\"Holon Phantoms\",\"Secret Wonders\",\"Triumphant\",\"Roaring Skies\",\"Plasma Freeze\",\"Power Keepers\",\"XY Promos\",\"Supreme Victors\",\"Noble Victories\",\"Dark Explorers\",\"Furious Fists\",\"Ancient Origins\",\"Primal Clash\",\"XY\",\"BREAKPoint\",\"Phantom Forces\",\"Fossil\",\"Skyridge\",\"Neo Revelation\",\"Majestic Dawn\",\"Arceus\",\"Sandstorm\",\"Ruby and Sapphire\",\"Dragons Exalted\",\"Crystal Guardians\",\"Neo Genesis\",\"Aquapolis\",\"Unseen Forces\",\"Unleashed\",\"Base\",\"Legendary Collection\",\"Expedition\",\"Black and White\",\"McDonald's Promos 2011\",\"HeartGold SoulSilver\",\"Undaunted\",\"Deoxys\",\"Great Encounters\",\"Platinum\",\"Black and White Promos\",\"Boundaries Crossed\",\"Legendary Treasures\",\"Generations\",\"Emerald\",\"Dragon Frontiers\",\"Next Destinies\",\"Plasma Storm\",\"OP Series 7\",\"Call of Legends\",\"Hidden Legends\",\"Legends Awakened\",\"Double Crisis\",\"XY Trainer Kit (Noivern)\",\"WoTC Promo\",\"Fire Red Leaf Green\",\"EX Trainer Kit 2 (Blue)\",\"Diamond and Pearl Promos\",\"OP Series 1\",\"Nintendo Promos\",\"Emerging Powers\",\"BW Trainer Kit (Excadrill)\",\"Flashfire\",\"Team Rocket Returns\",\"Delta Species\",\"Diamond and Pearl\",\"EX Trainer Kit (Red)\",\"Dragon Vault\",\"OP Series 6\",\"Rumble\",\"BW Promos (Unlimited)\",\"Neo Discovery\",\"EX Trainer Kit 2 (Red)\",\"Jungle\",\"Kalos Starter Set (Froakie)\",\"OP Series 5\",\"Gym Challenge\",\"Gym Heroes\",\"OP Series 3\",\"Kalos Starter Set (Fennekin)\",\"Neo Destiny\",\"DP Trainer Kit 1 (Blue)\",\"OP Series 9\",\"OP Series 2\",\"Kalos Starter Set (Chespin)\",\"McDonald's Promos 2014\",\"Southern Islands\",\"OP Series 8\",\"Team Rocket\",\"OP Series 4\",\"HGSS Promos\",\"HGSS Trainer Kit (Lighting)\",\"HGSS Trainer Kit (Water)\",\"Best of Promos\",\"N/A\",\"BW Trainer Kit (Zoroark)\",\"BW Promos (Unlimited)\\n\",\"McDonald's Promos 2012\",\"XY Trainer Kit (Sylveon)\",\"EX Trainer Kit (Blue)\",\"DP Trainer Kit 1 (Gold)\",\"Kalos Starter Set (All)\"]"

makeSet = function (name, abbr, superset) {
  return {
    name: name,
    abbr: abbr,
    superset: superset
  }
};

setList = [
  {
    name: "Team Rocket",
    abbr: "TR",
    superset: "Classic",
  },
  {
    name: "Base Set",
    abbr: "BS",
    superset: "Classic"
  },
  {
    name: "Base Set 2",
    abbr: "B2",
    superset: "Classic"
  },
  makeSet("Fossil", "FO", "Classic"),
  makeSet("Jungle", "JU", "Classic"),
  makeSet("Gym Heroes", "G1", "Gym"),
  makeSet("Gym Challenge", "G2", "Gym"),
  makeSet("Neo Genesis", "N1", "Neo"),
  makeSet("Neo Discovery", "N2", "Neo"),
  makeSet("Neo Revelation", "N3", "Neo"),
  makeSet("Neo Destiny", "N4", "Neo"),
  makeSet("Expedition", "EX", "E-Card"),
  makeSet("Aquapolis", "AQ", "E-Card"),
  makeSet("Skyridge", "SK", "E-Card"),
  makeSet("Ruby & Sapphire", "RS", "EX"),
  makeSet("Sandstorm", "SS", "EX"),
  makeSet("Dragon", "DR", "EX"),
  makeSet("Team Magma vs Team Aqua", "MA", "EX"),
  makeSet("Hidden Legends", "HL", "EX"),
  makeSet("Fire Red Leaf Green", "RG", "EX"),
  makeSet("Team Rocket Returns", "RR", "EX"),
  makeSet("Deoxys", "DX", "EX"),
  makeSet("Emerald", "EM", "EX"),
  makeSet("Unseen Forces", "UF", "EX"),
  makeSet("Delta Species", "DS", "EX"),
  makeSet("Legend Maker", "LM", "EX"),
  makeSet("Holon Phantoms", "HP", "EX"),
  makeSet("Crystal Guardians", "CG", "EX"),
  makeSet("Dragon Frontiers", "DF", "EX"),
  makeSet("Power Keepers", "PK", "EX"),
  makeSet("Diamond & Pearl Promos", "PR", "Diamond & Pearl"),
  makeSet("Diamond & Pearl", "DP", "Diamond & Pearl"),
  makeSet("Mysterious Treasures", "MT", "Diamond & Pearl"),
  makeSet("Secret Wonders", "SW", "Diamond & Pearl"),
  makeSet("Great Encounters", "GE", "Diamond & Pearl"),
  makeSet("Majestic Dawn", "MD", "Diamond & Pearl"),
  makeSet("Legends Awakened", "LA", "Diamond & Pearl"),
  makeSet("Stormfront", "SF", "Diamond & Pearl"),
  makeSet("Platinum", "PL", "Platinum"),
  makeSet("Rising Rivals", "RR", "Platinum"),
  makeSet("Supreme Victors", "SV", "Platinum"),
  makeSet("Arceus", "AR", "Platinum"),
  makeSet("McDonald's Collection 2011", "MCD", "Black & White"),
  makeSet("McDonald's Collection 2012", "MCD", "Black & White"),
  makeSet("Black & White Promos", "PR", "Black & White"),
  makeSet("Black & White", "BLW", "Black & White"),
  makeSet("Emerging Powers", "EPO", "Black & White"),
  makeSet("Noble Victories", "NVI", "Black & White"),
  makeSet("")
];

dataTypes = {
  set: {

  },
  type: {},
  stage: {}
};

document.querySelectorAll("card").forEach(function (card) {
  var a = [], count = 0;
  card.querySelectorAll("*").forEach(function (b) {
    // do if/else stuff here to make sure everything is the correct data type

    // this puts quotes around b if it is an int
    if (isFinite(b.innerHTML))
      a.push(b.innerHTML);
    else if (count === 1) {
      // Assign the numeric value for the set instead of the set name string
      a.push(dataTypes.set[b.innerHTML.toLowercase()]); // setName
    } else {
      a.push("'" + b.innerHTML + "'");
    }
    count++;
  });
  allQuery.push("('" + a.slice(0, 10).join("','") + "')");
});

allQuery = allQuery.join(',');
// the following will punctuate the query for execution in rails ActiveDirectory
//allQuery = "INSERT INTO cards (name, set, number, type, hp, stage, retreat, rarity, dtype, description | create_date"
