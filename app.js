const ships = document.querySelectorAll(".ships__shape");
const playerBoard = document.querySelector(".board-player");

ships.forEach((ship) => {
  ship.addEventListener("dragstart", () => {
    ship.classList.add("dragging");
  });
  ship.addEventListener("dragstart", () => {
    ship.classList.remove("dragging");
  });
});

playerBoard.addEventListener("dragover", (e) => {
  e.preventDefault();
  const isDragging = document.querySelector(".dragging");
  playerBoard.appendChild(isDragging);
});
