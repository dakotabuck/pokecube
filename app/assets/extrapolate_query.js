allQuery = [];
dataTypes = {
  set: {},
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
