var wordArray = ["Canada", "Japan", "China", "England"];
var word = wordArray[Math.floor(Math.random() * wordArray.length)];
var submit = document.getElementById("button");
var wordArray = word.split('');
var guessedLetterArray = [];
var boardArray = [];
var turnsLeft = 10;

setUpBoard(word);


// This function matches guess to word and swaps
function guessedLetter (guess) {
	for(i = 0; i < wordArray.length; i++){
		if(guess == wordArray[i]) {
			boardArray[i] = guess;
		}
	}
	guessedLetterArray.push(guess);
	turnsLeft--;
	endOfGame(turnsLeft);
}


// This function ties the text field to the board
$("#board").text(displayBoard());
$("#button").click(function(event){
	var guess = $('ul li #field').val();
	guessedLetter(guess);
	$("#board").text(displayBoard());
	$("#guess").text(displayGuesses());
});


// This function sets up the board at the beginning of the game
function setUpBoard (word) {
	var boardLength = word.length;
	for (var i = 0; i < boardLength; i++){
		boardArray.push(" _ ");
	}
	return boardArray;
}


// This function displays the board 
function displayBoard () {
	return boardArray.join(" ");
}

function displayGuesses (){
	return guessedLetterArray.join(" ");
}

// This function ends the game and sends an alert
function endOfGame (turnsLeft) {
	if (turnsLeft === 0){
		window.alert("That's the end of the game");
	}
}