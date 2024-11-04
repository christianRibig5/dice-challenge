var h1 = document.querySelector('h1');
var img = document.querySelectorAll('img');
console.log(h1);
console.log(img[1].attributes);
// var diceFaces = [1, 2, 3, 4, 5, 6];
var randomDiceFace1 = Math.floor(Math.random() * 6) + 1;
var randomDiceFace2 = Math.floor(Math.random() * 6) + 1;

// var player1 = diceFaces[n];
// var player2 = diceFaces[m];
var randomImageSource1 = './images/dice' + randomDiceFace1 + '.png';
var randomImageSource2 = "./images/dice" + randomDiceFace2 + ".png";

img[0].setAttribute('src', randomImageSource1);
img[1].setAttribute("src", randomImageSource2);

if (randomDiceFace1 === randomDiceFace2) {
    h1.innerHTML = "Draw! Play on"
} else if (randomDiceFace1 > randomDiceFace2) {
    h1.innerHTML = "⛳️Player 1 Wins!";
} else {
    h1.innerHTML = "Player 2 Wins!⛳️";
}



