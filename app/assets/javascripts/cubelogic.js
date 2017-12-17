$(document).ready(function () {
  $("#selection-card input").change(function () {
    //searchText = $("#selection-card input");
    //$('#card-preview').attr('src', "https://images.pokemontcg.io/" + searchText[0].options[inputs[0].selectedIndex].text + "/" + inputs[1].value + ".png")
    var inputs = document.querySelectorAll("#selection-card input");
    document.querySelector('#card-preview').src = "https://images.pokemontcg.io/" + inputs[0].options[inputs[0].selectedIndex].text + "/" + inputs[1].value + ".png";
  });
  $("#card-search-field").change(function () {
    $.get("/cards/" + $("#card-search-field").val(), function (d) {
      $("#card-search").html(d);
    });
  });
});
