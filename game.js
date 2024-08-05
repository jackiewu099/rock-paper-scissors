let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return "rock";
    } else if (randomValue < 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput;
    do {
        userInput = prompt("Please enter rock, paper, or scissors.").toLowerCase();
    } while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        return `It's a tie. Both chose ${humanChoice}.`;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function checkScores() {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            alert("You Win the Game!");
        } else {
            alert("Computer Wins the Game!");
        }
        humanScore = 0;
        computerScore = 0;
    }
}