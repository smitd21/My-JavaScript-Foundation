//* JavaScript Basics 101
//JavaScript Fundamentals – Part 1
let user = 'Smit';
//if (user === 'Smit') alert('Welcome to the Fight Club!!!');
console.log(40 + 8 + 23 + 47 - 89);

//Boolean
let javascriptIsFun = true;
console.log(javascriptIsFun); //true

//typeOf
console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 'Ronaldo'); //string  quotes important
console.log(typeof user); //string

//var - redeclare✅ redefine✅
//let - redeclare❌ redefine✅
//const - redeclare❌ redefine❌

//Dynamic Typing
//Do not use let again as it cannot be redeclared but can be REDEFINED
javascriptIsFun = 'I know right!';
console.log(typeof javascriptIsFun); //string<--boolean
let year;
console.log(year); //undefined
console.log(typeof year); //undefined

//*But typeof null shows as object -- A BUG in JS
console.log(typeof null); //!object

//Redefining the year
year = 2021;
//console.log(typeof year); //number
var yearDataType = typeof year;
console.log(
  'Current year is: ' + year + ' and its datatype is a ' + yearDataType
);

//Assignment 1 ✅
let country = 'India';
let contient = 'Asia';
let population = 139;
console.log('My Country name is :', country);
console.log('India comes under ' + contient);
console.log('Population of ' + country + ' is: ' + population);

//----------------------------------------------------------------------------------------//

/*
*Data Types ✅ Object & ✅Primitive data types

7 Primitive DATA TYPES
-Number
-String
-Boolean
-undefined
-null
-symbol
-big int


undefined 
let children;
>undefinded
Declared but not defined

null
Empty value

Symbol (ES2015) : Value that is unique and cannot be changed.
Not useful for now

Big Int (ES 2020) : Larger integers than the Number type can hold

!JavaScript has dynamic typing: We don't have to manually define the data type of the value stored in a variable, 
!data types of value are determined automatically (when it is stored in the variable).
* It's the value that has the type not the variable --IMPORTANT
variable simply stores value that have a type
----------------------------------------------------------------------------------------//
*/

//*let const & var
//Assignment 2 ✅
let isIsland;
let language;
console.log(typeof isIsland); //boolean
console.log(typeof language); //undefined
//*redefining your lets
isIsland = 'Maldives';
language = 'Hindi';
console.log(
  'My favourite island to go to is ' + isIsland + ' and I speak ' + language
);
const inEurope = false;
console.log(isIsland);
//inEurope = true;
//const inEurope = true;
//As Redefining & Redeclaring const  will throw an error

if (inEurope) {
  console.log(isIsland, ' Comes inside Europe');
} else {
  console.log(isIsland, ' Doesnt Comes inside Europe');
}
//----------------------------------------------------------------------------------------

//*Basic Operators
//----Math Operators----
let currentYear = 2021;
const ageOfSmit = currentYear - 2000;
const ageOfDeep = currentYear - 1998;
console.log(
  'Smits & Deeps age is',
  +ageOfSmit,
  ageOfDeep + ' respectively in ',
  year
);

const powerNumber = 2 ** 3;
console.log(powerNumber);
//2 * 2 * 2 (since power 3)

//Concatinating Strings
const firstName = 'Smit';
const lastName = 'Desai';
console.log(firstName + lastName); //SmitDesai
console.log(firstName + ' ' + lastName); //Smit Desai

//----Assignment Operators----
let x = 10 + 5;
console.log(x); //15
//*Here we do actually have 2 operators the '+'  and '='
//*THE x will be assigned to 15
//!as + operator is executed first before = the assignment operator
//! ALways do all the math first and then comparison and assignment

x += 10; // x = x + 10
console.log(x); //25

x *= 4; //x*4
console.log(x); //100

x /= 2; //x/2
console.log(x); //50

x++; //x+1
console.log(x); //51

x--; //x+1
console.log(x); //50

//----Comparison Operators----
//We use this to produce boolean values
console.log(ageOfSmit > ageOfDeep); //false

//or
console.log(year - 2000 > year - 1998); //false - since smit is younger(less) than deep
//*How does JS knows what to do first the math or the comparision
//Actully It doesnt go from left to right
//! Always do all the math first and then comparison and assignment
// 1. year-2000 2.year-1998 and then 3. comparison b/w them

console.log(ageOfSmit >= 18); //true - should be atleast 18 years old
//atleast -- kam se kam 18 or more allowed

