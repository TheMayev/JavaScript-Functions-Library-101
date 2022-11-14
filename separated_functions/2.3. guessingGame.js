// Guessing Game


let xx = generateRandom9();

// functions assigned to global variables. 

function generateRandom9() {
  let number = Math.random();
  let oneNine = (number * 9) + 1;
  let finalNumber = Math.floor(oneNine)
  return finalNumber;
}
// generates random number from 1-9. 

function userGuess() {
  let userInput = prompt("Guess number 1-9: ");
  userInput = Number(userInput);
  return userInput
}
// takes input from the user 


function guessNumber() {
  xx = generateRandom9(); // generates random number 1-9
  yy = userGuess(); // takes input from user

  while(yy !== xx) { // takes the input untill the guess is correct
    if (yy > xx) {
      alert("Less"); // if the number is smaller than input, program will alert user
      // that it should be smaller number 
      yy = userGuess(); 
    } else if (yy < xx) {
      alert("MOOOOR"); // if the number is bigger than input, program will alert
      // user that it should be bigger number
      yy = userGuess();
    }  
  }
  if(yy === xx) {
    console.log("Yay. You guessed right.");
    // if the number is guessed correctly - it will print in console message. 
  }
}

guessNumber();