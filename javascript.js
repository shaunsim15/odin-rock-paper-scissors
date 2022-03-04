// Phase 1: Understand problem- create RPS game.
// Phase 2: Plan 
// RPS Game: Take user input- prompt user or show instructions on what to do.
// User input taken via Chrome Console- no 3-button-GUI. Only accept input in form of rock/paper/scissors text.
// Generate random computer response after user submits input.
// Phase 3: Implement subproblems
// Subproblem 1 is computerPlay function which randomly generates integer from 0-2 inclusive


// Returns an integer from 0 to 2 inclusive
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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return `Draw! You both played ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)}.`;
    }
    else if ( (playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='rock') ){
        return `You win! ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection.slice(0,1).toUpperCase()}${computerSelection.slice(1)}`
    }
    else{
        return `You Lose! ${computerSelection.slice(0,1).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)}`;
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));