//*You can type all this is in console too as because the console actually
//has access to all the variables that is running in the current browser tab

//But we store this in a const if it's needed later
const isFullAge = ageOfSmit >= 18; //boolean - true

//Assignment 3 ✅
population /= 2;
console.log(
  'If population is split in half, each half would contain ' +
    population +
    ' million number of people in each half'
);
population++; //or population+=1
console.log('Population of my country now is', population);

let finlandPopulation = 6;
const ifPopulationGreaterThanFinland = population >= finlandPopulation;
console.log(ifPopulationGreaterThanFinland); //true - it is greater
difference = population - finlandPopulation;

if (ifPopulationGreaterThanFinland) {
  console.log(
    'Yes My country population is much greater than Finland by ' +
      difference +
      ' million'
  );
} else {
  console.log('Finland has the grater population');
}
//Assignment 5 ✅
const avgPopulation = 33;
var ifAvgPopulation = population >= avgPopulation;
if (ifAvgPopulation) {
  console.log('My country is Averagely Popluated');
} else {
  console.log('Below Average');
}

if (finlandPopulation >= avgPopulation) {
  console.log('Finland is Averagely Popluated');
} else {
  console.log('Finland is Below Average');
}

//
let description =
  country +
  ' is in ' +
  contient +
  ' and its ' +
  population * 2 +
  ' million people speak ' +
  language;
console.log(description);

//Assignment 4 ✅
//Using Template Literals -- ES6 Feature
let newDescription = `${country} is in ${contient} and its ${
  population * 2
} million people speak ${language} !!`;
console.log(newDescription);
//----------------------------------------------------------------------------------------

// *Operator Precedence

// WHY in JS the MATH operators occurs first before the COMPARISION operator
//because JS has a well-defined order of operator precedence.
//! So from MDN Operator precedence table we got to know that
//! usually all the math operators(14) come above the comparision(12) operators
//that's whyy math occurs first
//also you can check fot others too there are many many more in the this table
//for eg: type of, await, etc also comes in here

//---left-to-right
console.log(25 - 10 - 5);

// Assignment operator has least precedence
//---right to left coz subtraction(math) will occur first and then the assignment
let a, b;
a = b = 25 - 5 - 1;
//a = b = 19 Here also right to left (coz if left to right a=b but be undefined at that time)
console.log(a, b); //19,19
//coz when the ass operator will take place at the end  after math it'll be a=b=19

//Highest precedence one with parentheses - like in math
const averageAge = (ageOfSmit + ageOfDeep) / 2;
console.log(averageAge); //(21+23)/2 = 22

//Coding Challenge #1 & #2 ✅
let massMark, heightMark;
let massJohn, heightJohn;
// massMark = 78;
// heightMark = 1.69;
// massJohn = 92;
// heightJohn = 1.95;
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

var markBmi = massMark / heightMark ** 2;
var johnBmi = massJohn / heightJohn ** 2;
console.log(markBmi, johnBmi);
let isHigherBmi = markBmi > johnBmi;
if (isHigherBmi) {
  console.log(
    `Mark's BMI (${markBmi}) is HIGHER BMI than John's BMI(${johnBmi})`
  );
} else {
  console.log(
    `John's BMI (${johnBmi}) is HIGHER BMI than Mark's BMIT${markBmi}`
  );
}
//----------------------------------------------------------------------------------------

//* STRINGS AND TEMPLATE LITERALS

const job = 'Front-end Web Developer';
const birthYear = '2000';

const smit =
  "I'm " +
  firstName +
  ', A ' +
  job +
  " and I'm " +
  (currentYear - birthYear) +
  ' years old !!!';

console.log(smit);

//*Using Template Literals -- ES6 Feature

const smitNew = `I'm ${firstName}, A ${job} and I'm ${
  currentYear - birthYear
} years old !!!`;
console.log(smitNew);

//Going to next line earlier how we use to do...

console.log('String with \n\
multiple \n\
lines');

//Using Template Literals -- you just have to press enter
console.log(`String with 
multiple
lines`);
// This will be immensely useful when we start building HTML from JavaScript to create multi lines html elements

//----------------------------------------------------------------------------------------

//* Taking Decisions :
//if/else control structure - cuz some block will execute and some will not

minAge = 18;
yourAge = 15;

var isOldEnough = yourAge >= minAge;

if (isOldEnough) {
  console.log(`Get your driver's license!`);
} else {
  console.log(
    `You are under age, you have to come after ${
      minAge - yourAge
    } years sorry :((`
  );
}

