const choice = ["Rock", "Paper", "Scissors"];
let wins = (losses = ties = 0);

function getRandomInt(max) {
  // Returns a random integer of 0 up to but not including max. Using to randomize index for choice array.
  return Math.floor(Math.random() * max);
}

function capitalizeFirst(string) {
  // Lowercase the string then replace first character with uppercase.
  let lowerString = string.toLowerCase();
  return lowerString.replace(
    lowerString.charAt(0),
    lowerString.charAt(0).toUpperCase()
  );
}

function getComputerChoice() {
  return choice[getRandomInt(3)];
}

function playRound(playerSelection, computerSelection) {
  let capitalizedPlayerSelection = capitalizeFirst(playerSelection);
  let stringOutput = `Player chose: ${capitalizedPlayerSelection} and Computer chose: ${computerSelection}.`;
  // Tie condition
  if (capitalizedPlayerSelection == computerSelection) {
    return [0, `Tie! ${stringOutput}`];
  }
  // Win conditions
  else if (
    (capitalizedPlayerSelection == "Rock" && computerSelection == "Scissors") ||
    (capitalizedPlayerSelection == "Paper" && computerSelection == "Rock") ||
    (capitalizedPlayerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    return [1, `Win! ${stringOutput}`];
  }
  // Lose condition
  else {
    return [-1, `Lose! ${stringOutput}`];
  }
}

const bodyNode = document.body;

function game(result) {
  // Update global variables wins, losses, and ties based on the return index [0] value of function playRound (1,-1,0) respectively.
  const scoreDiv = document.querySelector("#score-tracker");
  const resultHeading = document.querySelector("#result-heading");
  // Reset result text and effects.
  resultHeading.textContent = "";
  bodyNode.style.backgroundColor = "transparent";
  // Round Tie
  if (result == 0) {
    ties++;
  }
  // Round Win
  else if (result == 1) {
    wins++;
  }
  // Round Loss
  else {
    losses++;
  }
  scoreDiv.textContent = `Wins: ${wins} Ties: ${ties} Losses: ${losses}`;

  // End Game Result
  if (wins == 5) {
    resultHeading.textContent = "Player Wins!";
    wins = losses = ties = 0;
    bodyNode.style.backgroundColor = "green";
  } else if (losses == 5) {
    resultHeading.textContent = "Player Lose!";
    wins = losses = ties = 0;
    bodyNode.style.backgroundColor = "red";
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let roundResult = playRound(button.value, getComputerChoice());
    roundResultDiv.textContent = roundResult[1];
    game(roundResult[0]);
  });
});

const roundResultDiv = document.querySelector("#round-result");
