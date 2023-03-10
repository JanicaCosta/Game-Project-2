const cells = document.querySelectorAll(".cell");
let checkTurn = true;

let winner;

/** defining combinations for the winner */

const combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/** defining players */

let playerX = "X";
let playerO = "O";
let scores = {
  [playerX]: 0,
  [playerO]: 0,
}

cells.forEach(function(cell) {
  cell.addEventListener("click", function cellClickCheck(event) {
    cellClickedCallback(this);
  })
})


function cellClickedCallback(cell) {
  if (!cell.textContent) {
    turn = checkTurn ? playerX : playerO; // 'X' or 'O'
    cell.textContent = turn;
    checkTurn = !checkTurn;
    // 'X' or 'O' are being added to check the winner not for styling purposes
    cell.classList.add(turn);
    checkWinner(turn);
  }
}

function checkWinner(turn) {
  winner = combinations.some((comb) => {
    return comb.every((index) => {
      return cells[index].classList.contains(turn);
    });
  });

  if (winner) {
    gameCompleted(turn);
  } else if (checkDraw()) {
    gameCompleted("drawn");
  }
}


function checkDraw(turn) {
  let x = 0;
  let o = 0;
  for (index in cells) {
    if (!isNaN(index)) {
      if (cells[index].classList.contains(playerX)) {
        x++;
      }

      if (cells[index].classList.contains(playerO)) {
        o++;
      }
    }
  }
  return x + o === 9 ? true : false;
}

function gameCompleted(winner) {
  if (winner === "drawn") {
    scores[playerO] += 1;
    scores[playerX] += 1;
  } else {
    scores[winner] += 1;;
  }
  console.log(winner);
  updateScores();
  clearCells();
  showModal(winner);
}


function showModal(winner) {
  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();

  var textModal = document.getElementById('textResult');

  if (winner === "drawn") {
    textModal.innerHTML = `Game ${winner} `;
  } else {
    textModal.innerHTML = `Player ${winner} WON`;
  }
};



function clearCells() {
  const cells = document.querySelectorAll(".cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = '';
    cells[i].classList = ["cell"]
  }

}

function updateScores() {
  document.getElementById("playerX-score").innerHTML = scores[playerX]
  document.getElementById("playerO-score").innerHTML = scores[playerO]
}
