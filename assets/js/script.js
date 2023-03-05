const cells = document.querySelectorAll(".cell");
let checkTurn = true;

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
  "X": 0,
  "O": 0,
}

cells.forEach(function (cell) {
  cell.addEventListener("click", function cellClickCheck(event) {
    cellClickedCallback(this);
  })
})


function cellClickedCallback(cell) {
  turn = checkTurn ? playerX : playerO; // 'X' or 'O'
  cell.textContent = turn;
  checkTurn = !checkTurn;
  // 'X' or 'O' are being added to check the winner not for styling purposes
  cell.classList.add(turn);
  checkWinner(turn);
}

function checkWinner(turn) {
  const winner = combinations.some((comb) => {
    return comb.every((index) => {
      return cells[index].classList.contains(turn);
    });
  });

  if (winner) {
    gameCompleted(turn);
  } else if (checkDraw()) {
    gameCompleted();
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
  endOfGame = true;
  const result = document.getElementById("result");
  

  if (winner) {
    scores[winner] += 1;;
    
  } else {
    scores[playerO] += 1;;
    
  } 
  
  updateScores();
  clearCells();
  showModal();
}

function showModal(){
  const modal = document.createElement('div');
  modal.classList.add('showModal');


  const modalText = document.createElement('p');
  modalText.textContet = 'you won!'


  const button = document.createElement('button')
  button.textContent = 'Start game!';
  button.addEventListener ('click', () => {
  modal.remove();
  clearCells();
});

modal.appendChild(modalText);
modal.appendChild(button);

document.body.appendChild(modal);
}


function clearCells() {
    const cells = document.querySelectorAll(".cell");
        
        for (let i=0; i < cells.length; i++) {
    cells[i].textContent = '';

    }

}

function updateScores(){
  document.getElementById("win").innerHTML = scores[playerX]
  document.getElementById("loose").innerHTML = scores[playerO]
  /**document.getElementById("draw").innerHTML = scores[checkDraw]*/
}