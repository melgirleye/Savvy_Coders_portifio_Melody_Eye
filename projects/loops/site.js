
var output=document.querySelector("#output");
var outputList="<ul>";
var counter= 100;

while(counter > 0)
{
    if(counter %15 ===0 )
    {
    outputList +=("<li>FizzBuzz</li>");
    }
    else if(counter %3 ===0 )
    {
      outputList+=("<li>Fizz</li>");
    }
     else if(counter %5 === 0)
    {
      outputList+=("<li>Buzz</li>");
    }
    else{
      outputList+="<li>"+(counter);+"</li>";
    }
 counter--;
 }
 outputList +="</ul>";

output.innerHTML = outputList;

//Rock, Paper , Scissors

var getComputerChoice = function(){
var runRound= function(){
  var userChoice= prompt(" What would like to play? Rock, Paper, Scissors, please")
  var rng = Math.random();
  var computerChoice="Scissors";


  if(rng<0.33){
      computerChoice="Rock";
    }
  else if (rng <0.66) {
      computerChoice="Paper";
    }
    return computerChoice;
  }
  var getWinner = function (computerChoice, userChoice) {
    var winner="computer"
    var lowerCaseUserChoice= userChoice.toLowerCase();

  if (computerChoice==="Scissors" && lowerCaseUserChoice==="Rock") {
    winner="user";
  }
  else if (computerChoice=="Paper" && lowerCaseuUserChoice==="Scissors") {
    winner="user";

  }
  else if (computerChoice=="Rock" && lowerCaseuUserChoice==="Paper") {
    winner="user";

  }

  return winner;
}

var validateUserChoice =function(userChoice){
    var lowerCaseUserChoice = userChoice.toLowerCase();
    return lowerCaseUserChoice === "rock" ||
      lowerCaseUserChoice === "paper" ||
      lowerCaseUserChoice === "scissors";
    }

var runRound = function(){
  var userChoice = prompt("What would you like to play? Rock, Paper, or Scissors, please");
  var computerChoice = getComputerChoice();
  var winner = getWinner(computerChoice, userChoice);

  if(!validateUserChoice( userChoice)){
    alert("please input a valid command");

    runRound();
  }
  else{
    if (computerChoice===userChoice){
      alert ("There was a tie")
      runRound();
    }

  }

  }
    else {
      alert (" The winner was "+ winner)

          }
  }


}
var roundCounter= 1;
while(roundCounter<=5){
  runRound();
  roundCounter++;
}
var winnerResults=document.querySelector("#winner");
var winnerOfAllRounds=winner;
if (winner >=3 )
   winnerOfAllRounds= " The winner was " + winner;
   runRound();

 }
