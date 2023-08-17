function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return ("Draw")
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return ("You Lost!")
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return ("You Won!")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return ("You Won!")
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return ("You Lost!")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return ("You Won!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return ("You Lost!")
    }
  }
   
const playerSelection = prompt("Enter a value: ");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

console.log("Your Choice: " + playerSelection + "\n" + "Computer's Choice: " + computerSelection);


