// Variables being assinged to the whole page
var startBtn = document.querySelector("#btn-start");
var countdown = document.querySelector("#countdown");
var startContent = document.querySelector("#start-container");

var questionContainer = document.querySelector("#question-container");
var questionTitle = document.querySelector("#question-title");
var questionChoices = document.querySelector("#choices");
var answerDiv = document.querySelector("#answer");

var endResult = document.querySelector("#end-container");

var qIndex = 0;

var countdownTimer = 60;
function timer() {
    countdown.innerText = countdownTimer;

    var timer = setInterval(function() {
        countdownTimer--;
        countdown.innerText = countdownTimer;

        if (countdownTimer === 0) {
            clearInterval(timer);
            stopQuiz();
        }
    }, 1000);
}

// Start Quiz function where timer is stored
function startQuiz() {

    timer();
    startContent.style.display = "none";
    questionContainer.style.display = "flex";
    endResult.style.display = "none";

    getQuestion();
};


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

var nextQuestion = function() {
    var answer = document.createElement("h3");
    answer.setAttribute("class", "answer");
    answerDiv.appendChild(answer);

    if (this.value === questions[qIndex].answer) {
        answer.textContent = "Correct!"
        setTimeout(function() {
            answer.remove();
        }, 1000);
    } else {
        answer.textContent = "Wrong!";
        countdownTimer = countdownTimer - 10;
        if (countdownTimer <= 10){
            countdownTimer = 0;
            clearInterval(timer);
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

var stopQuiz = function() {
    countdown.textContent = countdownTimer;
    clearInterval(timer);

    questionContainer.style.display = "none";
    endResult.style.display = "flex";

    endResult.textContent = "Your new highscore is: " + countdownTimer + "!";
};

// Move from question to question

// End Game

// High Score List

startBtn.addEventListener("click", startQuiz);