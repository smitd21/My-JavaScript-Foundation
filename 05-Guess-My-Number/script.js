'use strict';
/*
console.log(document.querySelector('.message')); //Logs the whole element
//* Logs the text content
console.log(document.querySelector('.message').textContent);

//* Set the content to something else
document.querySelector('.message').textContent = '🎉 Correct Number !';
console.log(document.querySelector('.message').textContent); //Log the NEW content
document.querySelector('.number').textContent = 3;
document.querySelector('.score').textContent = 10;

//* To get the value of the input field
console.log(document.querySelector('.guess').value);

//* To Set the value of the input field
document.querySelector('.guess').value = 15;
*/

//* Important - addEventListener(event,whatToDo)
document.querySelector('.check').addEventListener('click', () => {
  //const guess = document.querySelector('.guess').value;
  //console.log(guess, typeof guess); // 21 string //! Usually whever we get something from the user interface, for example an input field, a prompt -- IT USUALLY ALWAYS IS A STRING
  //SO CONVERT TO A NUMBER FIRST
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // 21 "number"
});
//! Above We have just define the function and not called it right?
//! But it is the JS engine who will call the function as soon as (and only when) the event happens !!!!
