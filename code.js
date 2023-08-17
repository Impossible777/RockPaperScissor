function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice = ""
    if (randomNumber == 1) {
        computerChoice = "Rock"
    }
    else if (randomNumber == 2) {
        computerChoice = "Paper"
    }
    else {
        computerChoice = "Scissor"
    }
    
    
    return computerChoice



}


