const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw!";
  } else if (computer == "ROCK") {
    return player == "PAPER" ? "You Win!" : "You Lose!";
  } else if (computer == "PAPER") {
    return player == "SCISSORS" ? "You Win!" : "You Lose!";
  } else if (computer == "SCISSORS") {
    return player == "ROCK" ? "You Win!" : "You Lose!";
  }
}

// const getPlayerSelection = (playerInput) => {
//   playerInput = playerInput.toLowerCase();
//   if (
//     playerInput === "rock" ||
//     playerInput === "scissors" ||
//     playerInput === "paper"
//   ) {
//     return playerInput;
//   } else {
//     return "Error, please type: rock, paper, or scissors.";
//   }
// };

// const getComputerSelection = () => {
//   const randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return "rock";
//     case 1:
//       return "paper";
//     case 2:
//       return "scissors";
//   }
// };

// const playRound = (playerSelection, computerSelection) => {
//   if (playerSelection === computerSelection) {
//     return "This game is a tie!";
//   } else if (
//     (playerSelection === "rock" && computerSelection === "paper") ||
//     (playerSelection === "scissors" && computerSelection === "rock") ||
//     (playerSelection === "paper" && computerSelection === "scissors")
//   ) {
//     return "You lose, computer won!";
//   } else {
//     return "Congratulations, you won!";
//   }
// };

// const game = () => {
//   const playerSelection = getPlayerSelection("rock");
//   const computerSelection = getComputerSelection();
//   console.log(`You choose ${playerSelection}`);
//   console.log(`The computer choose ${computerSelection}`);

//   console.log(playRound(playerSelection, computerSelection));
// };

// game();

// const computerChoiceDisplay = document.getElementById("computer-choice");
// const userChoiceDisplay = document.getElementById("user-choice");
// const resultDisplay = document.getElementById("result");
// const possibleChoices = document.querySelectorAll("button");
// let userChoice;
// let computerChoice;
// let result;

// possibleChoices.forEach((possibleChoice) =>
//   possibleChoice.addEventListener("click", (e) => {
//     userChoice = e.target.id;
//     userChoiceDisplay.innerHTML = userChoice;
//     generateComputerChoice();
//     getResult();
//   })
// );

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length

//   if (randomNumber === 1) {
//     computerChoice = "rock";
//   }
//   if (randomNumber === 2) {
//     computerChoice = "scissors";
//   }
//   if (randomNumber === 3) {
//     computerChoice = "paper";
//   }
//   computerChoiceDisplay.innerHTML = computerChoice;
// }

// function getResult() {
//   if (computerChoice === userChoice) {
//     result = "its a draw!";
//   }
//   if (computerChoice === "rock" && userChoice === "paper") {
//     result = "you win!";
//   }
//   if (computerChoice === "rock" && userChoice === "scissors") {
//     result = "you lost!";
//   }
//   if (computerChoice === "paper" && userChoice === "scissors") {
//     result = "you win!";
//   }
//   if (computerChoice === "paper" && userChoice === "rock") {
//     result = "you lose!";
//   }
//   if (computerChoice === "scissors" && userChoice === "rock") {
//     result = "you win!";
//   }
//   if (computerChoice === "scissors" && userChoice === "paper") {
//     result = "you lose!";
//   }
//   resultDisplay.innerHTML = result;
// }
