async function fetchCPU() {
  let fetchResponse = await fetch(
    "https://rpslsgame-gaeheuhhhzchdeh9.westus-01.azurewebsites.net/RPSLS/GetComputerResponse"
  );
  let response = await fetchResponse.text();
  CpuResponse = response;
  gameLogic();
  return response;
}

let newGameBtn = document.getElementById("newGameBtn");
let rulesBtn = document.getElementById("rulesBtn");
let mainMenuBtn = document.getElementById("mainMenuBtn");
let oneVsOneBtn = document.getElementById("oneVsOneBtn");
let vsCpuBtn = document.getElementById("vsCpuBtn");
let suddenDeathBtn = document.getElementById("suddenDeathBtn");
let bestOf3Btn = document.getElementById("bestOf3Btn");
let bestOf5Btn = document.getElementById("bestOf5Btn");
let bestOf7Btn = document.getElementById("bestOf7Btn");
let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");
let lizardBtn = document.getElementById("lizardBtn");
let spockBtn = document.getElementById("spockBtn");
let playAgainBtn = document.getElementById("playAgainBtn");
let mainMenuTwoBtn = document.getElementById("mainMenuTwoBtn");

let mainMenuTitle = document.getElementById("mainMenuTitle");
let titleText = document.getElementById("titleText");
let rulesTitle = document.getElementById("rulesTitle");
let mainMargin = document.getElementById("mainMargin");

let CpuResponse = "";
let userResponse = "";

async function gameLogic() {

    console.log(userResponse);
    console.log(CpuResponse);

  switch (userResponse) {
    case "Rock":
      if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
        titleText.innerText = "You Win!";
      } else if (CpuResponse == "Spock" || CpuResponse == "Paper") {
        titleText.innerText = "You Lose!";
      } else {
        titleText.innerText = "Draw";
      }
      break;
    case "Paper":
      if (CpuResponse == "Rock" || CpuResponse == "Spock") {
        titleText.innerText = "You Win!";
      } else if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
        titleText.innerText = "You Lose!";
      } else {
        titleText.innerText = "Draw";
      }
      break;
    case "Scissors":
      if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
        titleText.innerText = "You Win!";
      } else if (CpuResponse == "Spock" || CpuResponse == "Rock") {
        titleText.innerText = "You Lose!";
      } else {
        titleText.innerText = "Draw";
      }
      break;
    case "Lizard":
      if (CpuResponse == "Paper" || CpuResponse == "Spock") {
        titleText.innerText = "You Win!";
      } else if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
        titleText.innerText = "You Lose!";
      } else {
        titleText.innerText = "Draw";
      }
      break;
    case "Spock":
      if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
        titleText.innerText = "You Win!";
      } else if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
        titleText.innerText = "You Lose!";
      } else {
        titleText.innerText = "Draw";
      }
      break;
    default:
      titleText.innerText = "Hmmmm something is wrong please try again!";
      break;
  }
}

newGameBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn";
  vsCpuBtn.className = "rules-btn";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

  titleText.innerText = "Choose Game Mode";
});

rulesBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box display";
  titleText.className = "col title-text display";
  rulesTitle.className = "container rules-box";
  mainMargin.className = "container";
});

mainMenuBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn";
  rulesBtn.className = "rules-btn";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

  titleText.innerText = "Rock Paper Scissors Lizard Spock";
});

vsCpuBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn";
  bestOf3Btn.className = "mode-btn";
  bestOf5Btn.className = "mode-btn";
  bestOf7Btn.className = "mode-btn";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMargin.className = "container main-margin";
  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";

  titleText.innerText = "Choose Number Of Games";
});

suddenDeathBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4";
  paperBtn.className = "col-4";
  scissorsBtn.className = "col-4";
  lizardBtn.className = "col-4";
  spockBtn.className = "col-4 fighter-three-margin";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";
  mainMargin.className = "container"

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";

  titleText.innerText = "Choose Fighter";
});

bestOf3Btn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4";
  paperBtn.className = "col-4";
  scissorsBtn.className = "col-4";
  lizardBtn.className = "col-4";
  spockBtn.className = "col-4 fighter-three-margin";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container fighter-margin";

  titleText.innerText = "Choose Fighter";
});

bestOf5Btn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4";
  paperBtn.className = "col-4";
  scissorsBtn.className = "col-4";
  lizardBtn.className = "col-4";
  spockBtn.className = "col-4 fighter-three-margin";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container fighter-margin";

  titleText.innerText = "Choose Fighter";
});

bestOf7Btn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4";
  paperBtn.className = "col-4";
  scissorsBtn.className = "col-4";
  lizardBtn.className = "col-4";
  spockBtn.className = "col-4 fighter-three-margin";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container fighter-margin";

  titleText.innerText = "Choose Fighter";
});

rockBtn.addEventListener("click", async function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn";
  mainMenuTwoBtn.className = "rules-btn";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

  userResponse = "Rock";

  fetchCPU();

});

paperBtn.addEventListener("click", async function () {
  

  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn";
  mainMenuTwoBtn.className = "rules-btn";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

 userResponse = "Paper"

 fetchCPU();
});

scissorsBtn.addEventListener("click", async function () {
  

  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

 userResponse = "Scissors"

 fetchCPU();
});

lizardBtn.addEventListener("click", async function () {
 

  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn";
  mainMenuTwoBtn.className = "rules-btn";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

  userResponse = "Lizard"

  fetchCPU();
});

spockBtn.addEventListener("click", async function () {


  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn";
  mainMenuTwoBtn.className = "rules-btn";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

 userResponse = "Spock"

 fetchCPU();
});

playAgainBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn";
  vsCpuBtn.className = "rules-btn";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

  titleText.innerText = "Choose Game Mode";
});

mainMenuBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn";
  rulesBtn.className = "rules-btn";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn display";
  bestOf7Btn.className = "mode-btn display";
  rockBtn.className = "col-4 display";
  paperBtn.className = "col-4 display";
  scissorsBtn.className = "col-4 display";
  lizardBtn.className = "col-4 display";
  spockBtn.className = "col-4 fighter-three-margin display";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";
  mainMargin.className = "container main-margin";

  titleText.innerText = "Rock Paper Scissors Lizard Spock";
});
