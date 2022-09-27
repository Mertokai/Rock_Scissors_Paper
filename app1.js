// ID section
const yourChoiceDisplay = document.getElementById("your-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
var Button = document.querySelectorAll("button");
let result;
let computerChoice;
let lastResult;

// DISPLAY SECTION
Button.forEach((Button) =>
  Button.addEventListener("click", (e) => {
    result = e.target.id;
    yourChoiceDisplay.innerHTML = result;
    generateComputerChoice();
    getResult();
  })
);

//Computer Choice Section
function generateComputerChoice() {
  const randomChoice = Math.floor(Math.random() * Button.length) + 1; // You can use 3 instead of Button.length
  if (randomChoice === 1) {
    computerChoice = "rock";
  }
  if (randomChoice === 2) {
    computerChoice = "scissors";
  }
  if (randomChoice === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// Logical Side

function getResult() {
  if (computerChoice === result) {
    lastResult = "draw";
  }
  if (computerChoice === "paper" && result === "rock") {
    lastResult = "You Lost";
  }
  if (computerChoice === "rock" && result === "scissors") {
    lastResult = "You Lost";
  }
  if (computerChoice === "scissors" && result === "paper") {
    lastResult = "You Lost";
  }
  if (result === "paper" && computerChoice === "rock") {
    lastResult = "You won";
  }
  if (result === "rock" && computerChoice === "scissors") {
    lastResult = "You won";
  }
  if (result === "scissors" && computerChoice === "paper") {
    lastResult = "You won";
  }
  resultDisplay.innerHTML = lastResult;
}
