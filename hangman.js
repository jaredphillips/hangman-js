var wordArray = ["Canada", "Japan", "China", "England"];
var word = wordArray[Math.floor(Math.random() * wordArray.length)];
var submit = document.getElementById("button");
var wordArray = word.split('');
var guessedLetterArray = [];
var boardArray = [];
var turnsLeft = 10;

setUpBoard(word);

function guessedLetter (guess) {
	for(i = 0; i < wordArray.length; i++){
		if(guess == wordArray[i]) {
			boardArray[i] = guess;
		}
	}
	guessedLetterArray.push(guess);
	turnsLeft--;
}

$("#board").text(displayBoard());
$("#button").click(function(event){
	var guess = $('ul li #field').val();
	guessedLetter(guess);
	$("#board").text(displayBoard());
});

function setUpBoard (word) {
	var boardLength = word.length;
	for (var i = 0; i < boardLength; i++){
		boardArray.push(" _ ");
	}
	return boardArray;
}

function displayBoard () {
	return boardArray.join(" ");
}