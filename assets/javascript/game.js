
//We need our random number and show it in the webpage. This number is random from 19-120
var randomNumP = $("<p>");
var randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
randomNumP.text(randomNum);
$("#random-number").append(randomNumP);

//These variables will hold the inital random values between 1 and 12.
var crystalNum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var crystalNum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var crystalNum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
var crystalNum4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);


//Used to keep and show the total amount of points accumulated after clicking the crystals.
var totalP = $("<p>");
var total = 0;
totalP.text(total);
$("#total-container").append(totalP);

//Tracking wins and losses
var winCount = 0;
var winCountP = $("<p>");
winCountP.text("Win: " + winCount);
$("#win").append(winCountP);

var lossCount = 0;
var lossCountP = $("<p>");
lossCountP.text("Loss: " + lossCount);
$("#loss").append(lossCountP);


//Whenever any of the above values change, we want to show those changes.
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

//When the player wins or loses, we want to get new random values set up and reset the total to 0.
function newGame() {
    randomNum = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    crystalNum1 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    crystalNum2 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    crystalNum3 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    crystalNum4 = Math.floor(Math.random() * ((12 - 1) + 1) + 1);
    total = 0;
    updateDisplay();
}

//We need to see if the player either meets the random value or goes over it. It then calls the newGame()
//and updateDisplay() functions. We don't want to reload the page to get a new game.
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

//Finally, we need to click on the crystals to get points. Every time a crystal is clicked, the point values for that crystal
//is added to the total. Then we check to see if the player won or lost.
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