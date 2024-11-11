let boxes = document.querySelectorAll(".box");
let restartButton = document.querySelector(".btn-restart");
let newGameButton = document.querySelector(".btn-new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let winnerPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnO = true;

// Function to handle box clicks
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if(turnO){
      box.innerText = 'O';
      box.style.color = "blue";
      turnO = false;
    }else{
      box.innerText = 'X';
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true; // Disable the box after it's clicked
    checkWinner();
    // Check for a winner or draw
  })
});
 const disableBoxes = () => {
  for(let box of boxes){
    box.disabled = true;
    
  }
 }

 const enableBoxes = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
 }

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
}


const checkWinner = () => {
  for( let pattern of winnerPattern){
    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText; 

    if(position1Value!="" && position2Value!="" && position3Value!=""){
      if(position1Value === position2Value && position2Value === position3Value){
        showWinner(position1Value);
      }
    }
  }
  //Check for a draw if all boxes are filled and no winner
  if (Array.from(boxes).every(box => box.innerText !== "")) {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
  }
}
 

const restartGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

restartButton.addEventListener("click", restartGame);
newGameButton.addEventListener("click", restartGame);






///////////////////////////////////////////////////////////////

// let turnO = true;

// // Function to handle box clicks
// boxes.forEach((box) => {
//   box.addEventListener("click", () => {
//     if (turnO) {
//       box.innerText = "O";
//       box.style.color = "blue";
//     } else {
//       box.innerText = "X";
//       box.style.color = "red";
//     }
//     box.disabled = true; // Disable the box after it's clicked
//     turnO = !turnO; // Toggle turn
//     checkWin(); // Check for a winner
//   });
// });

// // Function to check for a winner or draw
// const checkWin = () => {
//   for (let condition of winningConditions) {
//     let [a, b, c] = condition;
//     if (
//       boxes[a].innerText === boxes[b].innerText &&
//       boxes[b].innerText === boxes[c].innerText &&
//       boxes[a].innerText !== ""
//     ) {
//       msg.innerText = `${boxes[a].innerText} is the winner!`;
//       msgContainer.classList.remove("hide");

//       // Highlight winning combination
//       boxes[a].style.color = "green";
//       boxes[b].style.color = "green";
//       boxes[c].style.color = "green";

//       // Disable all boxes
//       disableAllBoxes();
//       return; // Exit once a winner is found
//     }
//   }

//   // Check for a draw if all boxes are filled and no winner
//   if (Array.from(boxes).every(box => box.innerText !== "")) {
//     msg.innerText = "It's a draw!";
//     msgContainer.classList.remove("hide");
//   }
// };

// // Function to disable all boxes
// const disableAllBoxes = () => {
//   boxes.forEach(box => box.disabled = true);
// };

// // Function to reset the game
// const resetGame = () => {
//   boxes.forEach((box) => {
//     box.innerText = "";
//     box.disabled = false;
//     box.style.color = ""; // Reset color
//   });
//   msgContainer.classList.add("hide");
//   turnO = true; // Reset turn to "O"
// };

// // New Game and Restart Button Event Listeners
// newGameButton.addEventListener("click", resetGame);
// restart.addEventListener("click", resetGame);
