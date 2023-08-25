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
    } else {
        return ("Invalid value, enter another value.")
    } 

}



function game() {

    let yourScore = 0;
    let computerScore = 0;
    const winningScore = 5;

    const buttons = document.querySelectorAll("button");
    const resultDiv = document.querySelector("#result");
        
        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const playerSelection = button.id;
                const computerSelection = getComputerChoice();

                const roundResult = playRound(playerSelection, computerSelection); 

                if (roundResult === "You Won!") {
                    yourScore += 1;
                } else if (roundResult === "You Lost!") {
                    computerScore += 1;
                }

                resultDiv.innerHTML =   `Your Choice: ${playerSelection}
                                        <br>Computer's Choice: ${computerSelection}
                                        <br>Round Result: ${roundResult}
                                        <br>Current Score: ${yourScore} X ${computerScore}`;

                if (yourScore === winningScore){
                    endGame("You won this game!", yourScore, computerScore);
                } else if (computerScore === winningScore){
                    endGame("You lost this game!", yourScore, computerScore);
                }
            });
        });

}



function endGame(message, y, c) {
    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML =   `${message}
                            <br>Score: ${y} X ${c}`;

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.removeEventListener("click", playRound);
        button.style.display = "none";
    });
}

game();



