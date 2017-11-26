var app=angular.module("HangmanApp",[]);

	app.controller('HangmanController', ['$scope', function($scope,$timeout){
		
$scope.title="Hangman Application made in AngularJS";

	var words=["rat","cat","london","england","guess","nature","manchester","queen","hangman","business","javascript"];
	$scope.incorrectLetterChosen=[];
	$scope.correctLetterChosen=[];
	var selectedWord='';
	$scope.guesses=6;
	$scope.displayWord=" ";
	$scope.input={
		letter:''
	};

	var selectRandomWord =function(){
		var x=Math.round(Math.random()*words.length);
		
		console.log("words[x]= "+words[x]+" "+ " X= "+x)
	return words[x];
	}

	var NewGame = function(){

	$scope.incorrectLetterChosen = [];
	$scope.correctLetterChosen =[];
	$scope.guesses=6;
	$scope.displayWord =" ";
	selectedWord = selectRandomWord();

		console.log("Inside new game the word is "+selectedWord.toUpperCase()+" and the length is "+selectedWord.length);

	var tempDisplayWord	='';
		for(var i=0;i<selectedWord.length;i++)
		{
			firstLetter=selectedWord[0];
			lastLetter=selectedWord[selectedWord.length-1];
			if(i==0)
				{
					tempDisplayWord=tempDisplayWord+selectedWord[0].toUpperCase();;
					console.log("i==0"+tempDisplayWord)
				}
			else if(i==(selectedWord.length-1))
				{
					tempDisplayWord=tempDisplayWord+selectedWord[i].toUpperCase();	
				}
				else
				{	
					/*for(var x=i+1;x<selectedWord.length;x++)
					{
						if(firstLetter==selectedWord[x])
						{
							tempDisplayWord=tempDisplayWord+selectedWord[x].toUpperCase();
						}
						else if(lastLetter==selectedWord[x])
						{
							tempDisplayWord=tempDisplayWord+selectedWord[x].toUpperCase();
						}
							tempDisplayWord+="*";
					}*/

				tempDisplayWord+="*";
				}
		}

		$scope.displayWord=tempDisplayWord;

	}

	$scope.letterCheck=function(){

		console.log("The word is "+selectedWord);

			for(var i=0;i<$scope.correctLetterChosen.length;i++)
			{	
				console.log("Inside correctLetterChosen for");

				if($scope.correctLetterChosen[i].toUpperCase()==$scope.input.letter.toUpperCase())
				{		
					$scope.input.letter="";

						console.log("$scope.correctLetterChosen[i] ");

					return;
				}
			}

	console.log("working2");

		for(var i=0;i<$scope.incorrectLetterChosen.length;i++)
		{
			if($scope.incorrectLetterChosen[i].toUpperCase()==$scope.input.letter.toUpperCase())
				{	
					$scope.input.letter="";

				console.log("$scope.incorrectLetterChosen[i] "+$scope.incorrectLetterChosen[i]);
				
				return;
				}
		}

		console.log("sELECTED WORD LENGTH  "+selectedWord.length+" and selected word is "+selectedWord);

		var correct=false;

		for(var i=0;i<selectedWord.length;i++){

			console.log("inside selected word for");

			if(selectedWord[i].toUpperCase()==$scope.input.letter.toUpperCase()){

				$scope.displayWord=$scope.displayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.displayWord.slice(i+1);
				correct=true;
				console.log("$scope.displayWord"+$scope.displayWord);
			}
		}

console.log("working4");

		if(correct){
			$scope.correctLetterChosen.push($scope.input.letter.toUpperCase());
		} else {
			$scope.guesses--;
				$scope.incorrectLetterChosen.push($scope.input.letter.toUpperCase());
		}
		$scope.input.letter="";

		if($scope.guesses==0) {
			// You Lose
			alert("You lose || a new game start");
			/*$timeout(function() {
				NewGame();
			},500);*/
		}
		if($scope.displayWord.toUpperCase()==selectedWord.toUpperCase())
		{
			$scope.displayWord=selectedWord.toUpperCase();
			alert("You won || Start a New Game");
			/*$timeout(function() {
				NewGame();
			},500);*/
		}
	};

	$scope.beginNewGame=function(){
			NewGame();

	};


	}]);