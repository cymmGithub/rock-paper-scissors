//Start the Game
let cScore = 0;
let pScore = 0;

const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playButton.addEventListener('click', () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
    })
}
//Play Match
const hands = document.querySelector('.hands')
const playerHand = document.querySelector('.player-hand');
const compuerHand = document.querySelector('.computer-hand');
const choices = document.querySelectorAll(".choice");
const restartButton = document.querySelector('.restart button')
const match = document.querySelector('.match');
const buttons = document.querySelector('.btns');
const restart = document.querySelector('.restart');
const showWhoWon = document.querySelector('.finalWinner');


function play(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = playRound(computerChoice, playerChoice);

    playerHand.src = `images/${playerChoice}.png`;
    compuerHand.src = `./images/${computerChoice}.png`;
}

// Event listeners

choices.forEach(choice => choice.addEventListener('click', play));

// Restart button

restartButton.addEventListener('click', () => {


    buttons.classList.remove("fadeOut");
    restart.classList.remove("fadeIn");
    showWhoWon.classList.remove("fadeIn");
    hands.classList.remove("fadeOut");
    pScore = 0;
    cScore = 0;
    updateScore();

    playerHand.src = `images/rock.png`;
    compuerHand.src = `./images/rock.png`;





});

// Get computer choice

function getComputerChoice() {
    let x = (Math.random() * (2 - 0) + 0).toFixed();
    if (x == 0) return "rock";
    if (x == 1) return "paper";
    if (x == 2) return "scissors";
}
//Get winner

function playRound(computerChoice, playerChoice) {
    const winner = document.querySelector('.winner');

    if (computerChoice == "paper" && playerChoice == "rock" ||
        computerChoice == "rock" && playerChoice == "scissors" ||
        computerChoice == "scissors" && playerChoice == "paper") {
        winner.textContent = `Computer wins this one with ${computerChoice.toUpperCase()}! :(`;
        cScore++;
        updateScore();
        showWinner();
        return;
    } else if (computerChoice == playerChoice) {
        winner.textContent = `It's a DRAW! ${computerChoice.toUpperCase()} vs ${playerChoice.toUpperCase()}`;
        return;

    } else if (computerChoice == "rock" && playerChoice == "paper" ||
        computerChoice == "scissors" && playerChoice == "rock" ||
        computerChoice == "paper" && playerChoice == "scissors") {
        winner.textContent = `You won! ${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}!`
        pScore++;
        updateScore();
        showWinner();
        return;
    }


}
const updateScore = () => {
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p')
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}
const showWinner = () => {

    if (pScore == 5) {
        showWhoWon.classList.add("fadeIn");
        buttons.classList.add("fadeOut");
        hands.classList.add("fadeOut");
        restart.classList.add("fadeIn");
        showWhoWon.textContent = "You won ! :)"

        return;
    } else if (cScore == 5) {
        showWhoWon.classList.add("fadeIn");
        buttons.classList.add("fadeOut");
        hands.classList.add("fadeOut");
        restart.classList.add("fadeIn");
        showWhoWon.textContent = "You Lose :( Try Again";

        return;
    }
}
startGame();