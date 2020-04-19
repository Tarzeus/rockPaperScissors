let selectMove = ['Rock', 'Paper', 'Scissors'];

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * selectMove.length);
    let randomIndexText = selectMove[randomIndex];
    return randomIndexText;
};