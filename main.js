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

// create a variable that stores the value 'rock', 'paper' or 'scissors' 

let computerChoice = getComputerChoice(computerNumber)




// use prompt to get human choice and make it lower case. 

let humanChoice = prompt("Welcome to Rock, Paper Scissors. Choose your weapon!").toLowerCase()



log("Computer Choice: " + computerChoice)
log("Human Choice: " + humanChoice)

 // Write function playRound and pass the choice parameters in as arguements
function playRound(humanChoice, computerChoice) {
    //write the variables in shorthand to make typing easier
    let hC = humanChoice
    let cC = computerChoice
    // Write the logical if/else statementes that will govern the rock paper scissors

    if (hC == "rock" && cC == "rock") {
     result = "It's a Draw";
    } else if (hC == "rock" && cC == "scissors") {
        result = "Victory, Rock beats Scissors";
    } else if (hC == "rock" && cC == "paper") {
        result = "Defeat, Rock loses to Paper";
    } else if (hC == "paper" && cC == "scissors") {
        result = "Deafeat, Paper loses to Scissors";
    } else if (hC == "paper" && cC == "paper") {
        result = "It's a Draw"; 
    } else if (hC == "paper" && cC == "rock") {
        result = "Victory, paper beats rock";
    } else if (hC == "scissors" && cC == "scissors") {
        result = "It's a Draw";
    } else if (hC = "scissors" && cC == "rock") {
        result = "Defeat, Rock beats scissors"; 
    } else if (hC = "scissors" && cC == "paper") {
        result = "Victory, Scissors beats paper";
    } 
        return result;
} 

    
function playGame() {
// create two variables to keep the score of the game
const humanScore = 0
const computerScore = 0
const round = 0
const roundsRemaining = (5 - round)
while (keepGoing = True)

    // create a variable called score that turns the playRound result into a variable
    score = playRound(humanChoice, computerChoice)

    if (score[0] == "V") {
        humanChoice++;
    } else if (score[0] == "D") {
        computerScore++;
    }
    // increase the number of the round so it breaks at round 5 
    round++
    if (round == 5) {
        keepGoing == false;
    }

    log("Computer Choice: " + computerChoice + " score: " + computerScore)
    log("Player Choice: " + humanChoice + " score: " + humanScore)
    log(result)
    log("Rounds remaining: " + roundsRemaining )

    

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