// Variables being assinged to the whole page
var startBtn = document.getElementById("btn-start");
var countdown = document.getElementById("countdown");

// List of questions and choices along with their answers
var questions = [
    {
        question: "Commonly used data types DO Not Include:",
        choices: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "3"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        answer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        choices: ["1. Number and Strings", "2. Other Arrays", "3. Booleans", "4. All of the Above"],
        answer: "4"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        answer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. for loops", "4. console.log"],
        answer: "4"
    }
]



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

startBtn.addEventListener("click", startQuiz);