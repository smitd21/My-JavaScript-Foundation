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

//* We can use includes method to write conditions -- useful application
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

//Assignment 5 ✅
const populations = [1441, 1409, 97, 67, 1015];
console.log(populations);
const percentages = [];

const percentageOfWorlds = (population) => {
  const worldPopulation = 7900;
  const percentage = (population / worldPopulation) * 100;
  return percentage;
};
const per1 = percentageOfWorlds(populations[populations.length - 5]); //0
const per2 = percentageOfWorlds(populations[1]);
const per3 = percentageOfWorlds(populations[populations.length - 3]); //2
const per4 = percentageOfWorlds(populations[3]);
const per5 = percentageOfWorlds(populations[populations.length - 1]); //4

percentages.push(per1, per2, per3, per4, per5);
console.log(percentages);

//Assignment 6 ✅

const neighbours = ['Germany', 'France', 'Spain', 'Italy'];
console.log(neighbours.push('Utopia')); //5
console.log(neighbours);
console.log(neighbours.pop());
if (neighbours.includes('Germany')) {
  console.log(`A central European country:D`);
} else {
  console.log(`Probably not a central European country :D`);
}
if (neighbours.includes('India')) {
  console.log(`India in Europe wth!!!`);
} else {
  console.log(`India is in Asia bruhhh!!`);
}
console.log(neighbours.indexOf('Spain'));
//Replacing Spain with Iceland
neighbours[neighbours.indexOf('Spain')] = 'Iceland';
console.log(neighbours); //(4)['Germany','France','Iceland','Italy']

console.log(neighbours.unshift('Sweden')); //5
console.log(neighbours); //(5)['Sweden','Germany','France','Iceland','Italy']
console.log(neighbours.indexOf('Sweden')); //0
//Replacing Sweden with Republic of Sweden
neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden';

console.log(neighbours); //(5)['Republic of Sweden','Germany','France','Iceland','Italy']

//Coding Challenge #2 ✅
const calcTip = (bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  return tip;
};
const bills = [125, 555, 44];
console.log('Bills w/o tips: ', bills);

const tip1 = calcTip(bills[bills.length - bills.length]);
const tip2 = calcTip(bills[bills.length - (bills.length - 1)]);
const tip3 = calcTip(bills[bills.length - (bills.length - 2)]);
const tips = [];
tips.push(tip1, tip2, tip3);
console.log('Tips :', tips); //[18.75,111,52.8]

const calcTotalBill = (tip, billAmt) => {
  const bill = tip + billAmt;
  return bill;
};
//console.log(tips[0], bills[0]);
const t1 = calcTotalBill(tips[0], bills[0]);
const t2 = calcTotalBill(tips[1], bills[1]);
const t3 = calcTotalBill(tips[2], bills[2]);
const total = [];
total.push(t1, t2, t3);
console.log('Total Bill Amounts : ', total); //[143.75,666,52.8]

/*
! Array can have any type in a same array ALSO an array can be inside an array too
  Sab chalega

! PUSH  - Add at the back
! UNSHIFT - Add in Front

! POP - Remove from back
! SHIFT - Remove from front

! .indexOf('Korea') - if Exists give it's position index if not gives output as -1 if consoled

! .includes('Korea') - if Exists give output true or else false
    Uses Strict equality like in switch case
    Can be used in condtional statements/ternary expression
*/

//---------------------------------------------------------------------------------------

//* Introduction to Objects

const smitArray = ['Smit', 'Desai', 2021 - 2000, 'web developer', friends];
console.log(smitArray);

/*
Object Literal Syntax : bcoz we are literally wrting down the entire object content

const smitObject = {
  //Key: property,
  firstName: 'Smit',
  lastName: 'Desai',
  age: 2021 - 2000,
  job: 'web developer',
  friendsList: friends,
};
console.log(smitObject);


! Big Difference between object and arrays, is that in objects, the order of these values doesn't matter at all when we want to retrieve them.

! In Arrays the order in which we specify the elements matters alot bcoz that's how we access/get data of the array elements using their order number

* That's why we should use Array for more ordered data
* & Objects for more unstructured data
*/

/* 
* Retrieve data from objects 
* & also learn how to change data in objects using both the dot and bracket notation

As we said earlier the order of the object doesn't matter while accessing the data
That's because we simple get the properties value from the object using the property name itself
*/

//! Important Example for OBJECTS

