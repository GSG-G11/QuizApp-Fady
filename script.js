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
