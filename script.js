const choices = document.querySelectorAll('.choice');
const message = document.getElementById('message');
const score = document.getElementById('score');
let playerScore = 0;
let computerScore = 0;

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showResult(winner, playerChoice, computerChoice);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function showResult(winner, playerChoice, computerChoice) {
    if (winner === 'player') {
        playerScore++;
        message.textContent = `Yes! Winner! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 'computer') {
        computerScore++;
        message.textContent = `Oh No! You lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        message.textContent = `It's a draw! You both have ${playerChoice}`;
    }
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
