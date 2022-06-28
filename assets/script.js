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
  //list of high scores 
var highScores = document.getElementById("highScores");
  //starting time
var timeLeft = 75; //15 seconds per question, 5 questions (CHANGE BACK TO 75!!!)
  //used to change question being rendered
var question = document.getElementById("question");
  // Answer Button variables
var answerButtonA = document.getElementById("answerButtonA"); 
var answerButtonB = document.getElementById("answerButtonB"); 
var answerButtonC = document.getElementById("answerButtonC"); 
var answerButtonD = document.getElementById("answerButtonD"); 
//displays originally as coding quiz challenge and then will return correct or incorrect results from previous question
var headline = document.getElementById("headline");

// creating manual for loop
var currentIndex = 0
var timeInterval;

  // variable bank of questions
  var questionBank = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
      answer: "c. alerts"
    },
    {
      title: "Arrays in JavaScript can be used to store: ",
      choices: ["a. numbers", "b. letters", "c. booleans", "d. All of the Above"],
      answer: "d. All of the Above"
    },
    {
      title: "A very useful tool in debugging during development is:",
      choices: ["a. Raid spray", "b. A screwdriver", "c. console.log", "d. Smashing the Keyboard"],
      answer: "c. console.log"
    },
    {
      title: "The first index of an array is ___.",
      choices: ["a. The Premier", "b. 0", "c. 1", "d. None of the Above"],
      answer: "b. 0"
    }
  ]

//timer function (to be called when startQuiz is called)
function countdown() {

  timeInterval = setInterval(function () {
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

//Clicking the Start Button will initiate the quiz
startButton.addEventListener ("click", startQuiz); 

//startQuiz function - hide start button, starts timer, render first Question chosen from array
function startQuiz () {
  startButton.classList.add("hide");
  //console.log("Started");
  questionBeingAsked.classList.remove("hide"); 
  timerEl.classList.remove("hide");
  headline.textContent="";
  countdown(); 
  renderQuestion(currentIndex);
}

//RENDER QUESTION FRAMEWORK
  // question on HTML becomes question in Array chosen by title
  // answer buttons on HTML become choices in Array.
function renderQuestion (i) {

  question.textContent = questionBank[i].title; 
  answerButtonA.textContent = questionBank[i].choices[0];
  answerButtonB.textContent = questionBank[i].choices[1];
  answerButtonC.textContent = questionBank[i].choices[2];
  answerButtonD.textContent = questionBank[i].choices[3];
}; 

//now we need a function to check answer
function checkAnswer (usersInput) {
  console.log(usersInput)
  if (questionBank[currentIndex].answer === usersInput) {
    console.log('correct')
  headline.textContent="CORRECT!";
  timeLeft+=10;
  }else{
    console.log('wrong')
    headline.textContent="INCORRECT!";
    timeLeft-=15;
  }
// if currentIndex is = to questions.length then endQuiz
currentIndex++
if (currentIndex === questionBank.length) {
  clearInterval(timeInterval);
  displayFinalScore();
}else{
  // After we decided whether usersInput was correct or not correct, increase the current index variable by 1 and render questions with new current index
    renderQuestion(currentIndex);

  }

}

answerButtonA.addEventListener("click", function () {
  checkAnswer(answerButtonA.textContent)
});
answerButtonB.addEventListener("click", function () {
  checkAnswer(answerButtonB.textContent)
});
answerButtonC.addEventListener("click", function () {
  checkAnswer(answerButtonC.textContent)
});
answerButtonD.addEventListener("click", function () {
  checkAnswer(answerButtonD.textContent)
});


//nextQuestion - will render next question, brought on by clicking an answer button, must check if answer is correct, if incorrect, subtract time

//renderResults - will show time left, must input initials to log score, shows view high scores button
//viewHighScores - will show container of high scores from local storage

//this is the function that will display the results


//FUNCTION IS NOT FINISHED. 
function displayFinalScore () {
  timerEl.textContent = "Times up!";
  questionContainer.classList.add("hide"); 
  highScoreButton.classList.remove("hide");
  results.classList.remove("hide");
  results.textContent = "";

  //if (timeLeft === 0) {
    results.textContent = " Your Score: " + timeLeft
  }
  
//}


//need to add event listener so when any answer button is clicked, moves on to next question
//choices.addEventListener("click", nextQuestion()); ***REMOVE COMMENT NOTATION WHEN nextQuestion is defined!!!


//function nextQuestion() {}

