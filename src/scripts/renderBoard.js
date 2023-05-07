const width = 10;

function renderBoard(board, squares) {
  for (let i = 0; i < width ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.dataset.id = i;
    board.appendChild(square);
    squares.push(square);
  }
}

export default renderBoard;
