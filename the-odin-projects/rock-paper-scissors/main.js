const getRandomInteger = function(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
};

const getComputerPlay = function() {
    let randomNumber = getRandomInteger(1,3);
    let play;

    if(randomNumber === 1)
        play = 'rock';
    else if (randomNumber === 2)
        play = 'paper';
    else
        play = 'scissors';
    
    return play;
};

const getRoundResult = function(playerChoice) {
    
    playerChoice = playerChoice.toLowerCase();
    computerChoice = getComputerPlay();
    let result;
    if(playerChoice === computerChoice)
        result = 'draw!';
    else if(playerChoice === 'rock') 
        result = computerChoice === 'paper' ? 'computer wins!' : 'human wins!';
    else if(playerChoice === 'paper') 
        result = computerChoice === 'scissors' ? 'computer wins!' : 'human wins!';
    else if(playerChoice === 'scissors')
        result = computerChoice === 'rock' ? 'computer wins!' : 'human wins!';
    
    return result;
};

const gameRound = function() {

    // Get the choices:
    const playerChoices = document.querySelectorAll('.player-choices a');
    const paper = playerChoices[0];
    const rock = playerChoices[1];
    const scissor = playerChoices[2];
    console.log('choices = ', playerChoices);
    console.log('paper = ', paper);
    console.log('rock = ', rock);
    console.log('scissor = ', scissor);
    
    
    let playerChoice = window.prompt('Write rock, paper or scissors');
    let computerChoice = getComputerPlay();
    
    console.log('Computer plays: ', computerChoice, ' | Human plays: ', playerChoice);
    let result = getRoundResult(playerChoice, computerChoice);
    console.log(result);

    return result.split(' ')[0]; // winner
};

const game = function () {
    
    let computerScore = 0;
    let playerScore = 0;
    console.log('Computer Score: ', computerScore);
    console.log('Human Score: ', playerScore);

    for (let i = 0; i < 5; i++) {
        
        let winner = gameRound();
        if(winner === 'computer') {
            computerScore++;
        }
        else if(winner === 'human') {
            playerScore++;
        }
        
        console.log('Computer Score: ', computerScore);
        console.log('Human Score: ', playerScore);
    } 
    
    if(computerScore === playerScore)
        console.log('It\'s a draw!');
    else if(computerScore > playerScore) 
        console.log('Computer wins! I\'m sorry Dave. I\'m afraid I can\'t do that.');
    else
        console.log('Human wins!');

};

// game();

//get the player choices
const playerChoiceLinks = document.querySelectorAll('.player-choices a');
const paper = playerChoiceLinks[0];
const rock = playerChoiceLinks[1];
const scissor = playerChoiceLinks[2];

let playerChoice, computerChoice;

paper.addEventListener('click', () => {
    playerChoice = 'paper';
    alert(getRoundResult(playerChoice));
});

rock.addEventListener('click', () => alert('click me again'));

scissor.addEventListener('click', () => alert('click me again'));

