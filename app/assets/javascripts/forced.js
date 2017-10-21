document.addEventListener("DOMContentLoaded", function(event) {
  document.querySelectorAll('#selection-card input').forEach(function (currentFormElement) {
    currentFormElement.addEventListener("change", function () {
      input = document.querySelector("#selection-card input[type='number']");
      select = document.querySelector("#selection-card select");
      document.querySelector('#card-preview').src = "https://images.pokemontcg.io/" + select.options[select.selectedIndex].value + "/" + input.value + ".png";
    });
  });
});
