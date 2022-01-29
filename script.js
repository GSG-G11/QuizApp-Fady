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
//getting the answer from the user
let selectedAnswer = "";
let selectedIndex;
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    nextQuestionBtn.disabled = false; //activaite the button again on any click on the answers
    selectedAnswer = options[i].innerText; // assign the selected answer
    options[i].classList.toggle("selected"); //styling the selected asnwer
    selectedIndex = i;
    if (!options[i].classList.contains("selected"))
      nextQuestionBtn.disabled = true;
  });
}
//this function is onClick function assgined to the 'next question button'
const submitAnswer = () => {
  if (
    selectedAnswer ===
    myQuestions[randomQuestion].answers[
      myQuestions[randomQuestion].correctAnswer
    ]
  ) {
    //checking if the answer is right
    score++;
  }
  // if the user selected answer, this is dsd
  if (selectedAnswer) {
    questionCounter++; //everytime we call it ,we increase the number of asnwered question
    counterOfquestions.innerText = `${questionCounter}/10`;
    renderingQuestion();
    options.forEach((ele) => {
      ele.classList.remove("selected");
    });
  }
};

renderingQuestion();

//play again button

playAgainBtn.addEventListener("click", () => {
  window.location.reload(true);
});

//storing results
const addTolocalStorage = function (name, score) {
  storedScores.push({ user: name, points: score });
  localStorage.setItem("storedScores", JSON.stringify(storedScores));
};

// rendering leaderboaord
const renderingLeaderboard = () => {
  let sortedScores = storedScores.sort((a, b) => a.points - b.points);
  sortedScores.forEach((ele) => {
    rankingContainer.insertAdjacentHTML(
      "afterend",
      ` <p class="ranking"><span>${ele.user}</span> <span>${ele.points}</span></p>`
    );
  });
};
