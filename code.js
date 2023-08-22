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
let count = 0;

function playRound(playerCaseSensitive, computerSelection) {
    
    if (playerCaseSensitive == "rock" && computerSelection =="paper") {
        computerWin += 1;
        
    }
    else if (playerCaseSensitive == "rock" && computerSelection =="scissor") {
        playerWin +=1
        
    }
    else if (playerCaseSensitive == "paper" && computerSelection == "rock") {
        playerWin +=1
        
    }
    else if (playerCaseSensitive =="paper" && computerSelection =="scissor") {
        computerWin +=1
        
    }
    else if (playerCaseSensitive=="scissor" && computerSelection=="rock") {
        computerWin +=1
        
    }
    else if (playerCaseSensitive=="scissor" && computerSelection=="paper") {
        playerWin +=1
        
    }
    

    
}

function game(input) {
    let computerSelection = getComputerChoice();
    console.log(playRound(input, computerSelection))
    
    if(count ===0) {
        const element = document.getElementById("scores")
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
        count = 0;
    }
    const scores = document.querySelector('#scores')
    const para = document.createElement('p')
    para.classList.add('content')
    para.textContent = 'Player Score: ' + playerWin + '\n' + 'Computer Score: ' + computerWin
    scores.appendChild(para);
    if (playerWin === 5) {
        const h1 = document.createElement('h1');
        h1.textContent = "YOU WIN"
        scores.appendChild(h1);
        playerWin = 0;
        computerWin =0;
 
    }
    else if (computerWin === 5) {
        const h1 = document.createElement('h1')
        h1.textContent = "You lost."
        scores.appendChild(h1);
        playerWin =0;
        computerWin =0;



    }
}

const rockButton = document.getElementById("Rock")
const paperButton = document.getElementById("Paper")
const scissorButton = document.getElementById("Scissor")




rockButton.addEventListener("click", () => {
    game("rock");
});
paperButton.addEventListener("click", () => {
    game("paper");
});
scissorButton.addEventListener("click", () => {
    game("scissor");
});








