// Variables being assinged to the whole page
var startBtn = document.querySelector("#btn-start");
var countdown = document.querySelector("#countdown");
var startContent = document.querySelector("#start-container");
var questionContainer = document.querySelector("#question-container");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var answerDiv = document.querySelector("#answer");
var endResult = document.querySelector("#end-container");
var finalResult = document.querySelector("#end-result");
var userInput = document.querySelector("#initials");
var submitBox = document.querySelector("#btn-initial");
var qIndex = 0;
var countdownTimer = 60;

// Timer function
var countTimer = function timer() {
    var timeInterval = setInterval(function() {
        if (countdownTimer >= 1) {
            countdownTimer--;
            countdown.innerText = countdownTimer
        } else {
            countdownTimer = 0;
            clearInterval(timeInterval);
            stopQuiz();
        } 
    }, 1000);
}

// Get Questions
var getQuestion = function () {
    var firstQuestion = questions[qIndex];
    questionTitle.textContent = firstQuestion.question;
    questionChoices.innerHTML = "";

    firstQuestion.choices.forEach(function(choice, i) {
        var selectChoice = document.createElement("button");
        selectChoice.setAttribute("class", "btn-choice");
        selectChoice.setAttribute("value", choice);
        selectChoice.textContent = i + 1 + ". " + choice;

        selectChoice.addEventListener("click", nextQuestion);
        questionChoices.appendChild(selectChoice);
    });
};

// Function to move through questions
var nextQuestion = function() {
    var answer = document.createElement("h3");
    answer.setAttribute("class", "answer");
    answerDiv.appendChild(answer);

    if (this.value === questions[qIndex].answer) {
        answer.textContent = "Correct!"
        countdownTimer = countdownTimer + 10;
        setTimeout(function() {
            answer.remove();
        }, 1000);
    } else {
        answer.textContent = "Wrong!";
        countdownTimer = countdownTimer - 10;
        if (countdownTimer <= 10){
            countdownTimer = 0;
            clearInterval(timeInterval);
        }
        setTimeout(function() {
            answer.remove();
        }, 1000);
    }

    qIndex++;

    if (qIndex === questions.length) {
        stopQuiz();
    } else {
        getQuestion();
    }
};

// Start Quiz function
function startQuiz() {

    countTimer();
    startContent.style.display = "none";
    questionContainer.style.display = "block";
    endResult.style.display = "none";

    getQuestion();
};

// Stop quiz function
var stopQuiz = function() {
    countdown.textContent = countdownTimer;
    clearInterval(countdown);

    questionContainer.style.display = "none";
    endResult.style.display = "block";

    finalResult.textContent = "Your new highscore is: " + countdownTimer + "!";
};

// store highscores and initials based on the submit button being clicked
submitBox.addEventListener("click", function() {
    var initials = userInput.value;

    var endingScore = {
            initials: initials,
            score: countdownTimer
    }

    var scores = localStorage.getItem("scores");
    if (scores === null) {
        scores = [];
    } else {
        scores = JSON.parse(scores);
    }
    scores.push(endingScore);
    var finalScore = JSON.stringify(scores);
    localStorage.setItem("scores", finalScore);

    location.href = "scores.html"
});

// Event to start the whole quiz
startBtn.addEventListener("click", startQuiz);