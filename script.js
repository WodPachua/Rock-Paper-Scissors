function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

const compChoice = getComputerChoice();
console.log("Computer Choice is:" + compChoice);
const playerChoice = prompt('"Rock", "Paper" or "Scissors"? Enter your choice');

var compWins = 0;
var playerWins = 0;
var roundCount = 0;

function playOneRound(playerChoice, compChoice) {
  roundCount++;

  if (
    (playerChoice.toLowerCase() == "rock" &&
      compChoice.toLowerCase() == "scissors") ||
    (playerChoice.toLowerCase() == "paper" &&
      compChoice.toLowerCase() == "rock") ||
    (playerChoice.toLowerCase() == "scissors" &&
      compChoice.toLowerCase() == "paper")
  ) {
    playerWins++;
    console.log(`Ta-daa! Its a Win! ${playerChoice} beats ${compChoice}`);
    return "Win";
  } else if (playerChoice.toLowerCase() == compChoice.toLowerCase()) {
    console.log(`What a Tie! Its ${playerChoice} and ${compChoice}`);
    return "Tie";
  } else {
    compWins++;
    console.log(`Oops! You Loose! ${compChoice} beats ${playerChoice}`);
    return "Lose";
  }
};


function playGame() {
  let roundCount = 0
  for (roundCount ; roundCount < 5; roundCount++) {}

};

console.log(playOneRound(playerChoice, compChoice));
console.log(`Your Wins: ${playerWins} \nComputer Wins: ${compWins} \nRounds: ${roundCount}`);
