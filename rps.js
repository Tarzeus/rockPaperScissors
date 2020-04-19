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
        return "You Lose! Scissors beats paper. " + "computers score is " + (computerScore+=1);
    } else if (lowerCase =='paper' && computerSelection == 'Rock'){
        return "You Win! Paper beats Rock! " + "players score is " + (playerScore+=1);
    } else if (lowerCase == 'paper' && computerSelection == 'Paper') {
        return "It is a Tie! Paper is equal.";
    }   else if (lowerCase == 'rock' && computerSelection == 'Paper'){
        return "You Lose! Paper beats Rock. " + "computers score is " + (computerScore+=1) ;
    } else if (lowerCase =='rock' && computerSelection == 'Scissors'){
        return "You Win! Rock beats Scissors! " + "players score is " +  (playerScore+=1);        
    } else if (lowerCase == 'rock' && computerSelection == 'Rock') {
        return "It is a Tie! Rocks are equal.";
    } else if (lowerCase == 'scissors' && computerSelection == 'Rock'){
        return "You Lose! Rock beats Scissors. " + "computers score is " + (computerScore+=1);
    } else if (lowerCase =='scissors' && computerSelection == 'Paper'){
        return "You Win! Scissors beats Paper! " + "players score is " + (playerScore+=1);
    } else if (lowerCase == 'scissors' && computerSelection == 'Scissors') {
        return "It is a Tie! Scissors are equal.";
    } else if ((lowerCase !== 'scissors' || lowerCase !== 'rock' || lowerCase !== 'paper')){
        return "Invalid selection, please try again."
    }
};

function game(){
    let result = prompt('msg');
    console.log(oneRound(result));
    if (playerScore > computerScore){
        return "You are Winning! " + playerScore + ' to ' + computerScore;
   } else if (playerScore < computerScore){
       return "The computer is Winning! " + computerScore + ' to ' + playerScore;
   } else if (playerScore === computerScore){
       return "You are currently tied for the lead " + playerScore + ' to ' + computerScore;
   }
};
