function computerPlay() {
    let x = (Math.random() * (2 - 0) + 0).toFixed();
    if (x == 0) return "rock";
    if (x == 1) return "paper";
    if (x == 2) return "scissors";
}



function playerPlay() {
    let playerChoice = prompt("Pick one : Rock ? Paper ? Scissors ?");
    return playerChoice.toLowerCase();

}

let computerScore = 0;
let playerScore = 0;

function playRound(computerSelection, playerSelection) {

    if (computerSelection == "paper" && playerSelection == "rock" ||
        computerSelection == "rock" && playerSelection == "scissors" ||
        computerSelection == "scissors" && playerSelection == "paper") {
        alert(`Computer won this one with ${computerSelection}. Try Again!`);
        computerScore++;
        return;
    } else if (computerSelection == playerSelection) {
        alert("Round ends with a DRAW!");
        return;
    } else if (playerSelection == "") {
        alert("You forgot to pick something, sorry but we have to start again!")
        return game();
    } else if (computerSelection == "rock" && playerSelection == "paper" ||
        computerSelection == "scissors" && playerSelection == "rock" ||
        computerSelection == "paper" && playerSelection == "scissors") {
        alert(`You won this one with ${playerSelection} against ${computerSelection}. Congratulations!`)
        playerScore++;
        return;
    }
    alert("Typo? Try again!");
    game();
}

function game() {
    for (i = 0; i < 5; i++) {
        playRound(computerPlay(), playerPlay());
    }
    if (computerScore > playerScore) {
        console.log("Computer Won :(:(:(");
        return;

    } else if (computerScore == playerScore) {
        console.log("Game ends with a DRAW!");
        return;
    } else console.log("Congratulations You Won!");
}



console.log(game());