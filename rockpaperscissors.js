//POSSIBLE OUTCOMES
//Rock destroys scissors
//Scissors cuts paper
//Paper covers rock
//IF tie Game ends in Draw

function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error: Wrong Input Entered");
  }
}

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) {
    return "rock";
  } else if (randomChoice === 1) {
    return "paper";
  } else if (randomChoice === 2) {
    return "scissors";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie Game";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer Wins";
    } else if (computerChoice === "scissors") {
      return "User Wins";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer Wins";
    } else if (computerChoice === "rock") {
      return "User Wins";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer Wins";
    } else if (computerChoice === "paper") {
      return "User Wins";
    }
  }
}

function playGame() {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log(userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
