let user = 'Smit';
// if (user === 'Smit') alert('Welcome to the Fight Club!!!');
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
//But typeof null shows as object -- A BUG in JS
console.log(typeof null);

//Redefining the year
year = 2021;
// console.log(year);
console.log(typeof year); //number
