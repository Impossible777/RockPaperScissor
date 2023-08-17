function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = ""
    if (randomNumber == 1) {
        computerChoice = "rock"
    }
    else if (randomNumber == 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissor"
    }
    
    
    return computerChoice



}

let playerWin = 0;
let computerWin = 0;

function playRound(playerCaseSensitive, computerSelection) {
    
    if (playerCaseSensitive == "rock" && computerSelection =="paper") {
        computerWin += 1;
        return "You lose! Paper beats rock!"
    }
    else if (playerCaseSensitive == "rock" && computerSelection =="scissor") {
        playerWin +=1
        return "You win! Rock beats scissor!"
    }
    else if (playerCaseSensitive =="rock" && computerSelection =="rock") {
        return "It is a tie!"
    }
    else if (playerCaseSensitive == "paper" && computerSelection == "rock") {
        playerWin +=1
        return "You win! Paper beats rock!"
    }
    else if (playerCaseSensitive =="paper" && computerSelection =="scissor") {
        computerWin +=1
        return "You lose! Scissor beats paper!"
    }
    else if (playerCaseSensitive =="paper" && computerSelection =="paper") {
        return "It's a tie!"
    }
    else if (playerCaseSensitive=="scissor" && computerSelection=="rock") {
        computerWin +=1
        return "You lose! Rock beats scissor!"
    }
    else if (playerCaseSensitive=="scissor" && computerSelection=="paper") {
        playerWin +=1
        return "You win! Scissor beats paper!"
    }
    else if (playerCaseSensitive=="scissor" && computerSelection=="scissor") {
        return "It's a tie!"
    }
    

    
}

function game() {

    for (let i =1; i <=5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissor?")
        let playerCaseSensitive = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerCaseSensitive, computerSelection))
    }
    if (playerWin > computerWin) {
        console.log("You win!")
    }
    else if (computerWin > playerWin) {
        console.log("You lost!")
    }
    else {
        console.log("It's a tie!")
    }

}

game();




