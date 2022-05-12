// Player 1 Dice
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1 + 1);

// Player 2 Dice
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2 + 1); 

// Changing the dice to the current state
document.querySelector("#img1").setAttribute("src", "images/dice" + randomNumber1 + ".png")
document.querySelector("#img2").setAttribute("src", "images/dice" + randomNumber2 + ".png")

// Checking who won! 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1#changetitle").textContent = "🎉 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1#changetitle").textContent = "Draw";
} else {
    document.querySelector("h1#changetitle").textContent = "🎉 Player 2 Wins!";
}