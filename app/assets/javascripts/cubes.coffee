# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

###
# Here's the non-jquery version of this
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('#selection-card input').forEach(function (currentFormElement) {
    console.log("Processed coffeeScript");
    currentFormElement.addEventListener("change", function () {
      console.log("loading card preview...");
      inputs = document.querySelectorAll("#selection-card input");
      document.querySelector('#card-preview').src = "https://images.pokemontcg.io/" + inputs[0].options[inputs[0].selectedIndex].text + "/" + inputs[1].value + ".png";
    });
  });
});
###
