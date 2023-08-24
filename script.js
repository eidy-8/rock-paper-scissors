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

    var yourScore = 0;
    var computerScore = 0;

        const buttons = document.querySelectorAll('button');
        const resultDiv = document.querySelector('#result');

        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const playerSelection = button.id;
                const computerSelection = getComputerChoice();

                playRound(playerSelection, computerSelection);
            });
        });

        console.log(playRound(playerSelection, computerSelection));
        console.log("Your Choice: " + playerSelection + "\n" + "Computer's Choice: " + computerSelection);
        if (playRound(playerSelection, computerSelection) == "You Won!") {
            yourScore += 1;
        } else if (playRound(playerSelection, computerSelection) == "You Lost!") {
            computerScore += 1;
        }
        console.log(yourScore, " X ",computerScore);

}

game();



