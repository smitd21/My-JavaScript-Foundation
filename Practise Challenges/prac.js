'use strict';
// Coding Challenge 1&2 ✅
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
