let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    if (Math.random() < 0.34) {
        return "rock";
    }
    else if (Math.random() < 0.67) {
        return "paper";
    }
    else if (Math.random() < 1){
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Please enter rock, paper, or scissors.");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You win! Rock beats scissors.";
    }
    else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "You lose! Paper beats beats.";
    }
    else if (humanChoice == "rock" && computerChoice == "rock") {
        return "It's a tie. Rock ties with rock.";
    }
    if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return "You win! Paper beats rock.";
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper.";
    }
    else if (humanChoice == "paper" && computerChoice == "paper") {
        return "It's a tie. Paper ties with paper.";
    }   

    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You win! Scissors beats paper.";
    }   
    else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return "You lose! Rock beats scissors.";
    }
    else if (humanChoice == "scissors" && computerChoice == "scissors") {
        return "It's a tie. Scissors ties with scissors.";
    }   
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}
