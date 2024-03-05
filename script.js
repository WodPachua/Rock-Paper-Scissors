const rockButton = document.querySelector(".Rock");
const paperButton = document.querySelector(".Paper");
const scissorsButton = document.querySelector(".Scissors");
const winnerText = document.querySelector(".rounds-winner");
const logsText = document.querySelector(".rounds-logs");

let roundCount = 0;
let playerWins = 0;
let compWins = 0;
let ties = 0;

rockButton.addEventListener("click", playOneRound);
paperButton.addEventListener("click", playOneRound);
scissorsButton.addEventListener("click", playOneRound);

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function playOneRound(event) {
  if (roundCount >= 5) {
    return;
  }

  const playerChoice = event.target.getAttribute("class");
  const compChoice = getComputerChoice();

  winnerText.innerHTML = `<h2 class="logs">Round: ${roundCount + 1}</h2>`;
  roundCount++;
  logsText.innerHTML = "Computer Shows: " + compChoice;

  if (
    (playerChoice.toLowerCase() == "rock" &&
      compChoice.toLowerCase() == "scissors") ||
    (playerChoice.toLowerCase() == "paper" &&
      compChoice.toLowerCase() == "rock") ||
    (playerChoice.toLowerCase() == "scissors" &&
      compChoice.toLowerCase() == "paper")
  ) {
    logsText.innerHTML += `<h3 class="logs">👏🏼 So you Win! Ta-daa! ${playerChoice} beats ${compChoice} 👏🏼<h3/>`;
    playerWins++;
  } else if (playerChoice.toLowerCase() == compChoice.toLowerCase()) {
    logsText.innerHTML += `<h3 class="logs">😊 What a Tie! Its ${playerChoice} and ${compChoice} 😊</h3>`;
    return "Tie";
  } else {
    logsText.innerHTML += `<h3 class="logs">🤪 So you Loose! Oops! ${compChoice} beats ${playerChoice} 🤪</h3>`;
    compWins++;
  }

  if (roundCount == 5) {
    logsText.innerHTML = `<h3>Here is your Overall game Summary ℹ️</h3><p>Total Rounds: ${roundCount} </p><p>Your Wins: ${playerWins} </p><p>Computer Wins: ${compWins} </p>`;

    if (playerWins == compWins) {
      logsText.innerHTML += `<h3 class="logs">Chei!!! 🤞 NO overall winner, you tied with ${playerWins} / ${compWins}</h3>`;
    } else if (playerWins > compWins) {
      logsText.innerHTML += `<h3 class="logs">🎊🎉You are overall winner with ${playerWins} / ${compWins} 💪🏻💪🏻</h3>`;
    } else {
      logsText.innerHTML += `<h3 class="logs">🖥 Computer is the OverAll winner with ${compWins} / ${playerWins} 😑</h3>`;
    }
  }
}
