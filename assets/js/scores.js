// Declared variables
var clearScores = document.querySelector("#clear-scores");
var highScoreDiv = document.querySelector(".high-scores");

// load high scores from local storage
var scores = localStorage.getItem("scores");
scores = JSON.parse(scores);

if (scores !== null) {
    // function to sort high scores
    scores.sort(function (a, b) {return b.score - a.score});

    for (var i = 0; i < scores.length; i++) {
        var createP = document.createElement("p");
        createP.textContent = scores[i].initials + " " + scores[i].score;
        highScoreDiv.appendChild(createP);
    }
};

// clear and refresh the page
clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});