const smitObject = {
  //Key: property,
  firstName: 'Smit',
  lastName: 'Desai',
  age: 2021 - 2000,
  job: 'web developer',
  friendsList: friends,
};
//Ways to retrieve data from an object
console.log(smitObject);
//! 1. Dot Notation
console.log(smitObject.job); // web developer
console.log(smitObject.lastName);
//! 2. Bracket Notation
console.log(smitObject['age']);
console.log(smitObject['friendsList']); //(7)['Guru', 'Neel','Parth','Akshil','Bhavya','Shiven',23]

const nameKey = 'Name';
console.log(smitObject['first' + nameKey]); //Smit
console.log(smitObject['last' + nameKey]); //Desai
//'first' + anything = it'll obviously goint to get concat since string + anything = string from Fundament-Part01

const interestedIn = prompt(
  `What do you want to know about Jonas? Choose between firstName, lastName,age, job and friendsList`
);
/*
switch (interestedIn) {
  case 'firstName':
    console.log('Hola my name is:', smitObject['firstName']);
    break;
  case 'lastName':
    console.log('My last Name is :', smitObject['lastName']);
    break;
  case 'age':
    console.log(`My Age is ${smitObject['age']}:`);
    break;
  case 'job':
    console.log(`Smit works as  a ${smitObject['job']}`);
    break;
  case 'friendsList':
    console.log(`My friends are :`, smitObject['friendsList']);
    break;
  default:
    console.log(`Ask whatever we ask you to :((`);
}
*/
//* OR simplyy
//console.log(smitObject[interestedIn]);

//If u enter in prompt anything else other than the data(property) we have it gives output as undefined right
// Since undefined is a falsy value (will go into else obviously)

if (smitObject[interestedIn]) {
  console.log(smitObject[interestedIn]);
} else {
  console.log(`Ask whatever we ask you to :((`); //Same as our default in the switch
}

//! Add new properties to an Object using Dot and Bracket
//Property to be added: location & twitter

// IT's pretty straight forward right you just
//! ADD properties/values to objects
smitObject.location = 'Mumbai'; //Dot
smitObject['twitter'] = 'smitcodes'; //Bracket

console.log(smitObject);
/*
age: 21
firstName: "Smit"
friendsList: (7) ["Guru", "Neel", "Parth", "Akshil", "Bhavya", "Shiven", 23]
job: "web developer"
lastName: "Desai"
location: "Mumbai"
twitter: "smitcodes"
*/

// const noOfFriends = smitObject['friendsList'];
// console.log(noOfFriends);
console.log(
  `${smitObject['firstName']} has ${smitObject['friendsList'].length} friends, and his bestfriend is called ${smitObject['friendsList'][0]}`
);
//Smit has 7 friends and his bestfriend is called Guru

//FYI: In operator precedence the Dot '.' have a very high priority so it goes from left-to-right so
//* smitObject['friendsList'].length works properly as it GOES FROM LEFT-TO-RIGHT

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Assignment 7 ✅
const myCountry = {
  country: 'India',
  capital: 'Delhi',
  language: 'Hindi',
  population: '1395',
  neighbours, //neighbours: neighbours,
};
console.log(myCountry);
//{country: "India", capital: "Delhi", language: "Hindi", population: "1409", neighbours: Array(5) i.e neighbours: (5) ["Republic of Sweden", "Germany", "France", "Iceland", "Italy"]}

// Assignment 8 ✅
//* Using Dot Notation
console.log(
  `${myCountry.country} has ${Number(myCountry.population) + 2} million ${
    myCountry.language
  }-speaking people, ${
    myCountry.neighbours.length
  } neighbouring countries and a capital called ${myCountry.capital}`
);
//* Using Bracket Notation
console.log(
  `${myCountry['country']} has ${myCountry['population'] - 2} million ${
    myCountry['language']
  }-speaking people, ${
    myCountry['neighbours'].length
  } neighbouring countries and a capital called ${myCountry['capital']}`
);

//For adding 2 you'll need to convert it into Number first or else it'll concat
//Number(myCountry.population)+2 = 1397
//For subtract,(mul,div) no need to do anything it'll automatically convert to number
//myCountry.population-2; = 1393

/*
* Object Methods

* Objects can hold any type of values inside it can alo be an array as well as object inside object

! Earlier we said that FUNCTIONS are really just another type of value
And if a function is just  a value that means that we can create a key value pair in which the value is a function
* => A function can be a value of a key 
! i.e WE CAN ADD FUNCTIONS TO OBJECTS
*/

