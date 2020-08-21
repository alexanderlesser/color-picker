// variables
numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();

//Selectors
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
// Selector buttons
var resetButton = document.querySelector("#newColorButton");
var modeButtons = document.querySelectorAll(".mode");

for (let i = 0; i < modeButtons.length; i++) {
  modeButtons[i].addEventListener("click", function () {
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");

    if (this.textContent === "Easy") {
      numSquares = 3;
    } else {
      numSquares = 6;
    }
    reset();
  });
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  // Reset messageDisplay
  messageDisplay.textContent = "";
  // Change resetbutton text content
  resetButton.textContent = "new colors";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

//Eventlistener Reset Button
resetButton.addEventListener("click", function () {
  reset();
});

// Display correct RGB
colorDisplay.textContent = pickedColor;

//for Loop Game logic
for (let i = 0; i < squares.length; i++) {
  //Add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add listener to squares
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = "Play again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColor(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// another way
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  arr = [];
  //generate random colors

  // repeat num times
  for (let i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  // return the array in the end
  return arr;
}

function randomColor() {
  var rgb1 = Math.floor(Math.random() * 256); // red
  var rgb2 = Math.floor(Math.random() * 256); // green
  var rgb3 = Math.floor(Math.random() * 256); // blue

  return "rgb(" + rgb1 + ", " + rgb2 + ", " + rgb3 + ")";
}
