/** starting script project */

const cells = document.querySelectorAll(".cell")

let checkTurn = true ;

/**defining players */

let playerX = "X";
let playerO = "O";

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
};