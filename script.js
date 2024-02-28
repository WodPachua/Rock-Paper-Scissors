function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

const compChoice = getComputerChoice();
console.log('Computer Choice is:' + compChoice);
const playerChoice = prompt('"Rock", "Paper" or "Scissors"? Enter your choice');

function playOneRound(playerChoice, compChoice) {
  if (playerChoice == compChoice) {
    console.log(`Ta-da! You Win! ${playerChoice} beats ${compChoice}`);
  } else {
    console.log(`Oops! You Loose! ${compChoice} beats ${playerChoice}`);
  }
};

console.log(playOneRound(playerChoice, compChoice));
