// Phase 1: Understand problem- create RPS game.
// Phase 2: Plan 
// RPS Game: Take user input- prompt user or show instructions on what to do.
// User input taken via Chrome Console- no 3-button-GUI. Only accept input in form of rock/paper/scissors text.
// Generate random computer response after user submits input.
// Phase 3: Implement subproblems
// Subproblem 1 is computerPlay function which randomly generates integer from 0-2 inclusive


// Randomly returns either a string (either 'rock', 'paper' or 'scissors').
function computerPlay() {
    let response = Math.floor(Math.random()*3);
    if (response === 0){
        return "Rock";
    }
    else if (response === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

// Takes computer and user selections (rock/paper/scissors) and returns a string declaring a win/loss/draw
function playRound(playerSelection, computerSelection){
    if (playerSelection == 1){
        console.log("Error- user cancelled the window. playRound() aborted.");
        return 1;
    }
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    const draw = "Draw!";
    const win = "You Win!";
    const loss = "You Lose!";
    if (playerSelection === computerSelection){
        return `${draw} You both played ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)}.`;
    }
    else if ( (playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='rock') ){
        return `${win} ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection.slice(0,1).toUpperCase()}${computerSelection.slice(1)}.`
    }
    else{
        return `${loss} ${computerSelection.slice(0,1).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)}.`;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// Ensures the player keys in a string of the correct format (either rock, paper or scissors)
function playerInput(){
    let response;
    while (true){
        response = prompt("Please type in Rock, Paper or Scissors:");
        if (response === null){
            console.log("Error- user cancelled the window. playerInput() aborted.");
            return 1;
        }
        else if (response.toLowerCase() === "rock" || response.toLowerCase() === "paper"|| response.toLowerCase() === "scissors"){
            return response;
        }
    }
}
// Plays a five-round game of rock, paper, scissors.
function game(){
    let result;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        result = playRound(playerInput(), computerPlay());
        if (result === 1){
            console.log("Error- user cancelled the window. game() aborted.");
            return 1;
        }
        if (result.includes("You Win!")){
            playerScore++;
            console.log(`${result} Player Score is ${playerScore} and Computer Score is ${computerScore}`)
        }
        else if (result.includes("You Lose!")){
            computerScore++;
            console.log(`${result} Player Score is ${playerScore} and Computer Score is ${computerScore}`)
        }
        else{
            console.log(`${result} Player Score is ${playerScore} and Computer Score is ${computerScore}`)
        }
    }
    
    if(playerScore > computerScore){
        console.log("Game over. You are the overall winner!");
    }
    else if (computerScore > playerScore){
        console.log("Game over. The computer is the overall winner!");
    }
    else{
        console.log("Game over. Overall, it's a draw!");
    }

}