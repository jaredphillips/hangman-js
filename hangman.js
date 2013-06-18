	var word = "canada";
	var guess = document.getElementById("field");
	var submit = document.getElementById("button");
	var wordArray = word.split('');
	var boardLength = wordArray.boardLength;
	var displayBoardArray = ['_','_','_','_','_','_'];
	var guessedLetterArray = [];

function guessedLetter (guess) {
	for(i = 0; i < wordArray.length; i += 1)
		if(guess == wordArray[i]) {
			displayBoardArray[i] = guess;
	} else {
		guessedLetterArray.push(guess);
	}
}

$("#target").click(function() {
  alert("Handler for .click() called.");
});