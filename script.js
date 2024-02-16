let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(playerSelection) {
  const computerSelection = computerPlay();
  let result = '';

  if (playerSelection === computerSelection) {
    result = "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result = 'You win!';
    playerScore++;
  } else {
    result = 'You lose!';
    computerScore++;
  }

  roundsPlayed++;

  document.getElementById('result').innerText = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;

  if (roundsPlayed === 5) {
    declareWinner();
  }
}

function declareWinner() {
  if (playerScore > computerScore) {
    document.getElementById('result').innerText = "You've won the game!";
  } else if (playerScore < computerScore) {
    document.getElementById('result').innerText = "Computer has won the game!";
  } else {
    document.getElementById('result').innerText = "It's a tie!";
  }
  // Reset scores and rounds played for a new game
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
}
