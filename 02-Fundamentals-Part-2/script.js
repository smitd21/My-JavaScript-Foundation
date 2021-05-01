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
//* Functions
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
  case 'cocktail':
    const mixJuice = fruitProcessor(7, 6);
    console.log(`Here is your Cocktail Juice :`, mixJuice);
    break;
  case 'apple':
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
You can call a function declaration (calcAge1) before they are defined in the code 
but function expression(calcAge2 & calcAge3) cannot be called before declaring - Cannot access 'calcAge2' before initialization

And internally this happens because of a process called 'HOISTING' - that will study later

*Preference to use Function expression (calcAge2 or calcAge3) - coz it should be call only after defining and then calling 
*/