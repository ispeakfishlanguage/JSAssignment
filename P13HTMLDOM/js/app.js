/* const helloText = document.getElementById('hello');
helloText.innerHTML = "I changed this with javascript!";
helloText.style.color = "red"; */

const textField = document.getElementById("text");
const button0 = document.getElementById("button0");

let score = 0;

function increaseBy(inputNumber) {
  score += inputNumber;
}

function updateScore() {
  textField.innerHTML = score;
}

button0.addEventListener("click", () => {
  increaseBy(1);
  updateScore();
});
