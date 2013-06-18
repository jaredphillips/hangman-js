
	var word = "canada";
	var submit = document.getElementById("button");
	// var guess = document.getElementById("field");
	var wordArray = word.split('');
	var boardLength = wordArray.boardLength;
	var displayBoardArray = ['_','_','_','_','_','_'];
	var guessedLetterArray = [];
	var turnsLeft = 10;

function guessedLetter (guess) {
	var goodGuess = false;

	for(i = 0; i < wordArray.length; i += 1)
		if(guess == wordArray[i]) {
			displayBoardArray[i] = guess;
			goodGuess = true;
	} 
		else if (displayBoardArray[i] == '_') {
			guessedLetterArray.push(guess);
			turnsLeft -= 1;
		}


$(function() {
$('#board').text(displayBoardArray).show();
});


	}



// Take string and assign it to guess var

$(function() {
	$('#button').click(function(event) {
		var guess = $('#field').val();
		guessedLetter(guess);
	});
});


//.bind( eventType [, eventData ], handler(eventObject) )




