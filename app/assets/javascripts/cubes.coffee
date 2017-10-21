# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('#selection-card input').forEach(function (currentFormElement) {
    currentFormElement.addEventListener("change", function () {
      inputs = document.querySelectorAll("#selection-card input");
      document.querySelector('#card-preview').src = "https://images.pokemontcg.io/" + inputs[0].options[inputs[0].selectedIndex].text + "/" + inputs[1].value + ".png";
    });
  });
});
