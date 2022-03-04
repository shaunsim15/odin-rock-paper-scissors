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
        return "Rock"
    }
    else if (response === 1){
        return "Paper"
    }
    else{
        return "Scissors"
    }
}
