import renderBoard from "./src/scripts/renderBoard.js";

const ships = document.querySelectorAll(".ships__shape");
const playerBoard = document.querySelector(".board-player");
const computerBoard = document.querySelector(".board-computer");

const playerSquares = [];
const computerSquares = [];

renderBoard(playerBoard, playerSquares);
renderBoard(computerBoard, computerSquares);
// [...ships].forEach((ship) => ship.addEventListener("dragstart", dragStart));

// const playerBoardCells = document.querySelectorAll(".board-player > .square");
// console.log(playerBoardCells);
// playerBoardCells.forEach((boardCell) => {
//   boardCell.addEventListener("dragover", dragOver);
//   boardCell.addEventListener("drop", dropShip);
// });
ships.forEach((ship) => ship.addEventListener("dragstart", dragStart));
playerSquares.forEach((square) =>
  square.addEventListener("dragStart", dragStart)
);
playerSquares.forEach((square) =>
  square.addEventListener("dragover", dragOver)
);
playerSquares.forEach((square) =>
  square.addEventListener("dragenter", dragEnter)
);
playerSquares.forEach((square) =>
  square.addEventListener("dragleave", dragLeave)
);
playerSquares.forEach((square) => square.addEventListener("drop", dragDrop));
playerSquares.forEach((square) => square.addEventListener("dragend", dragEnd));

let selectedShipNameWithIndex;
let draggedShip;
let draggedShipLength;

ships.forEach((ship) =>
  ship.addEventListener("mousedown", (e) => {
    selectedShipNameWithIndex = e.target.id;
    console.log(selectedShipNameWithIndex);
  })
);

function dragStart(e) {
  draggedShip = this;
  draggedShipLength = this.childNodes.length;
  console.log(`draggedShip ${draggedShip}`);
}

function dragOver(e) {
  e.preventDefault();
  // console.log("dragover");
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  // console.log("drag leave");
}

function dragDrop() {
  console.log(draggedShip);
  let shipNameWithLastId = draggedShip.lastChild.id;
  let shipClass = shipNameWithLastId.slice(0, -2);
  // console.log(shipClass);
  console.log(shipNameWithLastId);
}

function dragEnd() {
  // console.log('dragend')
}

// function dropShip(e) {
//   console.log("dropShip");
//   const startId = e.target.id;

//   playerBoard.replaceChild(draggedShip, e.target);
// }
