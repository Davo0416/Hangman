


// Checks if enter key is pressed, and if it is pressed triggers the submit button

var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("submit").click();
  }
});

// Starting comment of the executioner
document.getElementById("comments").innerHTML = "Good Luck";

//Sets the hangman image to its 1st state
document.getElementById("changeable").src= "Images/Hangmanimages/hangman7.png";


//Array of all the possible words
const words = [
			"objection",
			"message",
			"possession",
			"aspect",
			"exam",
			"success",
			"alcohol",
			"effort",
			"child",
			"information",
			"courage",
			"initiative",
			"law",
			"army",
			"system",
			"literature",
			"safety",
			"education",
			"cascade",
			"fortune",
			"airport",
			"union",
			"relation",
			"teacher",
			"tongue",
			"drawing",
			"internet",
			"song",
			"development",
			"ratio",
			"dealer",
			"soup",
			"food",
			"fishing",
			"property",
			"importance",
			"consequence",
			"efficiency",
			"hat",
			"cheek",
			"priority",
			"dinner",
			"movie",
			"discussion",
			"trainer",
			"president",
			"impression",
			"delivery",
			"device",
			"requirement",
			"literature",
			"night",
			"database",
			"response",
			"philosophy",
			"collection",
			"dinner",
			"hotel",
			"weakness",
			"device",
			"drawing",
			"courage",
			"signature",
			"extent",
			"population",
			"childhood",
			"championship",
			"assistance",
			"satisfaction",
			"engine",
			"system",
			"maintenance",
			"addition",
			"guitar",
			"classroom",
			"ambition",
			"direction",
			"instance",
			"poem",
			"obligation",
			"manufacturer",
			"property",
			"recommendation",
			"reflection",
			"suggestion",
			"refrigerator",
			"city",
			"music",
			"hair",
			"resource",
			"employment",
			"chemistry",
			"performance",
			"leader",
			"finding",
			"disease",
			"independence",
			"manager",
			"variety",
			"initiative",
			"ladder",
			"distribution",
			"sir",
			"judgment",
			"contract",
			"blood",
			"environment",
			"industry",
			"apple",
			"recording",
			"country",
			"atmosphere",
			"leadership",
			"television",
			"failure",
			"cell",
			"length",
			"secretary",
			"agency",
			"bonus",
			"road",
			"analyst",
			"audience",
			"health",
			"wedding",
			"tongue",
			"hearing",
			"understanding",
			"obligation",
			"cabinet",
			"professor",
			"alcohol",
			"series",
			"child",
			"penalty",
			"driver",
			"promotion",
			"insect",
			"funeral",
			"preparation",
			"magazine",
			"reputation",
			"world",
			"profession",
			"measurement",
			"reception",
			"situation",
			"writing",
			"truth",
			"sample",
			"series",
			"reality",
			"clothes",
			"poem",
			"data",
			"cookie",
			"politics",
			"guest",
			"lady",
			"finding",
			"recipe",
			"control",
			"supermarket",
			"setting",
			"employment",
			"bath",
			"difference",
			"goal",
			"sister",
			"mom",
			"safety",
			"instance",
			"relation",
			"story",
			"contribution",
			"manager",
			"alcohol",
			"construction",
			"importance",
			"blood",
			"employer",
			"government",
			"policy",
			"conversation",
			"people",
			"examination",
			"introduction",
			"language",
			"payment",
			"paper",
			"classroom",
			"lab",
			"wealth",
			"lake",
			"addition",
			"depression",
			"media",
			"environment",
			"knowledge",
			"king",
			"association",
			"director",
			"context",
			"grandmother",
			"law",
			"attention",
			"profession",
			"agreement",
			"marriage",
			"bath",
			"topic",
			"employer",
			"drawing",
			"maintenance",
			"village",
			"fact",
			"depression",
			"airport",
			"management",
			"area",
			"mall",
			"basis",
			"chest",
			"piano",
			"uncle",
			"birthday",
			"society",
			"art",
			"energy",
			"celebration",
			"cigarette",
			"winner",
			"freedom",
			"surgery",
			"reading",
			"army",
			"platform",
			"personality",
			"poetry",
			"departure",
			"advice",
			"food",
			"media",
			"thanks",
			"scene",
			"delivery",
			"speech",
			"town",
			"hotel",
			"article",];
			
	//Array of all possible comments of the executioner if player wins, loses, guesses the letter right or wrong, guesses an already guessed letter, inputs the wrong word, inputs a non-letter character
	const win = ["Well Played", "Good Game", "Good Job", "Yeah that was an easy one", "I thought you won`t get this one"];
	const lose = ["Better luck next time", "Yeah that was a hard one", "Go read some books", "I thought you are smarter", "Yeah that was close"];
	const wrong = ["Thats wrong", "Have you tried a?", "Incorrect", "Hmm its not up there", "Out of luck"]; 
	const right = ["Thats correct", "Yeah that seemed logical", "Good guess", "Yeah its up there", "Nice"];
	const repeated = ["Im pretty sure you already did this one", "You did this one, go eat some honey", "Already guessed this one", "What? You dont know any other letters? You already tried this one", "Try something new, You already did this one"];
	const wrongGuess = ["You got the wrong word", "Definitely incorrect", "Not even close", "Hmm it doesn`t match", "Try guessing by letters"];
	const notLetter = ["Do you know what a letter is?", "That is not a letter", "You have to put in a letter. Words are made from letters", "Try submitting a letter", "This does not seem to be a letter"];
	
			var lifes = 7;
			var check3 = false;
			document.getElementById("mistakes").innerHTML = lifes;
			//Randomly chooses the secret word and creates an array with its letters
			var secretWord = words[Math.floor(Math.random() * words.length)];
			var letters = secretWord.split('');
			letters.push(secretWord);
			//Array with all letters used to identify if player entered a repeating letter
			const possibleLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
			//Creates as many <p> elements as many letters in the secret word, and assigns them value of "_" 
			for(var id = 0;id < letters.length-1 ;id++){
				const para = document.createElement("p");
				var chr =  String.fromCharCode(48 + id);
				para.setAttribute("id", chr);
				para.setAttribute("class", "inline");
				const node = document.createTextNode("_");
				para.appendChild(node);
				const element = document.getElementById("letters");
				element.appendChild(para);
			}
			//bool to check if the game ended or not
			var gameEnded = false;
			var guessed = 0;
			//function that gets activated every time the submit button is pressed
			function inputLetter() {
				if(gameEnded == false){
					//Checks if the input is equal to the secret word
					var x = document.getElementById("input").value.toLowerCase();

					if(x == secretWord){
						//Displays a random comment from win array and ends the game
						document.getElementById("comments").innerHTML = win[Math.floor(Math.random() * 5)]
						gameEnded = true;
						//Reveals all the letters of the secret word
						for(var i = 0;i< letters.length ;i++){
							var chr =  String.fromCharCode(48 + i);
							document.getElementById(chr).innerHTML = letters[i]; 
														
						}
						
					}
						
					var check1 = false;
					var check2 = false;
					
					for(var i =0;i<possibleLetters.length;i++){
						//Checks presence of the letter in possible letters
						if(possibleLetters[i] == x){
							//Removes the letter from the array 
							delete possibleLetters[i];
							check2 = true;
							document.getElementById("input").value = "";
							//Checks presence of the letter in the secret word
							for(var id = 0;id < letters.length ;id++){
								
								if(x == letters[id]){
									var chr =  String.fromCharCode(48 + id);
									//Reveals the guessed letter and increases the number of guessed letters by 1
									document.getElementById(chr).innerHTML = x; 
									check1 = true;
									guessed++;
									//Checks if the number of guessed letters is equal to the number of letters in the secret word
									if(guessed == letters.length-1){
										//Displays a random comment from win array and ends the game
										document.getElementById("comments").innerHTML = win[Math.floor(Math.random() * 5)]
										gameEnded = true;
									}
									else
										//Displays a random comment from the right array
									    document.getElementById("comments").innerHTML = right[Math.floor(Math.random() * 5)];
								}
								//Checks if the inputted letter is not in the secret word
								if(id == letters.length-1 && check1 == false){
									//Decreases the lifes by 1, changes the hangman image and displays a comment from the wrong array
								  lifes--;
								  document.getElementById("changeable").src= "Images/Hangmanimages/hangman"+lifes+".png";
								  document.getElementById("comments").innerHTML = wrong[Math.floor(Math.random() * 5)];
								  document.getElementById("mistakes").innerHTML = lifes;
								   //Checks if this is the first wrong letter inputted by the player
								  if(check3 == false){
									  //Adds the wrong letter to the <p> with id "wrong" without a coma before
									  document.getElementById("wrong").innerHTML = document.getElementById("wrong").innerHTML + x;
									  check3 = true;
								  }
								  else
									  //Adds the wrong letter to the <p> with id "wrong" with a coma before
									  document.getElementById("wrong").innerHTML = document.getElementById("wrong").innerHTML + ", "+ x ;
									  //Checks if lifes are equal to 0 
								  if(lifes == 0){
									  //Displays a random comment from the lose array, displays the secret word and ends the game
									  document.getElementById("comments").innerHTML = lose[Math.floor(Math.random() * 5)] + ". The word was " + secretWord;
									  gameEnded = true;
									}
								}
							} 
						}
						
						else{ 
							//Creates an array with the letters of the input
							var idk = x.split(''); 
							//Breaks if input is equal to nothing
							if(x == "")
								break;
							//Checks if the input length is bigger than one
							if(idk.length > 1){ 
							//Decreases the lifes by one, changes the hangman image, displays a random comment from the wrongGuess array and empties the input box
								lifes--;
								document.getElementById("changeable").src= "Images/Hangmanimages/hangman"+lifes+".png";
								document.getElementById("mistakes").innerHTML = lifes;
								document.getElementById("comments").innerHTML = wrongGuess[Math.floor(Math.random() * 5)];
								document.getElementById("input").value = "";
								break;
							} 
							//Checks if the input is a letter 
							else if( x.toUpperCase() == x.toLowerCase() ) {
								//Displays a random comment from the notLetter array and empties the input box
								document.getElementById("comments").innerHTML = notLetter[Math.floor(Math.random() * 5)];
								document.getElementById("input").value = "";
								break;
							}
							//Checks if the inputted letter is repeated
							else if(i == possibleLetters.length-1 && check2 == false){
								//Displays a random comment from the repeated array and empties the input box
								document.getElementById("comments").innerHTML = repeated[Math.floor(Math.random() * 5)];
								document.getElementById("input").value = "";
							}
						}
					}
				}
			} 

			//Function that reloads the page
			function reload(){
				location.reload();
			}