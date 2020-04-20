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
            document.getElementById("roundMsg").textContent = "You Lose! Scissors beats paper. " + "computers score is " + (computerScore+=1);
    } else if (lowerCase =='paper' && computerSelection == 'Rock'){
        document.getElementById("roundMsg").textContent = "You Win! Paper beats Rock! " + "players score is " + (playerScore+=1);
    } else if (lowerCase == 'paper' && computerSelection == 'Paper') {
        document.getElementById("roundMsg").textContent = "It is a Tie! Paper is equal.";
    }   else if (lowerCase == 'rock' && computerSelection == 'Paper'){
        document.getElementById("roundMsg").textContent = "You Lose! Paper beats Rock. " + "computers score is " + (computerScore+=1) ;
    } else if (lowerCase =='rock' && computerSelection == 'Scissors'){
        document.getElementById("roundMsg").textContent = "You Win! Rock beats Scissors! " + "players score is " +  (playerScore+=1);        
    } else if (lowerCase == 'rock' && computerSelection == 'Rock') {
        document.getElementById("roundMsg").textContent = "It is a Tie! Rocks are equal.";
    } else if (lowerCase == 'scissors' && computerSelection == 'Rock'){
        document.getElementById("roundMsg").textContent = "You Lose! Rock beats Scissors. " + "computers score is " + (computerScore+=1);
    } else if (lowerCase =='scissors' && computerSelection == 'Paper'){
        document.getElementById("roundMsg").textContent = "You Win! Scissors beats Paper! " + "players score is " + (playerScore+=1);
    } else if (lowerCase == 'scissors' && computerSelection == 'Scissors') {
        document.getElementById("roundMsg").textContent = "It is a Tie! Scissors are equal.";
    } else if ((lowerCase !== 'scissors' || lowerCase !== 'rock' || lowerCase !== 'paper')){
        document.getElementById("roundMsg").textContent = "Invalid selection, please try again."
    }
};

function game(){
    let result = prompt('Rock, Paper, or Scissors? First to five wins!');
    console.log(oneRound(result));
    document.getElementById("p1Button").innerHTML = playerScore;
    document.getElementById("cpuButton").innerHTML = computerScore;
    if (playerScore > computerScore){
        document.getElementById("resultMsg").textContent = "You are Winning! " + playerScore + ' to ' + computerScore;
   } else if (playerScore < computerScore){
        document.getElementById("resultMsg").textContent = "The computer is Winning! " + computerScore + ' to ' + playerScore;
   } else if (playerScore === computerScore){
        document.getElementById("resultMsg").textContent = "You are currently tied for the lead " + playerScore + ' to ' + computerScore;
   }
   if (playerScore === 5){
    document.getElementById("resultMsg").textContent = "YOU WON! Please refresh to play again."
   } else if (computerScore === 5){
    document.getElementById("resultMsg").textContent = "YOU LOSE! Please refresh to play again."
   }
};

/*
document.getElementById("resultMsg").innerHTML = 


document.getElementById("roundMsg").textContent =*/