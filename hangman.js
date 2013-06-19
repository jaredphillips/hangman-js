
	var word = "canada";
	var submit = document.getElementById("button");
	// var guess = document.getElementById("field");
	var wordArray = word.split('');
	var boardLength = wordArray.boardLength;
	var displayBoardArray = ['_','_','_','_','_','_'];
	var guessedLetterArray = [];
	var turnsLeft = 10;


$(function() {
	display();
});
//runs display function to show board and turns left

$(function() {
	$('#button').click(function(event) {
		var guess = $('#field').val();
		guessedLetter(guess);
	});
});
//pushes value entered in text field to guessedLetter function


function display () {
	$(function() {
		$('#board').text(displayBoardArray).show();
	});

	$(function() {
		$('#turnsleft').html(turnsLeft).show();
	});
}

function guessedLetter (guess) {
	var goodGuess = false;

		for(i = 0; i < wordArray.length; i += 1){
			if(guess == wordArray[i]) {
					putOnBoard(guess, i);
				// goodGuess = true;
			} 
			else if (guess != wordArray[i]) {
				guessedLetterArray.push(guess);
				turnsLeft -= 1;	
			}
		}
	display();
};

function putOnBoard(guess, i) {
	displayBoardArray[i] = guess;
};







