// Variables being assinged to the whole page
var startBtn = document.getElementById("btn-start");
var countdown = document.getElementById("countdown");
var quizTitle = document.querySelector("#quiz-title");
var instructions = document.querySelector("#instructions");

// Start Quiz function where timer is stored
function startQuiz() {

    var countdownTimer = 60;
    countdown.innerText = countdownTimer;

    var timer = setInterval(function() {
        countdownTimer--;
        countdown.innerText = countdownTimer;

        if (countdownTimer === 0) {
            clearInterval(timer);
            allDone(countdownTimer);
        }
    }, 1000);
};

if (questions.choices === questions.answer) {
    
}



startBtn.addEventListener("click", function(){
    quizTitle.classList.toggle("hidden");
    instructions.classList.toggle("hidden");
    startBtn.classList.toggle("hidden");

    startQuiz();
});