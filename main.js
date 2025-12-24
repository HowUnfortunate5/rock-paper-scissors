// shorten console.log to log
const log = console.log

//  use math.random to get a random number between 1-3 and return it
function getRandomNumber(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Create a variable to store the random number
let computerNumber = (getRandomNumber(1,3))


// create a function that will return rock, paper or scissors using
// the getRandomNumber as input

function getComputerChoice(computerNumber) {
    let result
    if (computerNumber == 3) {
        result = "rock"; }

    else if (computerNumber == 2) {
        result = "scissors" ;
    } else if (computerNumber == 1) {
        return "paper";
    }

    return result;
}

 // Write function playRound and pass the choice parameters in as arguements
function playRound(computerChoice, humanChoice) {
    // Create variable to store the answers
   let result

//Using if/else pass the possible results into it and Print the Outcome, storing the value.
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




//Create variables to store the scores of the game
let computerScore = 0
let humanScore = 0
let draw = 0

//Create a function called playGame that updates the scoreboard
//using If logic and an array. If "V" for victory is the first letter-
//-of result, human wins. And "D" for Defeat means computer wins
function playGame() {

// Create variables to store player and computer answers  

let computerChoice = getComputerChoice(computerNumber)
let humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase()

// create variable to store the result of the playRound function
let result = playRound(computerChoice, humanChoice)

//Using an array I will return the first letter of the result, which will-
//-indicate whether Player won, lost or drew.
if (result[0] == "V") {
        humanScore+= 1;
    } else if (result[0] == "D") {
        computerScore+= 1;
      }  else draw++;

//Print the scores, ect
log ("Computer Choice: " + computerChoice)
log ("Human Choice: " + humanChoice)
log (result)
log ("Score: Human " + humanScore + " " + "Computer " + computerScore)
    }


//make everything happen 5 times 
for (let round = 0; round < 5; round++ ) {
    playGame()
    //Print the round number 
    log ("Round: " + (round+1))
}



//Create a function that takes gameResult, and using an array-
//-will return who won the game. 

//if the first letter of gameResult is equal to "V" for Victory, the human-
//-has won the game. "D" for Defeat means the computer one.

//The function will return eiter




 




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