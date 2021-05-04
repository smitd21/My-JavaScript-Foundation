'use strict'; // to write secure code that means to avoid accidental errors
// - it forbids us to do certain things
// - helps us to create visible errors bugs in our developer console for us in cases where w/o strict mode fail silently w/o letting us know we did a mistake

let hasDriversLicense = false;
const passTest = true;
//if (passTest) hasDriverLicense = true;
//here above we forgot an 's' in hasDriversLicense
//so because of use strict mode; only we got to know about this error
//on the other hand w/o the strict mode wouldn't had identified this error and would've executed properly hehe lol

if (passTest) hasDriversLicense = true; //correct code
if (hasDriversLicense) console.log(`I can drive :D`);

//Also when we use a reserved word or going to get reserved in future strict mode also let us know about it and throw that error
//const interface = 'Audio'; //!ERR interface - unexpected strict mode reserved word
//*interface might get reserved in future this type of errors can also be shown using strict woww!!

//same for private and etc..
//const private = 534; -- //!future reserved word 'private'
//const if = 'unless'; -- //!reserved word it is 'if'

//-------------------------------------------------------------------------------------
//* Functions - block of code that we want to reuse. (CLEAN CODE)
function logger() {
  console.log(`My name is Smit`);
}

//calling / running / invoking functiion
logger();
logger();
logger(23); //No parameters are taken by this function even if you pass it does'nt matter it'll run same as above

/*
! FUNCTION produces a value so always it should be return
(actually in JS functions are just values)

let customerChoice = prompt(`What type of juice you prefer ?`);

//Juice maker
function fruitProcessor(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

switch (customerChoice) {
  case 'cocktail':  //customerChoice === 'cocktail' In Switch always strict equality works
    const mixJuice = fruitProcessor(7, 6);
    console.log(`Here is your Cocktail Juice :`, mixJuice);
    break;
  case 'apple': //customerChoice === 'apple'
    const appleJuice = fruitProcessor(7, 0);
    console.log(`Here is your Apple Juice  :`, appleJuice);
    break;
  case 'orange':
    const orangeJuice = fruitProcessor(0, 8);
    console.log(`Here is your Orange Juice :`, orangeJuice);
    break;
  default:
    console.log('So sorry :) We have only cocktail, orange and apple juice!!');
}
*/
//Clean code principle : Do not repeat yourself or dry
//Functions are perfect for implementing dry code as they're reusable code blocks

//eg: console.log, Number() are also  inbuilt function hehe as we call that everytime

//Assignment 1 ✅
function describeCountry(country, population, capitalCity) {
  const countryInfo = `${country} has ${population} million people and its
    capital city is ${capitalCity}`;
  return countryInfo;
}
console.log(describeCountry('India', 132, 'Delhi'));
console.log(describeCountry('Finland', 6, 'Helsinki'));
console.log(describeCountry('United States', 32, 'Washington D.C.'));

//---------------------------------------------------------------------------------------------

//* Function Declarations vs Expressions

// ---- function declaration ---- The functioncan be called before declaration also
function calcAge1(birthYear) {
  //return 2021-birthYear;
  const currentYear = 2021;
  const age = currentYear - birthYear;
  return age; //! return value always is important
}
console.log(`Your age is :`, calcAge1(2000));

// ---- function expression ---- The function cannot be called before declaration

//(actually in JS:  functions are just values so if it's a value, we can store it in a variable right !!) so storing it in a variable....
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};
console.log(`Your age is: `, calcAge2(1997));

//or

//Arrow Function
const calcAge3 = (birthYear) => {
  return 2021 - birthYear;
};
console.log(`Your age is :`, calcAge3(2004));

/*
! Difference : 
You can ONLY call a *function declaration* (calcAge1) before they are defined in the code 
but function expression and arrow(calcAge2 & calcAge3) cannot be called before declaring -> !ERR - Cannot access 'calcAge2' before initialization

And internally this happens because of a process called 'HOISTING' - that will study later

*Preference to use Function expression or Arrow fn. (calcAge2 or calcAge3) - coz it should be call only after defining and then calling 
*/

//* Arrow function (continue)

//Passing 2 parametes
const yearsUntilRetirement = (birthYear, firstName) => {
  const currentAge = 2021 - birthYear;
  const retirementAge = 70;
  return `${firstName} is going to retire in ${
    retirementAge - currentAge
  } years`;
};
//Calling the function
console.log(yearsUntilRetirement(2000, 'Messi')); //passed the arguments
console.log(yearsUntilRetirement(1998, 'Ronaldo'));
console.log(yearsUntilRetirement(1998, 'Neymar'));

//Assignment 2 ✅
//using Function Declaration
function percentageOfWorld1(country, population) {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  return `${country} has ${population} million people, so it's about ${percentage} of the world population.`;
}
console.log(percentageOfWorld1('China', 1441));
console.log(percentageOfWorld1('India', 1409));
console.log(percentageOfWorld1('UK', 67));

//using Function Expression

