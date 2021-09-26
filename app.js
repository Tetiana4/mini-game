const board = document.querySelector("#board");
const SQUARES_NUMBER = 600;
const colors = [
  "#42f545",
  "#130ce8",
  "#f7220f",
  "#f7cf07",
  "#07a7f7",
  "#f714d5",
  "#f5020f",
  "#fa8b0c",
  "#5832a8",
  "#0cf5de",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
