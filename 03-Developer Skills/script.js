'use strict';

/* Using 4 Frameworks to
* 1) Understanding the problem
    - What is temp amplitude? Ans: difference between highest and lowest temperature
    - How to compute the max and min temperatures
    - What's a sensor error? Ignore when it comes
* 2) Breaking up into sub-problems
    - How to ignore error?
    - Find Max value in temp array
    - Find Max value in temp array
    - To subtract min from max(amplitude) and return it
*/
// ! Problem 1
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temp = [];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temperatures[i] !== 'number') continue; // error eliminated
    const currentTemp = temps[i];
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return console.log(`The Temperature Amplitude is : ${max - min}`);
};
calcTempAmplitude(temperatures);
