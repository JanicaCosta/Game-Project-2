/** starting script project */

const cells = document.querySelectorAll(".cell")

let checkTurn = true ;

/**defining players */

let playerX = "X";
let playerO = "O";

/** winner combinations */

let winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

/**defining event when clicking in the space to show the 2 players*/

document.addEventListener("click", myfunction);

function myfunction(event) {
    if(event.target.matches(".cell")){
        startClicking(event.target.id)
    }
}; 

/** function beelow is to play/starting the game when we click in the cell */

function startClicking(id) {
    let cell = document.getElementById(id);
    turn = checkTurn ? playerX : playerO;
    cell.textContent = turn;
    checkTurn = !checkTurn;
    cell.classList.add(turn);
    checkWiner(turn);
};

/** function below will be to check the winner using the combinations above */

function checkWinner(turn){
    const winner = winnerCombinations.some((comb) => {
        return comb.every((index) => {
          return cells[index].classList.contains(turn);
        });
      });

      if (winner) {
        gameCompleted(turn);
      } else if (checkDraw()) {
        gameCompleted();
      } else {
        checkTurn = !checkTurn;
      }
}

/**function below is to check if there is any drawn */

function checkDraw(){
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