const myBirthYear = 2000; //20th century getting overr
let century;
/*
1901 -2000 20th
2001 - 2099 -> 21st 
>2100 - 22nd
*/

if (myBirthYear <= 2100 && myBirthYear > 2000) {
  century = 21;
  console.log(`Belongs to ${century}st century!`);
} else if (myBirthYear <= 2000 && myBirthYear > 1900) {
  century = 20;
  console.log(`Belongs to ${century}th century!`);
} else {
  century = 22;
  console.log(`Belongs to ${century}nd century!`);
}
//----------------------------------------------------------------------------------------

//*Type Conversion & Coercion

//!----Type Conversion -- manually converting----

const inputNumber = '1991';
console.log(inputNumber + 30); //'199130'
//String to Number conversion
console.log(Number(inputNumber), inputNumber); //1991-nmmber,1991-string
console.log(Number(inputNumber) + 30); //2021
//Number() will change any value type to a Number type

//What is impossible to convert
console.log(Number('Smit')); //NaN

//* But typeof NaN is actually a number
console.log(typeof NaN); //number -- still a number but invalid nummber

if (typeof NaN === 'number') {
  console.log('Typeof NaN is a number'); //trueeee
} else {
  console.log('Ehhhh');
}
//Output = Typeof NaN is a number

//Number to string conversion
console.log(String(99)); //99 but STRING type as in console it comes in WHITE
console.log(99); //99 but NUMBER type as in console it comes in PURPLE
//string - WHITE / number - PURPLE (in CONSOLE).
console.log(String(99), 99); //99,99 in white,purple

//!----Type Coercion -- automatically converting----
//basically tyoe coercion happens whenever an operator is dealing with two values that have different types.
//so in this case JS will then behind the scenes convert one of the value to match the other value.

console.log('I am ' + 21 + ' years old'); //+21+ will automatically put 23 in a Number type

console.log('23' - '10' - 3); //10 -  Number
//Here as the JS converted strings to number we get 10
//as - will convert it into number automatically

console.log('23' + '10' - 3); //2307 - Number
console.log('23' + '10' + 3); //2313 - String
//*+ therefore no conversion - it'll concat

console.log('100' + '70'); //10070 - String
console.log('100' - '70'); //30 - Number

//* So AUTOMATIC CONVERSION to number if subtracted -
//  and added strins are concated not numberly added

console.log('100' + '70' - 30); // '10070'-30 = 10040  (number)
//10040 - Number coz last me minus huaa automatic conversion to number and then minus hi hogaa numberly

//*Also same in * and / there also automatic conversion will happen giving number as ouput and numberly calc will onlu occur

console.log('100' * '2'); //200 - Number
console.log('100' / '2'); //50 - Number

//Conclusion
//! If strings are added using + it'll obviously concat and give the output in string
//! If -,*,/ it'll convert automatically to number even if strings are subtracted,*,/ final output will be a  Number only

//*In logical also it'll convert automatically into number and then compare it
console.log('100' > '70'); //true

//! Sooo only in + it'll not convert and keep on concat

//GUESS THE OUTPUT
let n = '1' + 1; // '11'   ->string      (+ so concat and never converting remains in sttring)
console.log(n); // '11'   ->string (in WHITE)

n = n - 1; // '11'-1 = 10 -> Number    (- therefore numberly calc and automatically converting in a string)
console.log(n); //10 Number (in PURPLE)

console.log('10' - '4' - '3' - 2 + '5'); //15 - String (in WHITE)

//Assignment 6 ✅
console.log('9' - '5'); //4 - Number (in PURPLE)
console.log('19' - '13' + '17'); //617 - String (in WHITE)
console.log('19' - '13' + 17); //23 - Number (in PURPLE)
console.log('123' < 57); //false -  boolean
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143 - Number (in PURPLE)

//*Truthy and Falsy Values
//!5 falsy values : 0, '', undefined, null, NaN (and obv false will give false)
//Below all will give false as output
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

//and everything else is truthy
console.log(Boolean('Smit')); //true
console.log(Boolean({})); //true (empty string gives false not empty bracket it give true onlyy)

//* AWESOME PART
let moneyLeft = 0; //0 - will go to else - since falsy
if (moneyLeft) {
  console.log('Yes you can spend :))');
} else {
  console.log('No money left :((');
}
//No money left :((  -> coz 0 is falsyy

