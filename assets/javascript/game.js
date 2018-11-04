var randomNumP = $("<p>");
var randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
randomNumP.text(randomNum);
$("#random-number").append(randomNumP);


var crystalNum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var crystalNum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var crystalNum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var crystalNum4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);

var totalP = $("<p>");
var total = 0;
totalP.text(total);
$("#total-container").append(totalP);

var winCount = 0;
var winCountP = $("<p>");
winCountP.text("Win: " + winCount);
$("#win").append(winCountP);

var lossCount = 0;
var lossCountP = $("<p>");
lossCountP.text("Loss: " + lossCount);
$("#loss").append(lossCountP);

function updateDisplay() {
    randomNumP.text(randomNum);
    totalP.text(total);
    winCountP.text("Win: " + winCount);
    lossCountP.text("Loss: " + lossCount);

    $("#random-number").append(randomNumP);
    $("#total-container").append(totalP);
    $("#win").append(winCountP);
    $("#loss").append(lossCountP);

}

function newGame() {
    randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    crystalNum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    total = 0;
    updateDisplay();
}

function checkPoints(num1, num2) {
    if (num1 === num2) {
        winCount++;
        newGame();
    }
    else if (num1 > num2) {
        lossCount++;
        newGame();
    }
    updateDisplay();
}

$("#crystal-1").click(function () {
    total += crystalNum1;
    checkPoints(total, randomNum);
});

$("#crystal-2").click(function () {
    total += crystalNum2;
    checkPoints(total, randomNum);
});

$("#crystal-3").click(function () {
    total += crystalNum3;
    checkPoints(total, randomNum);
});

$("#crystal-4").click(function () {
    total += crystalNum4;
    checkPoints(total, randomNum);
});