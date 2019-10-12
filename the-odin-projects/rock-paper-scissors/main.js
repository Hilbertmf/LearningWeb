const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getComputerPlay = () => {
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

const getRoundResult = (playerChoice, computerChoice) => {
    
    playerChoice = playerChoice.toLowerCase();

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

const gameRound = () => {

    let playerChoice = window.prompt('Write rock, paper or scissors');
    let computerChoice = getComputerPlay();
    
    console.log('Computer plays: ', computerChoice, ' | Human plays: ', playerChoice);
    let result = getRoundResult(playerChoice, computerChoice);
    console.log(result);

    return result.split(' ')[0]; // winner
};

const game = () => {
    
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

game();
