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

/*
! Problem 2
Function should now take two arrays of temperature
* 1) Understanding the problem
    - With 2 arrays , should we implement functionality twice? Answer:  No Just merge the two array
* 2) Breaking up into sub-problems
    - How to merge 2 arryas
*/
const temps1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temps2 = [-7, -8, -4, 0, 'error', 19, 23, 35, 11, 1];

const calcTempAmplitude1 = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue; // error eliminated
    const currentTemp = temps[i];
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return console.log(
    `The Temperature Amplitude within 2 arrays is : ${max - min}`
  );
};
calcTempAmplitude1(temps1, temps2);

// Coding Challenge 1 ✅

/*
! Problem 2

* 1) Understanding the problem
    - Array transformed to a string, seperated by ...
    - What is X days/ Answer: index+1
* 2) Breaking up into sub-problems
    - Transform array into string
    - Transform each element to string with °C
    - String need to contain day (index+1)
    - Seperate by 3 dots
    - Log string to console
    
*/
const data1 = [12, 5, -5, 0, 4];
const data2 = [17, 21, 23];
//Expected Output
console.log(
  `...${data1[0]}°C...${data1[1]}°C...${data1[2]}°C...${data1[3]}°C...`
); // Not Feasible

const printForcast = (arr1, arr2) => {
  const arr = arr1.concat(arr2);
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    //console.log(`...${arr[i]}­°C in ${i + 1} days...`);
    str = str + `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('... ' + str);
};
printForcast(data1, data2);
/*
!Output :  ...12°C in 1 days ...5°C in 2 days ...-5°C in 3 days ...0°C in 4 days ...4°C in 5 days ...17°C in 6 days ...21°C in 7 days ...23°C in 8 days ...
*/
