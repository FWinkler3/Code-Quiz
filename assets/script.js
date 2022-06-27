//need to define the following functions:
  //startGame -  hide start button, starts timer, render first Question chosen from array (random or always in same order fine)
  //nextQuestion - will render next question, brought on by clicking an answer button, must check if answer is correct, if incorrect, subtract time
  //renderResults - will show number of correct answers, must input initials to log score, shows view high scores button
  //viewHighScores - will show container of high scores from local storage
  //timer function
  //

//variables to define
  //start button
var startButton = document.getElementById("start-button");
  //viewHighScores button
var highScoreButton = document.getElementById("highScoresButton");
  //QandAText ONLY
var questionBeingAsked = document.getElementById("QandAText"); 
  //Timer container
var timerEl = document.getElementById("countdownContainer");
  //entire Start Button/Question Container
var questionContainer = document.getElementById("question-container");
  //answer buttons so event listener for click can be added
var choices = document.getElementById("answer-buttons"); 
  // results for user after taking quiz
var results = document.getElementById("results");

//Clicking the Start Button will kick off the entire quiz
startButton.addEventListener ("click", startQuiz); 

//startQuiz function will need to be defined
function startQuiz () {
  startButton.classList.add("hide");
  //console.log("Started");
  questionBeingAsked.classList.remove("hide"); 
  timerEl.classList.remove("hide");
  countdown(); 
}

//this is the countdown function which will also need to be called when startQuiz is called 
function countdown() {
  var timeLeft = 5; //15 seconds per question, 5 questions (CHANGE BACK TO 75!!!)

  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayFinalScore(); 
    }
  }, 1000);
}

//this is the function that will display the results
//why is there a split second pause in between questions appearing and timer starting. is this an issue?
//FUNCTION IS NOT FINISHED. 
function displayFinalScore () {
  timerEl.textContent = "Times up!";
  questionContainer.classList.add("hide"); 
  highScoreButton.classList.remove("hide");
  results.classList.remove("hide");
  var count = 5;
  results.textContent = ""

  if (count === 5) {
    results.textContent = "Congratulations! \ You got all 5 correct! \ You're a coding master!"
  }
  else {
    results.textContent = "You got"
  }

}


//need to add event listener so when any answer button is clicked, moves on to next question
//choices.addEventListener("click", nextQuestion()); ***REMOVE COMMENT NOTATION WHEN nextQuestion is defined!!!

//now need to define function of next question... method random question. 

//function nextQuestion() {}

