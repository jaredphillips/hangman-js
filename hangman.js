
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
//pushes letter entered in text field to guessedLetter function


function display () {
	$(function() {
		$('#board').text(displayBoardArray).show();
	});

	$(function() {
		$('#turnsleft').html(turnsLeft).show();
	});
}
//displays board and turnsleft to window


function guessedLetter (guess) {
	var goodGuess = false;
	guess = guess.toLowerCase();

		for(i = 0; i < wordArray.length; i += 1){
			if(guess == wordArray[i]) {
				putOnBoard(guess, i);
				goodGuess = true;
			} 
		}
	
		if (goodGuess == false) {
			if (guessedLetterArray.indexOf(guess) != -1) {
				alert('You already guessed that letter, bud. We still going to deduct your turn because that was a dumb move by you.');
			}
			guessedLetterArray.push(guess);
			turnsLeft -= 1;	
		}	
	
	display();
	gameEnd();
};
//places correct letter guess on board or deducts turnsLeft and pushes guessed letter into an array.

function putOnBoard(guess, i) {
	displayBoardArray[i] = guess;
};

function gameEnd() {

	if(displayBoardArray.indexOf('_') == -1){
		alert('Congratulations! You win.');
	}
	else if(turnsLeft == 0){
		alert("Sorry, you've lost. The word was " + word + ".");
	}
};







