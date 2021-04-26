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

const avgPopulation = 33;
if (population >= avgPopulation) {
  console.log('My country is Averagely Popluated');
} else {
  console.log('Below Average');
}
if (finlandPopulation >= avgPopulation) {
  console.log('Finland is Averagely Popluated');
} else {
  console.log('Finland is Below Average');
}

let description =
  country +
  ' is in ' +
  contient +
  ' and its ' +
  population * 2 +
  ' million people speak ' +
  language;
console.log(description);
//----------------------------------------------------------------------------------------

//Operator Precedence
//* WHY in JS the MATH operators occurs first before the COMPARISION operator
//*because JS has a well-defined order of operator precedence.
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
let markHigherBmi = markBmi > johnBmi;
if (markHigherBmi) {
  console.log('Mark has a HIGHER BMI');
} else {
  console.log('John has a HIGHER BMI');
}
