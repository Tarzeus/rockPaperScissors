let selectMove = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * selectMove.length);
    let randomIndexText = selectMove[randomIndex];
    return randomIndexText;
};

function oneRound(playerSelection, computerSelection){
    let lowerCase = playerSelection.toLowerCase();
    var computerSelection = computerPlay();
           if (lowerCase == 'paper' && computerSelection == 'Scissors'){
        return "You lose! Scissors beats paper.";
    } else if (lowerCase =='paper' && computerSelection == 'Rock'){
        return "You Win! Paper beats Rock!";
    } else if (lowerCase == 'paper' && computerSelection == 'Paper') {
        return "It is a tie!";
    }   else if (lowerCase == 'rock' && computerSelection == 'Paper'){
        return "You lose! Paper beats Rock.";
    } else if (lowerCase =='rock' && computerSelection == 'Scissors'){
        return "You Win! Rock beats Scissors!";        
    } else if (lowerCase == 'rock' && computerSelection == 'Rock') {
        return "It is a tie!";
    } else if (lowerCase == 'scissors' && computerSelection == 'Rock'){
        return "You lose! Rock beats Scissors.";
    } else if (lowerCase =='scissors' && computerSelection == 'Paper'){
        return "You Win! Scissors beats Paper!";
    } else if (lowerCase == 'scissors' && computerSelection == 'Scissors') {
        return "It is a tie!";
    }
};

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let match = oneRound();

}
console.log(oneRound('rock'));