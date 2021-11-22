//generate a random integer from 1-6 to represent a dice roll
let randomNumber1 = Math.floor(Math.random()*6)+1;

let diceImageSource = "images/dice" + randomNumber1 + ".png"; 

document.querySelectorAll("img")[0].setAttribute("src", diceImageSource);

//generate a dice roll for the second number 
let randomNumber2 = Math.floor(Math.random()*6)+1;

let diceImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", diceImageSource2);


//check win/lose/draw outcomes:
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML="Its a Draw!";
}
