// 1. Get the users choices
// 2. Get the computers choice
// 3. Compare choices determine winner
// 4. Start program display results

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("Error: Invalid input");
  }
}

function getComputerChoice() {
  const comChoice = Math.floor(Math.random() * 3);
  if (comChoice === 0) {
    return "rock";
  } else if (comChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  }
  if (userChoice === "rock")
    if (computerChoice === "paper") {
      return "COMPUTER WINS";
    } else {
      return "USER WINS";
    }
  if (userChoice === "paper")
    if (computerChoice === "scissors") {
      return "COMPUTER WINS";
    } else if (computerChoice === "rock") {
      return "USER WINS";
    }
  if (userChoice === "scissors")
    if (computerChoice === "rock") {
      return "COMPUTER WINS";
    } else if (computerChoice === "paper") {
      return "USER WINS";
    }
  if (userChoice === "bomb") {
    return "USER WINS";
  }
}

function playGame() {
  const userChoice = getUserChoice("bomb");
  const computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