//New Smit Object holding all kind of data types
const newSmitObject = {
  firstName: 'Smit',
  lastName: 'Desai',
  birthYear: 2000,
  job: 'web developer',
  friends,
  hasDriversLicense: true,
  //Adding a function to object - similar to how we define normal fn. ==> just colon instead of =
  calcAge: function (birthYear) {
    return 2021 - birthYear;
  },
};
console.log(newSmitObject);
console.log(newSmitObject['friends']);

//Calling the function when u need to use its data/value

// A web developer of age 21
//! Dot Notation
console.log(`A ${newSmitObject.job} of age ${newSmitObject.calcAge(2000)}`);
//! Bracket Notation - imp
console.log(
  `A ${newSmitObject['job']} of age ${newSmitObject['calcAge'](2000)}`
);

//! OR use the birthYear from the object Itself

//* METHOD 1: - You're repeating code everytime using the values
console.log(
  `A ${newSmitObject.job} of age ${newSmitObject.calcAge(
    newSmitObject.birthYear
  )}`
);
//newSmitObject.calcAge(newSmitObject.birthYear) ==> newSmitObject['calcAge'](newSmitObject['birthYear'])
console.log(
  `A ${newSmitObject['job']} of age ${newSmitObject['calcAge'](
    newSmitObject['birthYear']
  )}`
);

//! METHOD 2 : V IMPORTANT
//In every method JS gives us access to a special variable called this.
//this keyword will point to the parent object and give entire object values inside the parent object if you use this

const smit = {
  firstName: 'Smit',
  lastName: 'Desai',
  birthYear: 2000,
  job: 'web developer',
  friends,
  hasDriversLicense: false,
  //Method 1: see above
  // calcAge: function (birthYear) {
  //   return 2021 - birthYear;
  // },

  //Method 2:
  //calcAge: function () {
  //console.log(this); //this is entire smit (parent) object - can take any value from it
  //return 2021 - this.birthYear; //!  so this.birthYear = smit.birthYear -- you can use smit.birthYear too but if you in case change the main object name you'll have to change everywhere also and also you are violating the don't repeat yourself principle so better use this
  //this.birthYear will give you the value no matter what the object name is even if it changes => never hardcode the object name just use this.
  //},

  //! Method 3: Efficient Way
  //You can even add new properties using this
  calcAge: function () {
    //Add age property when calcAge is called
    this.age = 2021 - this.birthYear;
    return this.age;
  },
  //! Getting All the Data from the same parent object so using THIS keyword
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    } and he ${
      this.hasDriversLicense ? 'has' : `doesn't have`
    } a driver's license !!`;
  },
};
// console.log('Age :', smit.calcAge()); //You have to call calcAge to use smit.age
// console.log('Efficient Age :', smit.age);