let height; //undefined - will go to else - since falsy
if (height) {
  console.log('YAY! height is defined');
} else {
  console.log('Height is undefined :((');
}
//Height is undefined :((.  --> coz height is undefined (at the beginning) and that's falsy

//----------------------------------------------------------------------------------------

//* Equality Operators == loose vs === strict
//! == doesn't check for datatype === do check for data type too
//! ALWAYS USE ===

// '18' == 18 true           => FYI  == performs string coercion
// '18' === 18 false        => FYI  === doen't perform string coercion

const age = '18';
if (age === 18) console.log('You just became an adult(strict) ;))'); //false
if (age == 18) console.log('You just became an adult(loose) ;))'); //true

/*
//const secretKey = prompt('Enter Secret Key');  // Prompt will take everything be default a STRING
//so first convert it into number
const secretKey = Number(prompt('Enter Secret Key'));
if (secretKey === 2107) {
  alert('You are Welcome Smit Sir !!');
  console.log('Cool !! Valid Number', secretKey, typeof secretKey); // 2107 "number"
} else if (secretKey === 0) {
  alert('Field Required to enter the partayyy!!!');
  console.log('You need to reload and Try again!!');
} else {
  alert('Please enter valid Secret key fucker...');
  console.log('Invalid Key Try Again!!', secretKey, typeof secretKey);
}
//Another way
if (secretKey !== 2107) console.log('Why not 2107 ?');

//Assignment 7 ✅
var numNeighbours = Number(
  prompt('How many neighbour does your country have?')
);
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border', numNeighbours, typeof numNeighbours);
} else {
  console.log('No borders');
}

*/
//----------------------------------------------------------------------------------------

//*Boolean Logic
// AND - true when ALL are true
// OR - true when ONE is true
// NOT - Inverts true/false value

//Assignment 8 ✅
var stayCountry = 'Portugal';
var ifLanguage = 'english';
var ifPopulation = 40;
var isThatIsland = false;
if (ifLanguage === 'english' && ifPopulation < 50 && !isThatIsland) {
  console.log(`You should live in ${stayCountry} :))`);
} else {
  console.log(`${stayCountry} does not meet your criteria`);
}

//----------------------------------------------------------------------------------------

//Coding Challenge #3 ✅

//Dolphins & Koalas
const dolphinAvgScore = (97 + 112 + 80) / 3;
const koalasAvgScore = (109 + 95 + 50) / 3;
//Higher than the other team as well as avg score should be greater than 100 then the TEAM WINS
if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
  console.log(`Dolphin's: ${dolphinAvgScore} > Koala's : ${koalasAvgScore}`);
  console.log(`Dolphins WONNN !!!`);
} else if (dolphinAvgScore < koalasAvgScore && koalasAvgScore >= 100) {
  console.log(`Dolphin's: ${dolphinAvgScore} < Koala's : ${koalasAvgScore}`);
  console.log('Koalas WONNNN !!!');
} else if (
  dolphinAvgScore === koalasAvgScore &&
  dolphinAvgScore >= 100 &&
  koalasAvgScore >= 100
) {
  console.log(`Dolphin's: ${dolphinAvgScore} = Koala's : ${koalasAvgScore}`);
  console.log(`Match Draww BOTH Team's won !!!`);
} else if (
  dolphinAvgScore === koalasAvgScore &&
  dolphinAvgScore < 100 &&
  koalasAvgScore < 100
) {
  console.log(`Dolphin's: ${dolphinAvgScore} = Koala's : ${koalasAvgScore}`);
  console.log(
    'No results due to SAME low average scores of both the teams !!!'
  );
} else if (dolphinAvgScore < 100 && koalasAvgScore < 100) {
  console.log(`Dolphin's: ${dolphinAvgScore} = Koala's : ${koalasAvgScore}`);
  console.log('No results due to low average scores of both the teams !!!');
}

