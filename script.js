const myQuestions = JSON.parse(localStorage.getItem("questions")); // having the questions from local storage
const questionsContainer = document.querySelector(".questions-box");
const currentQuestion = document.querySelector(".random-question");
const userInput = document.querySelector(".user-name");
const startButton = document.querySelector(".play-button");
const landingContainer = document.querySelector(".landing-container");
const counterOfquestions = document.querySelector(".number-of-questions");
const options = document.querySelectorAll(".options");
const singleQuestion = document.querySelector(".single-question");
const nextQuestionBtn = document.querySelector(".next-question-button");
const questionSentence = document.querySelector(".the-question");
const leaderboardContainer = document.querySelector(".leaderboard-container");
const myScore = document.querySelector(".my-score");
const playAgainBtn = document.querySelector(".play-again-btn");
const rankingContainer = document.querySelector(".leaderboard-header");

let userName;
let score = 0;
let randomQuestion;
let questionCounter = 1;
let storedScores = JSON.parse(localStorage.getItem("storedScores")) || []; //for local storage and in case of empty array

// recieving the user's name
startButton.addEventListener("click", () => {
  if (userInput.value === "") return; //to prevent the user from entering empty strings
  userName = userInput.value; // assign the username
  landingContainer.style.display = "none"; // hiding the intro page
  questionsContainer.style.display = "flex"; //showing the questions side
});

const renderingQuestion = () => {
  if (questionCounter === 11) {
    questionsContainer.style.display = "none";
    leaderboardContainer.style.display = "block";
    myScore.innerText = `Your score is: ${score}/10`;
    addTolocalStorage(userName, score);
    renderingLeaderboard(); //adding to local storage
  }
  if (questionCounter === 10) nextQuestionBtn.innerText = "Submit the quiz"; // changing next question item to submit
  randomQuestion = Math.floor(Math.random() * 19); // picking a random question from the questions array
  questionSentence.innerText = myQuestions[randomQuestion].question; //writing the question;
  options.forEach((ele, index) => {
    ele.innerText = myQuestions[randomQuestion].answers[index + 1]; // render question counter
  });
  nextQuestionBtn.disabled = true;
};