//Challenge
smit.calcAge(); //call calcAge to use smit.age - tho it gives the age too since the age is returned
// One can use smit.age now once it's already been called once (above)
console.log(
  `${smit.firstName} is a ${smit.age}-year old ${smit.job} and he ${
    smit.hasDriversLicense ? 'has' : `doesn't have`
  } a drivers license !!`
);
//Can Use only smit.calcAge() since the value of age is returned -- good practise -- it'll give age as output
console.log(
  `${smit.firstName} is a ${smit.calcAge()}-year old ${smit.job} and he ${
    smit.hasDriversLicense ? 'has' : `doesn't have`
  } a drivers license !!`
);

//! Using this i.e getSummary function
console.log('USING THIS:', smit.getSummary());

//Arrays ar also special kind of objects so they can also have built in methods/functions like push,pop,etc to manipulate them
//Here in objects we created our own methods on our own objects

// Assignment 9 ✅
const myCountry1 = {
  country: 'India',
  capital: 'Delhi',
  language: 'Hindi',
  population: '1395',
  neighbours, //neighbours: neighbours,
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },
  checkIsIsland: function () {
    //this.isIsland = this.neighbours.length === 0 ? true : false;
    //! even simpler - IMPORTANT
    this.isIsland = !Boolean(this.neighbours.length);

    return this.isIsland;
  },
};
console.log(myCountry1.describe());
console.log('isIsland :', myCountry1.checkIsIsland());
console.log(myCountry1);
/*
{country: "India", capital: "Delhi", language: "Hindi", population: "1395", 
neighbours:(5) ["Republic of Sweden", "Germany", "France", "Iceland", "Italy"], isIsland: false}
*/

//Coding Challenge #3 ✅
const mark = {
  firstName: 'Mark',
  lastName: 'Smith',
  mass: 78,
  height: 1.69,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  firstName: 'John',
  lastName: 'Miller',
  mass: 92,
  height: 1.95,
  calcBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
console.log(`Mark's BMI :`, mark.calcBmi()); //! Called
console.log(`John's BMI :`, john.calcBmi()); //! Called
//! Now this.bmi property is added once calcBmi is called either use calcBMI() everywhere since it is returned or directly use mark.bmi/john.bmi like below
// So no violation of REPEATING CODES
console.log(`Mark's BMI :`, mark.bmi);
console.log(`John's BMI :`, john.bmi);
if (mark.bmi > john.bmi) {
  console.log(
    `${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi}) is higher than ${john.firstName} ${john.lastName} BMI (${john.bmi}) `
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.firstName} ${john.lastName}'s BMI (${john.bmi}) is higher than ${mark.firstName} ${mark.lastName} BMI (${mark.bmi}) `
  );
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
* Iteration - The for Loop
console.log(`Lifting weights repitition 1 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 2 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 3 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 4 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 5 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 6 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 7 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 8 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 9 🏋🏼‍♂️`);
console.log(`Lifting weights repitition 10 🏋🏼‍♂️`);
! Violating Repitition of Code principal
That is why we use Loops
*/
//* for(initializaion;condition;increment/decrement)

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repitition ${rep} 🏋🏼‍♂️`);
}
//It'll print 10 times from 1 to 10

// Assignment 10 ✅
for (let v = 1; v <= 50; v++) {
  console.log(
    `Voter number ${v} is currently voting ${
      v <= 49
        ? `get ready ${v + 1} you're next up!`
        : 'And then the voting ends :))'
    }`
  );
}

//* Looping Arrays, Breaking and Continuing
const smitLoop = ['Smit', 'Desai', 2021 - 2000, 'web developer', friends, true];

const typesArray = [];

/*
* To access each element of this array we do:
console.log(smitLoop[0])
console.log(smitLoop[1])
console.log(smitLoop[2])
console.log(smitLoop[3])
console.log(smitLoop[4])
*/
for (let i = 0; i < smitLoop.length; i++) {
  //Reading from smitLoop array
  console.log(`Element no. ${i} :`, smitLoop[i], typeof smitLoop[i]);

  //* Filling the types array
  //typesArray[i] = typeof smitLoop[i];
  // using push
  typesArray.push(typeof smitLoop[i]);
}
console.log(typesArray);
/*
Element no. 0 : Smit
Element no. 1 : Desai
Element no. 2 : 21
Element no. 3 : web developer
Element no. 4 : (7) ["Guru", "Neel", "Parth", "Akshil", "Bhavya", "Shiven", 23]
*/

//Practise
const yearsArray = [1991, 2007, 1969, 2020];
const ageArray = [];
for (let i = 0; i < yearsArray.length; i++) {
  console.log(`Years :`, yearsArray[i]);

  //ageArray[i] = 2021 - yearsArray[i];
  // using push
  ageArray.push(2021 - yearsArray[i]);
  //! What we are doing here is adding the element to ageArray individual by subtracting it by 2021 one by one in iterations
}
console.log('Age of the array items: ', ageArray);

/*
Continue and break
! continue : exit the current iteration of the loop and continue to the next one
! break : completely terminate the whole loop
*/
const smitLoop1 = [
  'Smit',
  'Desai',
  2021 - 2000,
  'web developer',
  friends,
  true,
];
console.log(smitLoop1);
// typesArray of smitLoop1 = (6) ["string", "string", "number", "string", "object", "boolean"]

//Log only the string type elements everytime
console.log(`---ONLY STRING---`);
for (let i = 0; i < smitLoop1.length; i++) {
  if (typeof smitLoop1[i] !== 'string') continue; //exit current iteration immediately if not a string
  console.log(smitLoop1[i], typeof smitLoop1[i]);
}

//Keep Logging until you found a number
console.log('---BREAK WITH NUMBER---');
for (let i = 0; i < smitLoop1.length; i++) {
  if (typeof smitLoop[i] === 'number') break; //Terminate entire code if you find a number or else keep logging
  console.log(smitLoop1[i], typeof smitLoop1[i]);
}
//! Number aaya toh break i.e execute the entire code
