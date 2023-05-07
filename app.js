import renderBoard from "./src/scripts/renderBoard.js";

const ships = document.querySelectorAll(".ships__shape");
const playerBoard = document.querySelector(".board-player");
const computerBoard = document.querySelector(".board-computer");
const playerBoardCells = document.querySelectorAll(".board-player div");

const playerSquares = [];
const computerSquares = [];

renderBoard(playerBoard, playerSquares);
renderBoard(computerBoard, computerSquares);

[...ships].forEach((ship) => ship.addEventListener("dragstart", dragStart));
let draggedShip;

playerBoardCells.forEach((boardCell) => {
  boardCell.addEventListener("dragover", dragOver);
  boardCell.addEventListener("drop", dropShip);
});

function dragStart(e) {
  draggedShip = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function dropShip(e) {
  const startId = e.target.id;
}
