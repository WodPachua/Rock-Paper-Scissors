function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    randomChoice = Math.floor(Math.random()*3);
    return compChoice = choices[randomChoice];
};

console.log(getComputerChoice());
