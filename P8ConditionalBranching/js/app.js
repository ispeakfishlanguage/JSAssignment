const birthYear = 2000;
const favoriteNumber = 21;
const currentYear = 2024;

let age = currentYear - birthYear;

if (age >= 0 && age <= 10) {
  console.log("You are a child");
}
else if (age >= 11 && age <= 17) {
  console.log("You are a teenager");
}
else if (age >= 18) {
  console.log("You are an adult");
}
else {
  console.log("This person hasn't been born yet")
}

if (age === favoriteNumber){
  console.log("Both numbers are equal");
}

else if (age > favoriteNumber){
  console.log("The greater number is: " + age );
}
else {
  console.log("The greater number is: " + favoriteNumber );
}

if (favoriteNumber % 2 === 0) {
  console.log("Your favorite number is an even number.");
}
else {
  console.log("Your favorite number is an odd number.");
}
