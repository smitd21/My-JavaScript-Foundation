//JavaScript Fundamentals – Part 1
let user = 'Smit';
//if (user === 'Smit') alert('Welcome to the Fight Club!!!');
console.log(40 + 8 + 23 + 47 - 89);
let firstName = 'Messi';

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
var country = 'India';
var contient = 'Asia';
var population = 139;
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
language = 'Gujarati';
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