const percentageOfWorld2 = function (country, population) {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  return `${country} has {population} people, so it's about ${percentage} of the world population.`;
};
console.log(percentageOfWorld2('China', 1441));
console.log(percentageOfWorld2('India', 1409));
console.log(percentageOfWorld2('UK', 67));

//Assignment 3 ✅
//using Arrow Function
const percentageOfWorld3 = (country, population) => {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  return `${country} has ${population} million people, so it's about ${percentage} of the world population`;
};
console.log(percentageOfWorld2('China', 1441));
console.log(percentageOfWorld2('India', 1409));
console.log(percentageOfWorld2('UK', 67));

//-----------------------------------------------------------------------

//* Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}
function fruitProcessor1(apples, oranges) {
  //! Calling of cutFruitPieces function in this function because we need the cutting of fruits functionality
  //using FUNCTION EXPRESSION      (in function declaration hehe soo both are important u to know)
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
}
console.log(fruitProcessor1(3, 9));

//* Using seperate functions and calling of 1 in another function is actually a VERY GOOD PRACTISE
//Now if u want to decrease the number of pieces of fruit in a juice u dont't have to change everywhere
//Just go to cutFruitPieces fn and change the return fruit * no. of pieces u want

//Assignemt 4 ✅

const percentageOfWorld = function (population) {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  return percentage;
};
const describePopulation = (country, population) => {
  const percentage = percentageOfWorld(population);
  return `${country} has ${population} million people, which is about ${percentage} of the world.`;
};
console.log(describePopulation('China', 1440));
console.log(describePopulation('India', 1409));
console.log(describePopulation('UK', 67));

//* Reviewing Functions

const calculateAge = (birthYear) => {
  if (birthYear < 2021) {
    const age = 2021 - birthYear;
    return age; //!Never forget to return what you want
  } else {
    console.log(`You aren't born yet `);
  }
};
function noOfyearsUntilRetirement(firstName, birthYear) {
  const age = calculateAge(birthYear);
  if (age > 0) {
    const retirementAge = 70;
    const yearsLeft = retirementAge - age;
    if (yearsLeft === 0) {
      return `${firstName} you worked your ass off now enjoy your life!!`;
    } else if (yearsLeft < 0) {
      return `${firstName} I hope you're just enjoying your life`;
    } else {
      return `${firstName} you got ${yearsLeft} years left until your retirement, Work Hard Nowww !!!`;
    }
  } else {
    console.log(`You aren't born yet `);
  }
}
console.log(noOfyearsUntilRetirement('Smit', 2000));
console.log(noOfyearsUntilRetirement('Jonas', 1951));
console.log(noOfyearsUntilRetirement('Jim', 1940));

//! If in a function if something is written after the return ___ ; it'll be ignored & not executed. Return means end/terminate the function.

//--------------------------------------------------------------------------------------------------------------------------------------------------------

//Coding Challenge #1 ✅

const calcAverage = (a, b, c) => (a + b + c) / 3;

//Test Data
const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(65, 54, 49);

//Test Data 2
//const avgDolphins = calcAverage(85, 54, 41);
//const avgKoalas = calcAverage(23, 34, 27);

console.log(`Dolphins : ${avgDolphins} vs Koalas : ${avgKoalas}`);

const checkWinner = (A, B) => {
  if (A >= B * 2) {
    console.log(`Dolphins win !! cuz ${A} vs ${B}`);
  } else if (B >= A * 2) {
    console.log(`Koalas win !! cuz ${B} vs ${A}`);
  } else {
    console.log(
      `No team wins :(( cuz ${A} vs ${B} as no team have atleast the double of the other`
    );
  }
};
checkWinner(avgDolphins, avgKoalas);
//Test Data 1: No one win (46vs56) & Test Data 2: Dolphin wins!! (60vs28)
checkWinner(576, 112); //A>B*2
checkWinner(102, 326); //B>A*2

// Practise

/*
const customerChoice = prompt(`Enter your order:`);

const glasses = (glass) => {
  return glass * 4;
};

const bartender = (beer, vodka, whiskey) => {
  const beerGlasses = glasses(beer);
  const vodkaGlasses = glasses(vodka);
  const whiskeyGlasses = glasses(whiskey);
  return `Your order : ${beerGlasses} beers, ${vodkaGlasses} vodkas & ${whiskeyGlasses} whiskeys !!`;
};

switch (customerChoice) {
  case 'all':
    console.log(bartender(1, 1, 1));
    break;
  case 'beer':
    console.log(bartender(1, 0, 0));
    break;
  case 'vodka':
    console.log(bartender(0, 1, 0));
    break;
  case 'whiskey':
    console.log(bartender(0, 0, 1));
    break;
  default:
    console.log(`Choose between beer vodka and whiskey!!`);
}
*/
//-------------------------------------------------------------------------------------------------------------

//! Two Important Data Structures in JavaScript are ARRAYS & OBJECTS

//* Introduction to Arrays

//Array can hold any type of values and also unlimitec

const friends = ['Michael', 'Steven', 'Peter'];
console.log(`Friend's Array : ${friends}`);
console.log('Type of Array: ', typeof friends); //Object

//Another method to define an array

