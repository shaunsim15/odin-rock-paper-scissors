// Randomly returns a string (either 'rock', 'paper' or 'scissors').
function computerPlay() {
    let response = Math.floor(Math.random()*3);
    if (response === 0){
        return "rock";
    }
    else if (response === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}


// Takes computer and user selections (rock/paper/scissors) and determines the round outcome.
function playRound(e){
    // Define the player's Selection
    let playerSelection;
    if (e.target.classList.contains('rock') || e.path[1].classList.contains('rock')){
        playerSelection = 'rock';
    }
    else if(e.target.classList.contains('paper') || e.path[1].classList.contains('paper')){
        playerSelection = 'paper';
    }
    else if(e.target.classList.contains('scissors')|| e.path[1].classList.contains('scissors')){
        playerSelection = 'scissors';
    }

    // Define the computer's Selection
    let computerSelection = computerPlay()
    
    // Compare the player and computer selections to determine round outcome, and update variables / HTML text.
    if (playerSelection === computerSelection){
        playerScoreDiv.textContent = `Player Score: ${playerScore}`;
        compScoreDiv.textContent = `Comp Score: ${compScore}`;
        currentResultDiv.textContent = `Draw! You both played ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)}.`;
        playAudio("cricket");
    }
    else if ( (playerSelection==='rock' && computerSelection==='scissors') || (playerSelection==='scissors' && computerSelection==='paper') || (playerSelection==='paper' && computerSelection==='rock') ){
        playerScore += 1;
        playerScoreDiv.textContent = `Player Score: ${playerScore}`;
        currentResultDiv.textContent = `You Win! ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)} beats ${computerSelection.slice(0,1).toUpperCase()}${computerSelection.slice(1)}.`
        playAudio("yay");
    }
    else{
        compScore += 1;
        compScoreDiv.textContent = `Comp Score: ${compScore}`;
        currentResultDiv.textContent = `You Lose! ${computerSelection.slice(0,1).toUpperCase()}${computerSelection.slice(1)} beats ${playerSelection.slice(0,1).toUpperCase()}${playerSelection.slice(1)}.`;
        playAudio("aww");
    }

    // Update round number
    roundsPlayed += 1;
    roundNoDiv.textContent = `Rounds Played: ${roundsPlayed}`;
   
    // Run at the end of the game (when one player gets the points needed for victory)
    if (playerScore === pointsForVictory || compScore === pointsForVictory){
        // Update final results
        if (playerScore === pointsForVictory){
            finalResultsDiv.textContent = "Overall Winner: Player";
        }
        else{
            finalResultsDiv.textContent = "Overall Winner: Computer";
        }

        // Append Reset button
        const resetButton = document.createElement('button');
        const resetText = document.createTextNode('Reset Game');
        resetButton.appendChild(resetText);
        infoDiv.appendChild(resetButton);
        resetButton.setAttribute('class','reset');
        resetButton.addEventListener('click',resetGame)

        // Freeze all other buttons
        rockButton.removeEventListener('click',playRound);
        paperButton.removeEventListener('click',playRound);
        scissorsButton.removeEventListener('click',playRound);

        // Background Image
        document.querySelector('body').classList.add('background');
        return;
    }
}

// Runs after the reset button is pressed at the end of a whole game (comprising several rounds)
function resetGame(){
    compScore = 0;
    playerScore = 0;
    roundsPlayed = 0;

    // Unappend reset button
    document.querySelector('.reset').remove();

    // Unfreeze all other buttons
    rockButton.addEventListener('click',playRound);
    paperButton.addEventListener('click',playRound);
    scissorsButton.addEventListener('click',playRound);

    // Reset displayed text
    roundNoDiv.textContent = `Rounds Played: ${roundsPlayed}`;
    playerScoreDiv.textContent = 'Player Score:';
    compScoreDiv.textContent = 'Comp Score:';
    currentResultDiv.textContent = '';
    finalResultsDiv.textContent = "";

    // Background Image
    document.querySelector('body').classList.remove('background');
}

function playAudio(outcome){
    console.log("."+`${outcome}`);
    const audio = document.querySelector("."+`${outcome}`);
    audio.currentTime = 0;
    audio.play();
}

function hoverIn(e){
    if(e.target.tagName === "BUTTON"){
        e.target.classList.add('transition');
    }
    else if(e.target.tagName === "IMG"){
        e.path[1].classList.add('transition');
    }
}

function hoverOut(e){
    if(e.target.tagName === "BUTTON"){
        e.target.classList.remove('transition');
    }
    else if(e.target.tagName === "IMG"){
        e.path[1].classList.remove('transition');
    }
}

// Initial variable values
let compScore = 0;
let playerScore = 0;
let roundsPlayed = 0;
const pointsForVictory = 5;

// Buttons
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const infoDiv = document.querySelector('.info');
const roundNoDiv = document.querySelector('.roundNo');
const playerScoreDiv = document.querySelector('.playerScore');
const compScoreDiv = document.querySelector('.compScore');
const currentResultDiv = document.querySelector('.currentResult');
const finalResultsDiv = document.querySelector('.finalResult');

// Add Event Listeners
rockButton.addEventListener('click',playRound);
paperButton.addEventListener('click',playRound);
scissorsButton.addEventListener('click',playRound);

rockButton.addEventListener('mouseover',hoverIn);
paperButton.addEventListener('mouseover',hoverIn);
scissorsButton.addEventListener('mouseover',hoverIn);

rockButton.addEventListener('mouseout',hoverOut);
paperButton.addEventListener('mouseout',hoverOut);
scissorsButton.addEventListener('mouseout',hoverOut);


