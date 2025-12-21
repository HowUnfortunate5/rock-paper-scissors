// shorten console.log to log
const log = console.log

//  use math.random to get a random number between 1-3 and return it
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
    }

    let computerNumber = (getRandomNumber(3))

// create a function that will randomly return rock, paper or scissors using
// the getRandomNumber as input  

function getComputerChoice(computerNumber) {
    let result
    if (computerNumber == 0) {
        result = "rock"; }

    else if (computerNumber == 1) {
        result = "scissors" ;
    } else result = "paper";

    return result;
}

let computerChoice = getComputerChoice()
let humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase()


 // Write function compareResults and pass the choice parameters in as arguements
function compareResults(computerChoice, humanChoice) {
    // Create variable to store the answers
   let result

if (humanChoice == "rock" && computerChoice == "rock") {
        result = "It's a Draw";
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        result = "Victory, Rock beats Scissors";
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result = "Defeat, Rock loses to Paper";
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        result = "Deafeat, Paper loses to Scissors";
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        result = "It's a Draw"; 
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        result = "Victory, paper beats rock";
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        result = "It's a Draw";
    } else if (humanChoice = "scissors" && computerChoice == "rock") {
        result = "Defeat, Rock beats scissors"; 
    } else if (humanChoice = "scissors" && computerChoice == "paper") {
        result = "Victory, Scissors beats paper";
    } return result; 

}

log(compareResults(computerChoice, humanChoice))
 

    
function playGame() {
// create two variables to keep the score of the game
const humanScore = 0
const computerScore = 0
const round = 0
const roundsRemaining = (5 - round)
let = score
while (keepGoing = True)

// create a variable called score that turns the playRound result into a variable
score = playRound(humanChoice, computerChoice)

    if (score[0] == "V") {
        humanScore++;
    } else if (score[0] == "D") {
        computerScore++;
    }
    // Increase the number of rounds played each time
    round++

    log("Computer Choice: " + computerChoice + " score: " + computerScore)
    log("Player Choice: " + humanChoice + " score: " + humanScore)
    log(result)
    log("Rounds remaining: " + roundsRemaining )

    //Break at round 5
    if (round == 5) {
        keepGoing == false;
    }
}


// Play 5 rounds by calling playRound 5 times.

// Hint: When you assign a function call to a variable, 
// the return value of that function is assigned to the variable. 
// Accessing the variable afterward will only provide the assigned value; 
// it doesn’t recall the function.
//  You need to recall the choice functions to get new choices for each round.

//Re-work your previous functions or create more helper functions if necessary. 
// Specifically, you may want to change the return values to something more useful.
//If you already know about loops, you can use them.
// If not, don’t worry! Loops will be covered in the next lesson