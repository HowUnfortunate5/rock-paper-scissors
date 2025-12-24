# rock-paper-scissors
rock paper scissors JavaScript game

In this game I will showcase my news skills by building rock-paper-scissors

-----
getComputerChoice()

Create a variable called computerChoice

Generate a random number between 0-1 and either multiply it by 100 and add one

If the number is less than or equal to 33, return rock, 
Else if less than or equal to 66 return paper, 
Else return scissors.

(Look at if we could generate a number between 1 and 3 to make it easier.)
----

getHumanChoice()

Create a variable called humanChoice
Prompt the Human for a text input.
Make it all lowercase 
return the variable

--------
playRound(humanChoice, computerChoice)

playRound will take humanChoice and computerChoice as arguements

if hC is equal to rock and cC is equal to rock return "Round draw, both have rock"

else if hC is equal to rock and cC is equal to scissors return "You win" Rock beats scissors"

else if hC is equal to rock and cC is equal to paper return "You lose Scissors beat paper"

else if hC is equal to paper and cC is equal to paper return "round Draw, both have paper"

else if hC is equal to paper and cC is equal to rock return "You win, paper beats rock"

else if hC is equal to paper and cC is equal to scissors return "You lose scissors beats paper"

else if hC is equal to scissors and cC is equal to scissors return draw "Round Draw, both have scissors"

else if hC is equal to scissors and cC is equal to rock return lose
print "You lose Rock beats Scissors!"

else if hC is equal to scissors and cC is equal to paper return "win" 
print "You win , Scissors beats Paper"

else return "Incorrect Choice"

--------

playGame()

Move the playRound function into playGame scope along with the score variables.

while keepGoing equals true 

if playGame equals "win" playerScore increases by one

else if playGame equals "lose", computerScore increases by one.

if playerScore is equal to 5, print "You win" 
and keepGoing will become false

else if computerScore is equal to 5
print "You Lose" 
and keepGoing will become false.






