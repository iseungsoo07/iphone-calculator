let result = document.querySelector(".js-result");
let reset = document.querySelector(".js-reset");
let numbers = Array.from(document.querySelectorAll(".js-number"));
let firstInput = "",
   secondInput = "";
let isFirst = false;

function handleNumberClick(event) {
   console.log(event.target.innerText);
   result.innerText += event.target.innerText;
}

function handleResetClick() {
   result.innerText = 0;
}

function init() {
   numbers.forEach(function (element) {
      element.addEventListener("click", handleNumberClick);
   });

   reset.addEventListener("click", handleResetClick);
}

init();
