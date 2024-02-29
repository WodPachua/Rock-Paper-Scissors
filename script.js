function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

const compChoice = getComputerChoice();

function playOneRound(playerChoice, compChoice) {
  console.log("Computer Choice is:" + compChoice);

  if (
    (playerChoice.toLowerCase() == "rock" &&
      compChoice.toLowerCase() == "scissors") ||
    (playerChoice.toLowerCase() == "paper" &&
      compChoice.toLowerCase() == "rock") ||
    (playerChoice.toLowerCase() == "scissors" &&
      compChoice.toLowerCase() == "paper")
  ) {
    console.log(`Ta-daa! Its a Win! ${playerChoice} beats ${compChoice}`);
    return "Win";
  } else if (playerChoice.toLowerCase() == compChoice.toLowerCase()) {
    console.log(`What a Tie! Its ${playerChoice} and ${compChoice}`);
    return "Tie";
  } else {
    console.log(`Oops! You Loose! ${compChoice} beats ${playerChoice}`);
    return "Lose";
  }
}

function playGame() {
  let roundCount = 1;
  let playerWins = 0;
  let compWins = 0;

  for (roundCount; roundCount <= 5; ++roundCount) {
    console.log(`Current Round: ${roundCount}`);

    const playerChoice = prompt(
      '"Rock", "Paper" or "Scissors"? Enter your choice'
    );

    let winner = playOneRound(playerChoice, compChoice);

    if (winner == "Win") {
      playerWins++;
    } else if (winner == "Lose") {
      compWins++;
    }
  }

  console.log(
    `Here is your Overall game Summary \nTotal Rounds: ${
      roundCount - 1
    } \nYour Wins: ${playerWins} \nComputer Wins: ${compWins} \n`
  );

  if (playerWins == compWins) {
    console.log(
      `Chei!!! NO overall winner, you tied with ${playerWins} / ${compWins}`
    );
  } else if (playerWins > compWins) {
    console.log(`You are overall winner with ${playerWins} / ${compWins}`);
  } else {
    console.log(
      `Computer is the OverAll winner with ${compWins} / ${playerWins}`
    );
  }
}

console.log(playGame());
