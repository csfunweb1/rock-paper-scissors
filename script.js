var humanPoints = 0;
var computerPoints = 0;
function rps(humanNum){
  //computer turn
  var computerNum = Math.floor(Math.random()*3);
  
  if (computerNum == 0){
    var computerSign = "🗻";
  }
  else if(computerNum == 1){
    var computerSign = "📄";
  }
  else if(computerNum == 2){
    var computerSign = "✂️";
  }
  
  if (humanNum == 0){
    var humanSign = "🗻";
  }
  else if(humanNum == 1){
    var humanSign = "📄";
  }
  else if(humanNum == 2){
  var humanSign = "✂️";
  }
  var resultsString = "";
  if (humanNum == computerNum){
    resultsString = "<p>You said "+humanSign+"<br>Computer said "+computerSign+"<br>It's a tie!</p>"
  }
  else if (humanNum == 0&&computerNum==1){
    resultsString = "<p>You said "+humanSign+"<br>Computer said "+computerSign+"<br>You lose!</p>"
    computerPoints++;
  }
  else if (humanNum == 1&&computerNum==2){
    resultsString = "<p>You said "+humanSign+"<br>Computer said "+computerSign+"<br>You lose!</p>"
    computerPoints++;
  }
  else if (humanNum == 2&&computerNum==0){
    resultsString = "<p>You said "+humanSign+"<br>Computer said "+computerSign+"<br>You lose!</p>"
    computerPoints++;
  }
  else{
    resultsString = "<p>You said "+humanSign+"<br>Computer said "+computerSign+"<br>You win!</p>"
    humanPoints++;
  }
  document.getElementById("resultSpan").innerHTML = resultsString;
  document.getElementById("humanScore").innerHTML = humanPoints;
  document.getElementById("computerScore").innerHTML = computerPoints;
  
  
}

//rock is 0
//paper is 1
//scissors is 2