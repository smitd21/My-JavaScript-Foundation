'use strict';

//! MY PRACTISE REVISION AREA  !!!

/*
variable = value -> value is the smallest unit
variable  - BOX to store a value

* Naming Convention
1. Can only have letters, numbers, underscore '_' & $ sign
2. Shouldn't start with a number
3. Shouldn't have any special characters other than $ and _

4. Shouldn't be a reserved or future reserved keyword
eg: const Function ❌ const if ❌ const new❌ const name (no error here but please avoid using name) ❌ 

5. Avoid starting with a capital letter they are classes that start with caps 
and also all uppercase letters are reserved constants eg: const PI 
* Stick with camelCase Convention

6. Variable names should be descriptive - makes code cleaner and understandable !!
*/

let js = 'amazing';
if (js === 'amazing') console.log(`Wuhuuu !!! JS is ${js} !!`);

let firstName = 'Smit';
let lastName = 'Desai';
let age = 21;

console.log(firstName + ' ' + lastName + ' is ' + age + ' years old!!');
//Using Template literals
console.log(`${firstName} ${lastName} is ${age} years old !!`);

let country = 'India';
let continent = 'Asia';
let population = 1300;
let isIsland = false;

console.log(
  `${country} from ${continent} has population of ${population} million!!`
);

console.log(
  typeof country, //string
  typeof continent, //string
  typeof population, //number
  typeof isIsland //boolean
);

let years; //declared but not defined
console.log(typeof years); //undefined
console.log(typeof undefined); //undefined

console.log(typeof null); //object
console.log(typeof []); //object
console.log(typeof {}); //object
console.log(typeof NaN); // Number - Still a number but an invalid number
console.log(42 / 0); //Infinity
console.log(42 / -0); //-Infinity
console.log(42 / 0, 112 / -0); //Infinity, -Infinity
console.log(typeof 42 / 0, typeof 112 / -0); // number, number

console.log(typeof (Infinity, -Infinity)); //number
console.log(typeof (42 / 0, 42 / -0)); //number

//! MY PRACTISE REVISION AREA  ENDS HERE !!!

// Coding Challenge 1&2 ✅
/*
console.log(`Hey let's practise!!`);
 
let markMass, markHeight, johnHeight, johnMass;
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

const calcBmi = (mass, height) => {
  return mass / height ** 2;
};
console.log(calcBmi(markMass, markHeight), calcBmi(johnMass, johnHeight));
const markBmi = calcBmi(markMass, markHeight);
const johnBmi = calcBmi(johnMass, johnHeight);
const markHighBmi = markBmi > johnBmi;
console.log(markHighBmi);
if (markHighBmi) {
  console.log(`Mark has a high Bmi ${markBmi} than John's Bmi by ${johnBmi}`);
} else if (!markHighBmi && markBmi !== johnBmi) {
  console.log(`John has a high Bmi ${johnBmi} than Mark's Bmi by ${markBmi}`);
} else {
  // Equal
  console.log(`Both has equal BMI ${markBmi},${johnBmi}`);
}

// Coding Challenge 3 ✅
const calculateAvgScore = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
const dolphinsAvgScore = calculateAvgScore(97, 112, 101);
const koalasAvgScore = calculateAvgScore(109, 95, 106);
// console.log(dolphinAvgScore, koalasAvgScore); //s missing in dolphin the use strict will let u know about it that 'dolphinAvgScore' is not defined
console.log(dolphinsAvgScore, koalasAvgScore);
if (dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
  console.log(`Dolphins WIN !!!`);
} else if (koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
  console.log(`Koalas WIN !!!`);
} else if (
  dolphinsAvgScore === koalasAvgScore &&
  dolphinsAvgScore &&
  koalasAvgScore >= 100
) {
  console.log(`MATCH DRAW & BOTH TEAM WINS !!!`);
} else if (
  dolphinsAvgScore !== koalasAvgScore &&
  koalasAvgScore &&
  dolphinsAvgScore < 100
) {
  console.log(`NOBODY WINS DUE TO LOW AVERAGE SCORE OF BOTH TEAMS :(((`);
} else if (
  koalasAvgScore === dolphinsAvgScore &&
  dolphinsAvgScore &&
  koalasAvgScore < 100
) {
  console.log(`NOBODY WINS DUE TO SAME LOW AVERAGE SCORE OF BOTH REAMS :((`);
}
*/
