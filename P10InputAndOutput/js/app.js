function square(x) {
  return x * x;
}
console.log(square(4));


function averageTwoNumbers(x, y) {
  return (x + y)/2;
}
console.log(averageTwoNumbers(2, 6));

function greeting(firstName, lastName) {
  return "Welcome " + firstName + " " + lastName + "!";
}
console.log(greeting("Ben", "Ting"));

function random() {
  return Math.floor(Math.random() * 3);
}
console.log(random(0,3));

function letters(number) {
  if (number === 0) {
    return "A";
  }
  else if (number === 1) {
    return "B";
  }
  else if (number === 2) {
    return "C";
  }
  else {
    return "Not on the list";
  }
}
console.log(letters(0));
console.log(letters(1));
console.log(letters(2));

function areNumbersEqual(a, b) {
  if (a === b) {return "Numbers are equal";}
  else if (a > b) {return "First number is greater";}
  else if (a < b) {return "Last number is greater";}
}
console.log(areNumbersEqual(4, 6));
console.log(areNumbersEqual(5, 5));

