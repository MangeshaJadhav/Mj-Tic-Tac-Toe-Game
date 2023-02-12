let turn = "X";
let music = new Audio("ring.mp3");
let gameOver = false;
//function to change X to 0 and vice versa
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

//function to check to win
const checkWin = () => {
  let boxtexts = document.getElementsByClassName("boxtext"); //span box call here
  let wins = [
    //win posiblity in grid box
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      //condition
      boxtexts[e[0]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[2]].innerText === boxtexts[e[1]].innerText &&
      boxtexts[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtexts[e[0]].innerText + "Won"; //put the text in info

      gameOver = true;
    }
  });
};
//main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  //assign each box with event
  let boxtext = element.querySelector(".boxtext"); //thiw span where we have write box inside box
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn(); //call this function to turn when empty
      music.play();
      checkWin(); //check someone win or not for that call it

      if (!gameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for" + turn; //here info is class name and work for you
      }
    }
  });
});

//reset
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxtext"); //thiw span where we have write box inside box
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
  });
  //when reset then start from X again
  turn = "X";
  gameOver = false;
  document.getElementsByClassName("info")[0].innerText = "Turn for" + turn; //here info is class name and work for you
});
