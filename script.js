const colorBox = document.getElementById("colorBox");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const chosenColor = button.getAttribute("data-color");
    colorBox.style.backgroundColor = chosenColor;
  });
});