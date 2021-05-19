'use strict';
/*
console.log(document.querySelector('.message')); //Logs the whole element
//* Logs the text content
console.log(document.querySelector('.message').textContent);

//* Set the content to something else
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent); //Log the NEW content
document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = 10;

//* To get the value of the input field
console.log(document.querySelector('.guess').value);

//* To Set the value of the input field
document.querySelector('.guess').value = 15;
*/

/*
Keeping these below data and trigger itself in the code not in DOM 
(not by manipulating the dom using doc.textContent change data and all but trigger from the code itself)
Called as State Data
As we want out data somewhere in code and not just in DOM - Code bhi kch krna chahiye naa not just all DOM work
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; // + 1 for including 20 & trunc to remove decimal
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
}; // To follow the DRY (donotrepeatyourself) Principle as this was repeating again and again so we use it in a function and just pass the message when u call it

//document.querySelector('.number').textContent = secretNumber; //changed the class ka text whatever it is

//* Important - addEventListener(event, whatToDo - A function)
//! Here We just have to define the function and not call it right?
//! But it is the JS engine who will call the function as soon as (and only when) the event happens !!!!
document.querySelector('.check').addEventListener('click', () => {
  //const guess = document.querySelector('.guess').value;
  //console.log(guess, typeof guess); // 21 (in white) string //! Usually whever we get something from the user interface, for example an input field, a prompt -- IT USUALLY ALWAYS IS A STRING

  //SO CONVERT TO A NUMBER FIRST
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // 21 (in purple) "number"

  //No input
  if (!guess) {
    //Falsy  - When no input (Falsy Values: "",undef,nan,null,0)
    //document.querySelector('.message').textContent = '⛔ No Number!';
    //* Using the function displayMessage
    displayMessage('⛔ No Number!');
  }
  //When the player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    //Also display the correct secret number
    document.querySelector('.number').textContent = secretNumber; //middle box

    //! Class/id/body,etc as well as the property all should be STRING
    //* While changing the css use the style. property and further the CSS property should be camelCased and the value always need to be a string
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem'; //middle box

    /// Setting the highScore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When guess is wrong -> (Show High or low) Also ->(decrease the Score by 1)
  else if (guess !== secretNumber) {
    if (score > 1) {
      // Score>1 -->  STILL PLAYING  the game and score is decrementing

      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!'); //! Your guess>secretNumber show Too high guess<secretNumber sho Too Low)
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //Score<1 --> SHOW Lost game & Score = 0 - The End
      //document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//! Again -> RESET GAME
document.querySelector('.again').addEventListener('click', () => {
  console.log('RESET GAME');
  score = 20; // The Total score which is handled by code and not DOM
  secretNumber = Math.trunc(Math.random() * 20) + 1; // To again generate the next Value to be guessed
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ''; // Input therefore value and is always a string so it initalisez with empty string

  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
