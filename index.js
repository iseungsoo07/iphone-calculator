const result = document.querySelector(".js-result");
const reset = document.querySelector(".js-reset");
const equals = document.querySelector(".js-equals");
const dot = document.querySelector(".js-dot");
const plusMinusBtn = document.querySelector(".js-plusMinus");
const operators = Array.from(document.querySelectorAll(".js-operators"));
const numbers = Array.from(document.querySelectorAll(".js-number"));
let firstInput = "",
   secondInput = "",
   initializeInput = "";

let firstClick = true;
let clickedOperator = "";
let positive = true;

let isFirst = true;
let answer = 0;

function checkIsFirst() {
   if (isFirst) {
      result.value = initializeInput;
      isFirst = false;
   }
}

function handleNumberClick(event) {
   let clickedNumber = event.target.innerText;
   checkIsFirst();

   if (clickedOperator === "") {
      result.value += clickedNumber;
      firstInput = result.value;
      console.log(firstInput);
   } else {
      checkIsFirst();
      result.value += clickedNumber;
      secondInput = result.value;
      console.log(secondInput);
   }
}

function handleOperatorClick(event) {
   isFirst = true;
   console.log(clickedOperator);
   if (clickedOperator === "") {
      clickedOperator = event.target.innerText;
   } else {
   }
}

function handleEqaualClick() {
   switch (clickedOperator) {
      case "+":
         answer = Number(firstInput) + Number(secondInput);
         result.value = answer;
         firstInput = answer;
         break;
      case "-":
         answer = Number(firstInput) - Number(secondInput);
         result.value = answer;
         firstInput = answer;
         break;
      case "x":
         answer = Number(firstInput) * Number(secondInput);
         result.value = answer;
         firstInput = answer;
         break;
      case "÷":
         answer = Number(firstInput) / Number(secondInput);
         result.value = answer;
         firstInput = answer;
         break;
      default:
         return;
   }
}

function handlePlusMinusClick() {
   if (positive) {
      result.value = `-${result.value}`;

      positive = false;
   } else {
      result.value = `${Math.abs(Number(result.value))}`;

      positive = true;
   }
}

function handleDotClick() {
   if (isFirst === true) {
      result.value = `0.`;
      isFirst = false;
   } else {
      result.value = `${result.value}.`;
   }
}

function handleResetClick() {
   result.value = 0;
   isFirst = true;
   firstClick = true;
   positive = true;
   firstInput = "";
   secondInput = "";
   clickedOperator = "";
   answer = 0;
}

function init() {
   numbers.forEach(function (element) {
      element.addEventListener("click", handleNumberClick);
   });

   operators.forEach(function (element) {
      element.addEventListener("click", handleOperatorClick);
   });

   equals.addEventListener("click", handleEqaualClick);
   plusMinusBtn.addEventListener("click", handlePlusMinusClick);
   reset.addEventListener("click", handleResetClick);
   dot.addEventListener("click", handleDotClick);
}

init();
