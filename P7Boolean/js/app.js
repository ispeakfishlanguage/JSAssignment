const birthYear = 2000;
let isChild;
let isTeenager;
let isAdult;

const currentYear = 2024;
let age;
age = currentYear - birthYear;

if (age < 0) {
  console.log("This person hasn't been born yet");
}

isChild = age >=0 && age <= 10;
isTeenager = age >= 10 && age <= 17;
isAdult = age >= 18;

console.log("You are a child: " + isChild);
console.log("You are a teenager: " + isTeenager);
console.log("You are an adult: " + isAdult);
