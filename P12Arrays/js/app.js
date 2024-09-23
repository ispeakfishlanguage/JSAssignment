let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

console.log("I will roll 10 000 numbers between 0 and 10: ");

for (let i = 0; i < 10000; i++) {
  let randomNumber = Math.floor(Math.random() * 11);
  numbers[randomNumber]++;
}

for (let i = 0; i < 11; i++) {
  console.log("I rolled " + i + " a total of " + numbers[i] + " times.");
}
