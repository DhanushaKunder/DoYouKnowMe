var readlineSync= require("readline-sync");
const chalk = require('chalk');
var enteredName = readlineSync.question("Please Enter your Name: ");

console.log(chalk.cyan.bgWhite.bold("Welcome "+enteredName));
console.log("Lets see how much you know me!!!")
score=0;
console.log("Please choose from the option below\n")
function play(question,answer){
  var userAnswer= readlineSync.question(question);
  var actualAnswer= userAnswer.toUpperCase();
  if (actualAnswer === "A"||actualAnswer === "B"||actualAnswer === "C"||actualAnswer === "D"){
    if(actualAnswer === answer){
    console.log(chalk.green("Correct Answer!"));
    score= score+1;
  }
  else{
    console.log(chalk.red("Wrong Answer!"))
    }
  }
  else{
    console.log("Please Enter a Valid OPTION!")
  }
}

var questions= [{
  question: "What is my Last name?? \n A. Bangera \n B. Kunder \n C. Salian\n D. Bhat\n",
  answer: "B"
},
{
  question: "Where am I from?\n A. Bangalore\n B. Chennai\n C. Mangalore\n D. Bombay\n",
  answer: "C"
},
{
  question: "where do I work?\n A. Infosys\n B. TCS\n C. Mindtree\n D. Wipro\n",
  answer: "D"
},
{
  question: "What's my hobby?\n A. Drawing\n B. Watching series\n C. Dancing\n D. All of the above\n",
  answer: "D"
},
{
  question: "Whats my favorite color?\n A. Pink\n B. Blue\n C. Mint Green\n D. Black\n",
  answer: "C"
},
{
  question: "What's my favorite series'?\n A. FRIENDS\n B. YOU\n C. Suits\n D. Vampires Diary\n",
  answer: "A"
}
]

for (var i=0; i<questions.length;i++){
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your score is: "+score)

var highScore=[{
  name: "Varshini",
  score: 5
},
{
  name: "Panchami",
  score: 4
},
{
  name: "Hithesh",
  score: 2
}]
console.log("These are the HighScorers");
for(var i=0;i<highScore.length;i++){
  if(score > highScore[i].score){
    console.log(chalk.blue("\nYou are one of the HighScorer!!"));
    var newHighscore= {name:enteredName, score:score};
    highScore.splice(i, 0, newHighscore);
    highScore.pop();
    break;
  }
}
for(var i=0;i<highScore.length;i++){
  console.log("Name:",highScore[i].name + ", Score: ", highScore[i].score);
}