const years = new Array(1999, 1875, 2007, 2001, 2012, 2020);

//Take out element of an array
console.log(friends[0]); //Michael
console.log(friends[2]); //Peter
//Length of an array
console.log(friends.length); //3

//Find the last element of an array - Always length-1
console.log(friends[friends.length - 1]); //friends[2]

//! Expression - Gives a values & Statement doesn't
//friends[expressions] --- inside the bracket there should be an expression/value & NOT A STATEMENT

//* Arrays are MUTABLE - Any value can be changed anytime
//friends = ['Michael','Steven','Peter']
friends[friends.length - 2] = 'Akshil'; //Change the second last element to Smit
friends[0] = 'Parth';
friends[friends.length - 1] = 'Bhavya';
console.log(friends); //(3) ['Parth','Smit','Bhavya']

/*
! friends was declared with const then why it can be changed
Isn't that a contradiction becoz const value cannot be changed
Ans : NO !!
* Only Primitive values, are immutable but ARRAY is not a primitive
* SO WE CAN ACTUALLY ALWAYS CHANGE IT SO WE CAN MUTATE IT

* Conclusion : CAN MUTATE ARRAYS ANYWHERE/ANYTIME even though if it is declared with const

! BUT the ENTIRE array cannot be replaced just the elements of the array can be changed
const friends = ['Bob', 'Alice', 'Jonas'];  //!ERR friends already declared
*/

//* Array can hold different types at the same time
const firsName = 'Smit';
const diffTypesArray = [firsName, 2000, 'Web Developer', 2021 - 2000, friends];
console.log(diffTypesArray);
//(5) ['Smit', 2000, 'Web Developer',21,['Parth','Akshil','Bhavya']]
console.log(diffTypesArray.length); //5

//example
const ageCalc = (birthYear) => {
  return 2021 - birthYear;
};
const ageYears = [1990, 1967, 2000, 2010, 2018];
// ageCalc(year)  year hona chahiye andar - ek value
const age0 = ageCalc(ageYears[ageYears.length - 5]);
const age1 = ageCalc(ageYears[ageYears.length - 4]);
const age2 = ageCalc(ageYears[ageYears.length - 3]);
const age3 = ageCalc(ageYears[ageYears.length - 2]);
const age4 = ageCalc(ageYears[ageYears.length - 1]);

console.log(ageYears);
const yoAges = [age0, age1, age2, age3, ageCalc(ageYears[ageYears.length - 1])];
//FYIII : In ageCalc(ageYears[ageYears.length - 1]) placed in last position JS will first call the function and then place the value in the Array
console.log(yoAges);

//* Basic Array Operations
//friends = ['Parth', 'Akshil', 'Bhavya'];

//! PUSH   -- add element to the end of the array
let newestLength = friends.push('Shiven', 'Jaiveer'); // This'll push these elements to the array
//but also it returns/gives the new final length of the array after pushing that many new elements into the array that's awesome
console.log(newestLength); //5  - length after adding latest elements
console.log(friends);
//friends = ['Parth', 'Akshil', 'Bhavya','Shiven', 'Jaiveer'];

//! unshift -- add elements to the beginning of the array
newestLength = friends.unshift('Amay', 'Guru', 'Neel');
console.log(newestLength); //8 -- length after adding latest elements
console.log(friends);
// (8) ['Amay','Guru','Neel','Parth','Akshil','Bhavya','Shiven','Jaiveer']

//! POP - remove the last element of the array (Opposite of push)
let popped = friends.pop();
console.log(popped); //Jaiveer - The one that's popped which was at the last
console.log(friends);
//(7) ['Amay','Guru','Neel','Parth','Akshil','Bhavya','Shiven']

//! Shift - remove the first element of the array (Opposite of unshift)
popped = friends.shift();
console.log(popped); //Amay - first element
console.log(friends);
//(6) ['Guru','Neel','Parth','Akshil','Bhavya','Shiven']

//! indexOf - To know the position of a certain element in the array

//(6) ['Guru','Neel','Parth','Akshil','Bhavya','Shiven']
console.log(friends.indexOf('Akshil')); //3
console.log(friends.indexOf('Bhavya')); //4
//If an element is not in the array and u ask index of that it will give -1
console.log(friends.indexOf('Ronaldo')); //* -1 - not in the array so cannot find index it'll give -1

//A similar ES6 modern method -
//! includes - return true if the element is in the array & false if it's not
//* This method uses STRICT Equality for this check (like in switch)
console.log(friends.includes('Ronaldo')); //false
console.log(friends.includes('Bhavya')); //true
console.log(friends.includes('Shiven')); //true
friends.push(23);
console.log(friends.includes('23')); //false -- coz using STRICT
console.log(friends.includes(23)); //true

//! We can use includes method to write conditions -- useful application
if (friends.includes('Ronaldo')) {
  console.log(`You have a friend called Ronaldo`);
} else {
  console.log(`You can just dream to be friends with Ronaldo`);
}

if (friends.includes('Akshil')) {
  console.log(`You have a friend called Akshil`);
} else {
  console.log(`You can just dream to be friends with Ronaldo`);
}
