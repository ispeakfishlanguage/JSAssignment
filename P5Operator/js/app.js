/* Implement a program that takes an input for km/h and displays the result in m/s.
Input: 72
Output: 20
 */

function convertSpeedUnits (kmH) {
  let mS;
  mS = kmH * (1000/3600);
  return mS;
}

console.log(convertSpeedUnits(72));


/* Implement a program that takes a number input for minutes and displays the result in seconds.
Input: 3
Output: 180
*/

function convertToSeconds (minutes) {
  let seconds;
  seconds = minutes * 60;
  return seconds;
}

console.log(convertToSeconds(3));


/* Implement a program that takes two numbers as input and displays their division result.
Input: 11, 4
Output: 2,75
 */

function division (number1, number2) {
  return number1 / number2;
}

console.log(division(11, 4));


/* Implement a program that calculates the remainder of dividing two numbers and displays the result.
Input: 11, 4
Output: 3
 */

function modulo (number1, number2) {
  return number1 % number2;
}
console.log(modulo(11, 4));


/* Implement a program that calculates the area of a circle using a number input for the radius and displays the result.
Input: 2
Output: 12,56...
 */

function areaOfACircle (radius) {
  const pi = Math.PI;
  let area;
  area = radius * radius * pi;
  return area;
}

console.log(areaOfACircle(2));


/* Implement a program that takes a number input and displays its negation.
Input: 11
Output: -11
 */

function negation (number) {
  return -1 * number;
}

console.log(negation(11));


/* Implement a program that calculates the BMI of a person using their weight in kilograms and height in meters. Display the BMI value.
Input: 70, 1,82
Output: 21,13...
 */

function calculateBMI (height, weight) {
  let BMI;
  BMI = weight / (height ** 2);
  return BMI;
}

console.log(calculateBMI(1.82, 70));

/* Implement a program that calculates the length of the hypotenuse of a right triangle using the lengths of the other two sides as inputs. Display the result.
Input: 3, 4
Output: 5
 */

function calculateHypotenuse (sideA, sideB) {
  let hypotenuse;
  hypotenuse = Math.sqrt (sideA ** 2 + sideB ** 2);
  return hypotenuse;
}

console.log(calculateHypotenuse(3, 4));


/* Implement a program that takes a number input representing seconds and converts it to minutes and remaining seconds, then displays the result.
Input: 111
Output: 1 minute(s) and 51 second(s)
 */

function secondsToMinutes (seconds) {
  let minutes;
  minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return minutes + " minute(s) and " + seconds + " second(s)";
}

console.log(secondsToMinutes(111));
