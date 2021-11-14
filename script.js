var turn = "O";
const heading = document.getElementById("heading");
heading.innerText = "Now " + turn + "'s turn!!!";

cellXY = Array(Array(3), Array(3), Array(3));

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", function () {
    if (cell.innerText == "") {
      $x = cell.getAttribute("x") - 1;
      $y = cell.getAttribute("y") - 1;

      cell.innerText = turn;

      cellXY[$x][$y] = turn;

      if (cellXY[$x][0] == cellXY[$x][1] && cellXY[$x][0] == cellXY[$x][2]) {
        alert(" Yeah!!! " + turn + " Won ");
      }
      if (cellXY[0][$y] == cellXY[1][$y] && cellXY[0][$y] == cellXY[2][$y]) {
        alert(" Yeah!!! " + turn + " Won ");
      }

      if (turn == "O") {
        turn = "X";
      }
      else {
        turn = "O";
      }
      heading.innerText = "Now " + turn + "'s turn!!!";
    }
  });
});