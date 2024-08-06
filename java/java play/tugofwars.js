const redNumber = document.getElementById("red-number");
const blueNumber = document.getElementById("blue-number");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const resetButton = document.getElementById("reset-button");
const layer = document.getElementById("layer");
const modal = document.getElementsByClassName("modal")[0];

blue.addEventListener("click", () => {
  const newValue = parseInt(blueNumber.innerText) + 5;
  blueNumber.innerText = newValue;
  redNumber.innerText = 100 - newValue;
  blue.style.width = `${newValue}%`;
  red.style.width = `${redNumber.innerText}%`;

  if (blueNumber.innerText == 100) {
    modalContainer.style.display = "flex";
    modal.innerText = "Winner is blue";
  }
});

red.addEventListener("click", () => {
  const newValue = parseInt(redNumber.innerText) + 5;
  redNumber.innerText = newValue;
  blueNumber.innerText = 100 - newValue;

  red.style.width = `${newValue}%`;
  blue.style.width = `${blueNumber.innerText}%`;

  if (redNumber.innerText == 100) {
    modalContainer.style.display = "flex";
    modal.innerText = "Winner is red";
  }
});

resetButton.addEventListener("click", () => {
  blueNumber.innerText = 50;
  redNumber.innerText = 50;
  blue.style.width = "50%";
  red.style.width = "50%";
});
