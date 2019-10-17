// Variables
let playerChoice, computerChoice, playerScore, computerScore, rounds;
const playerChoices = document.querySelectorAll('.player-choices a');
const paper  = playerChoices[0];
const rock = playerChoices[1];
const scissors = playerChoices[2];

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

const getRoundResult = function(playerChoice, computerChoice) {
    let result = new Array(3);
    if(playerChoice === computerChoice) {
        result[0] = 'It\'s a tie!';
        result[1] = 'draw';
    }
    else if(playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            result[0] = 'You Lose! Paper beats Rock!';
            // winner
            result[1] = 'computer';
        }
        else {
            result[0] = 'You Win! Rock beats Scissors!';
            // winner
            result[1] = 'human';
        }
    }
    else if(playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            result[0] = 'You Lose! Scissors beats Paper';
            // winner
            result[1] = 'computer';
        }
        else {
            result[0] = 'You win! Paper beats Rock!';
            // winner
            result[1] = 'human';
        }
    }
    else if(playerChoice === 'scissors') {
        if(computerChoice === 'rock') {
            result[0] = 'You Lose! Rock beats Scissors';
            // winner
            result[1] = 'computer';
        }
        else {
            result[0] = 'You win! Scissors beats Paper!';
            // winner
            result[1] = 'human';
        }
    }
    
    return result;
};

const gameRound = function(playerChoice) {
    computerChoice = getComputerPlay();
    
    console.log('Computer plays: ', computerChoice, ' | Human plays: ', playerChoice);
    let result = getRoundResult(playerChoice, computerChoice);
    console.log(result[0]);

    return result[1]; // winner
};


const gameController = function(playerChoice) {
    if(rounds === 0) {
        console.log('Computer Score: ', computerScore);
        console.log('Human Score: ', playerScore);
    }

    let winner = gameRound(playerChoice);
    
    if(winner == 'computer') {
        computerScore++;
    }
    else if(winner == 'human') {
        playerScore++;
    }

    console.log('Computer Score: ', computerScore);
    console.log('Human Score: ', playerScore);

    if(rounds === 4) {
        if(computerScore === playerScore) {
        console.log('It\'s a draw!');
        }
        else if(computerScore > playerScore) {
            console.log('Computer wins! I\'m sorry Dave. I\'m afraid I can\'t do that.');
        }
        else {
            console.log('Human wins!');
        }
    }
    rounds++;
};
// game();

// get buttons
const newGame = document.querySelector('.reset #newgame-btn');

// When click New Game
newGame.addEventListener('click', () => {
    // Set counters to 0
    // Initialize variables
    playerScore = 0;
    computerScore = 0;
    playerChoice = '';
    computerChoice = '';
    rounds = 0;
    
    // change classes from disabled to enabled
    playerChoices.forEach(choice => {
        choice.classList.remove('disabled');
        choice.classList.add('enabled');
    });
    // enable finish game
    // disable newgame itself

});

paper.addEventListener('click', () => {
    if(paper.classList.contains('enabled')) {
        playerChoice = 'paper';
        
        gameController(playerChoice);

        if(rounds === 5) {
            // finishGame();
        }

        // Check if it's the last round
    }
});

