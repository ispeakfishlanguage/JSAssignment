function walkForward () {
  console.log("Move forward.");
}

function turnRight () {
  console.log("Turn right.");
}

function turnLeft () {
  turnRight();
  turnRight();
  turnRight();
}

function turnAround () {
  turnRight();
  turnRight();
}

walkForward();
walkForward();
walkForward();
turnAround();
walkForward();
walkForward();
walkForward();
turnLeft();
walkForward();
turnAround();
walkForward();
