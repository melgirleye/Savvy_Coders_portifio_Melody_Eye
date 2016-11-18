
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

var runRound= function(){
  var userChoice= prompt(" What would like to play? Rock, Paper, Scissors, please")
  var rng = Math.random();
  var computerChoice="Scissors";
  var winner="computer"
  var lowerCaseUserChoice= userChoice.toLowerCase();

  if(rng<0.33){
      computerChoice="Rock";
    }
  else if (rng <0.66) {
      computerChoice="Paper";
    }
  if (computerChoice==="Scissors" && lowerCaseUserChoice==="Rock") {
    winner="user";
  }
  else if (computerChoice=="Paper" && lowerCaseuUserChoice==="Scissors") {
    winner="user";

  }
  else if (computerChoice=="Rock" && lowerCaseuUserChoice==="Paper") {
    winner="user";

  }
  if (computerChoice===userChoice){
    alert ("There was a tie")
    runRound();
  }
  else {
    alert (" The winner was "+ winner)

  }
}
var roundCounter= 1;
while(roundCounter<=5){
  runRound();
  roundCounter++;
}
