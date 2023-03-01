/** starting script project */

const cells = document.querySelectorAll(".cell")

/**defining players */

let playerX = "X";
let playerO = "O";

/**defining event when clicking in the space to show the 2 players*/

document.addEventListener("click", myfunction);

function myfunction(event) {
    if(event.target.matches(".cell")){
        console.log(event.target.id)
    }
}; 