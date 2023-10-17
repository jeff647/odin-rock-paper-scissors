const choice = ["Rock", "Paper", "Scissors"]

// Rock 1 paper 2 scissors 3 % 2


function getRandomInt(max) {
    // Returns a random integer of 0 up to but not including max.
    return Math.floor(Math.random() * max);
}

function capitalizeFirst(string) {
    // Lowercase the string then replace first character with uppercase.
    let lowerString = string.toLowerCase();
    return lowerString.replace(lowerString.charAt(0), lowerString.charAt(0).toUpperCase());
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
    else if (((capitalizedPlayerSelection == "Rock") && (computerSelection == "Scissors")) || ((capitalizedPlayerSelection == "Paper") && (computerSelection == "Rock")) || (capitalizedPlayerSelection == "Scissors") && (computerSelection == "Paper")) {
        return [1, `Win! ${stringOutput}`];
    }

    // Lose condition
    else {
        return [-1, `Lose! ${stringOutput}`];
    }
}

function game() {
    // Keep score.
    let wins = losses = ties = 0;

    // Play 5 round  of playRound games while keeping score and report winner or loser at the end.
    for (let round = 0; round < 5; round++) {
        console.log(`Wins: ${wins} Ties: ${ties} Losses: ${losses}`)
        // Prompt user for selection. Not checking for valid input.
        let userInput = prompt('Enter "Rock", "Paper", or "Scissors".');
        let computerChoice = getComputerChoice();
        let roundResult = playRound(userInput, computerChoice)
        // Round Tie
        if (roundResult[0] == 0) {
            ties++;
        }
        // Round Win
        else if (roundResult[0] == 1) {
            wins++;
        }
        // Round Loss
        else {
            losses++;
        }
        console.log(`Round ${round + 1} results: ${roundResult[1]}`);
    }
    console.log(`Wins: ${wins} Ties: ${ties} Losses: ${losses}`)
    // End result tie
    if (wins == losses) {
        return `Game ended in a tie!`
    }
    else if (wins > losses) {
        return `Game ended in a win!`
    }
    else {
        return `Game ended in a loss!`
    }
}

// const playerChoice = "scissors";
// const computerChoice = getComputerChoice();
// console.log(playRound(playerChoice, computerChoice)[1]);

console.log(game())
