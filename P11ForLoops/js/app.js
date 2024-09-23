/* Print 13 different random numbers between 1 and 6.
Output: 1 6 2 5 4 6 2 5 1 3 4 4 6
 */

for (let i = 0; i < 13; i++) {
  let number = Math.floor(Math.random() * 6) + 1;
  console.log(number);
}

/* Start at 1, multiply the number of each iteration by 2 and stop after 1024. Print each number to the console.
Output: 1 2 4 8 16 32 64 128 256 512 1024
*/

for (let i = 1; i <= 1024; i*= 2) {
  console.log(i);
}

/* Start at 10 and count down until 0. Print each number to the Console.
Output: 10 9 8 7 6 5 4 3 2 1 0
 */

for (let i = 10; i >= 0; i--) {
  console.log(i);
}

/* Write a function that has 2 number as parameters and returns the first number to the power of the second number
Input: 4, 24
Output: 281474976710656
 */
function powerNumbers (number1, number2) {
  return number1 ** number2;
}

console.log(powerNumbers(4, 24));