//!Awesome Example
//minAge = 18; //already declared above
/*
let driversAge = Number(prompt(`Enter your age in number?`));
let hasDriverLicense = driversAge >= minAge;
//console.log(canDrive);
let vision = prompt(`Do you have a good vision?`);
let hasGoodVision;
if (vision === 'yes') {
  hasGoodVision = true;
} else if (vision === 'no') {
  hasGoodVision = false;
} else {
  alert(`Please give your answer in yes or no only !`);
}
if (hasDriverLicense && hasGoodVision) {
  console.log(
    `Yayyy!!! you can take the care as you have driver's license also has a good vision!!`
  );
} else {
  if (!hasDriverLicense && hasGoodVision) {
    console.log(
      `You need a driver's license come after ${
        minAge - driversAge
      } years :(( ...but no need of working on your vision`
    );
  } else if (hasDriverLicense && !hasGoodVision) {
    console.log(`You've a driver's license but improve your vision :((`);
  } else {
    console.log(
      `You need a driver's license come after ${
        minAge - driversAge
      } years :(( ... also you need to work on your vision`
    );
  }
}
*/
//----------------------------------------------------------------------------------------
/*
let day = prompt('Enter a day to know your schedule');
if (day === 'monday') {
  console.log(`Plan course structure`);
  console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
  console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
  console.log(`Write code examples`);
} else if (day === 'friday') {
  console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
  console.log(`Enjoy the weekend`);
} else {
  console.log(`Not a valid day`);
}
//* THE SWITCH STATEMENT
switch (day) {
  case 'monday': //Check if day === 'monday' (strick )
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
    break;
  case 'tuesday':
    console.log(`Prepare theory videos`);
    break;
  case 'wednesday':
  case 'thursday':
    console.log(`Write code examples`);
    break;
  case 'friday':
    console.log(`Record videos`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`Enjoy the weekend`);
  default:
    console.log(`Not a valid day`);
}

Assignment 9 ✅

let selectedLanguage = prompt('Select your preffered language');
switch (selectedLanguage) {
  case 'chinese':
  case 'mandarin':
    console.log(`MOST number of native speakers!`);
    break;
  case 'spanish':
    console.log(`2nd place in number of native speakers`);
    break;
  case 'english':
    console.log(`3rd place`);
    break;
  case 'hindi':
    console.log(`Number 4`);
    break;
  case 'arabic':
    console.log(`5th most spoken language`);
    break;
  default:
    console.log(`Great language too :D`);
}
*/
//----------------------------------------------------------------------------
//* STATEMENTS and Expressions
//Expression always produces a VALUE &
//Statements are like full sentencs that doesn't produce a value

//!expressions  => This all will always produce a value if console.log is done
3 + 4;
1991;
true && false && !false;
const me = 'Smit';

//!statements - if else, for, while, ...
if (23 > 10) {
  const str = '23 is bigger'; // this is an expression too
}
//the above whole *if* is a statement coz it will not produce a value

//! In Template variable you can only put expression & not a statement never
console.log(`I'm ${2021 - 2000} years old`); // expression in template chalegaa ✅
console.log(`My name is ${me}`); // expression in template chalegaa ✅
/*
console.log(`${if (23 > 10) {
  const str = '23 is bigger'; 
}} then show 23 is greater`);  //Statement ❌ not allowed in template throwing error
Uncaught SyntaxError: Unexpected token 'if'
*/
//----------------------------------------------------------------------------

/*
We alreay learned about 2 conditionals - the regular if else statement & the switch statement
But We've another one i.e
*The Conditional (Ternary) Operator

let driversAge = Number(prompt('Enter age in number :'));
let hasDriverLicense;
let hasGoodVision;
let vision = prompt('Do you have a good vision?');
vision === 'yes' ? (hasGoodVision = true) : (hasGoodVision = false);
driversAge >= minAge ? (hasDriverLicense = true) : (hasGoodVision = false);

hasDriverLicense && hasGoodVision
  ? console.log(`Yayyy!! you can take the care!!`)
  : console.log(
      `Nopee you cannot take the car come after ${
        minAge - driversAge
      } years with a license :(( and also improve your vision`
    );
*/
//! As ternary operator do produce a  value we can use that in Template Variables
//unlike if else and all statements where we couldn't :( as they don't produce a value

/*
Ternary in template
console.log(
  `I ${
    driversAge >= minAge
      ? 'can drive'
      : `can drive after ${minAge - driversAge} years` //using template here also
  }`
);

 * Ternary operator is not a replacement of if/else statement.
 * We still need if/else whwn we have bigger blocks of code having multiple conditions in that case ternary is not gonna work
 * Ternary is perfect when u need a quick decision like for eg above and also can be used in Template so that's awesome
 */
//Assignment 10 ✅

console.log(
  `${country}'s population is ${
    population > avgPopulation ? 'above' : 'below'
  } average`
);
//----------------------------------------------------------------------------

//Final Coding Challenge #4 ✅

const bill = 275; //true
//more values: 40,430 - false
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `Your bill was : ${bill}, the tip was ${tip} so the total is ${bill + tip}`
);

//THE END of JavaScript Fundamentals - Part 1\\
