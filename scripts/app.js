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
let userScore = 0;
let cpuScore = 0;
let userTwoResponse = "";

let playerOneTurn = true;
let oneVsOne = false;
let suddenDeath = false;
let bestof3 = false;
let bestof5 = false;
let bestof7 = false;

async function gameLogic() {
  console.log(userResponse);
  console.log(CpuResponse);

  if (suddenDeath == true) {
    switch (userResponse) {
      case "Rock":
        if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
          titleText.innerText = `You Win! ${userResponse} beats ${CpuResponse}`;
          userResponse = "";
        } else if (CpuResponse == "Spock" || CpuResponse == "Paper") {
          titleText.innerText = `You Lose! ${CpuResponse} beats ${userResponse}`;
          userResponse = "";
        } else {
          titleText.innerText = "Draw! No one wins!";
          userResponse = "";
        }
        break;
      case "Paper":
        if (CpuResponse == "Rock" || CpuResponse == "Spock") {
          titleText.innerText = `You Win! ${userResponse} beats ${CpuResponse}`;
          userResponse = "";
        } else if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
          titleText.innerText = `You Lose! ${CpuResponse} beats ${userResponse}`;
          userResponse = "";
        } else {
          titleText.innerText = "Draw!";
          userResponse = "";
        }
        break;
      case "Scissors":
        if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
          titleText.innerText = `You Win! ${userResponse} beats ${CpuResponse}`;
          userResponse = "";
        } else if (CpuResponse == "Spock" || CpuResponse == "Rock") {
          titleText.innerText = `You Lose! ${CpuResponse} beats ${userResponse}`;
          userResponse = "";
        } else {
          titleText.innerText = "Draw!";
          userResponse = "";
        }
        break;
      case "Lizard":
        if (CpuResponse == "Paper" || CpuResponse == "Spock") {
          titleText.innerText = `You Win! ${userResponse} beats ${CpuResponse}`;
          userResponse = "";
        } else if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
          titleText.innerText = `You Lose! ${CpuResponse} beats ${userResponse}`;
          userResponse = "";
        } else {
          titleText.innerText = "Draw!";
          userResponse = "";
        }
        break;
      case "Spock":
        if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
          titleText.innerText = `You Win! ${userResponse} beats ${CpuResponse}`;
          userResponse = "";
        } else if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
          titleText.innerText = `You Lose! ${CpuResponse} beats ${userResponse}`;
          userResponse = "";
        } else {
          titleText.innerText = "Draw!";
          userResponse = "";
        }
        break;
      default:
        titleText.innerText = "Hmmmm something is wrong please try again!";
        break;
    }
  } else if (bestof3 == true) {
    switch (userResponse) {
      case "Rock":
        if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
          userScore++;

          if (userScore > 1 && cpuScore < 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";

            titleText.innerText = "You Win! Choose Fighter";

            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";
          }
        } else if (CpuResponse == "Spock" || CpuResponse == "Paper") {
          cpuScore++;

          if (userScore < 2 && cpuScore > 1) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";

            titleText.innerText = "You Lose! Choose Fighter";

            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          titleText.innerText = "Draw! Choose Fighter";

          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";
        }
        break;
      case "Paper":
        if (CpuResponse == "Rock" || CpuResponse == "Spock") {
          userScore++;

          if (userScore > 1 && cpuScore < 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
          cpuScore++;

          if (userScore < 2 && cpuScore > 1) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }

        break;
      case "Scissors":
        if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
          userScore++;

          if (userScore > 1 && cpuScore < 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Spock" || CpuResponse == "Rock") {
          cpuScore++;

          if (userScore < 2 && cpuScore > 1) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }
        break;

      case "Lizard":
        if (CpuResponse == "Paper" || CpuResponse == "Spock") {
          userScore++;

          if (userScore > 1 && cpuScore < 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
          cpuScore++;

          if (userScore < 2 && cpuScore > 1) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }
        break;
      case "Spock":
        if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
          userScore++;

          if (userScore > 1 && cpuScore < 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Paper" || CpuResponse == "Lizard") {
          cpuScore++;

          if (userScore < 2 && cpuScore > 1) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }
        break;
      default:
        titleText.innerText = "Hmmmm something is wrong please try again!";
        break;
    }
  } else if (bestof5 == true) {
    switch (userResponse) {
      case "Rock":
        if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
          userScore++;

          if (userScore > 2 && cpuScore < 3) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";

            titleText.innerText = "You Win! Choose Fighter";

            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";
          }
        } else if (CpuResponse == "Spock" || CpuResponse == "Paper") {
          cpuScore++;

          if (userScore < 3 && cpuScore > 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";

            titleText.innerText = "You Lose! Choose Fighter";

            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          titleText.innerText = "Draw! Choose Fighter";

          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";
        }
        break;
      case "Paper":
        if (CpuResponse == "Rock" || CpuResponse == "Spock") {
          userScore++;

          if (userScore > 2 && cpuScore < 3) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
          cpuScore++;

          if (userScore < 3 && cpuScore > 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }

        break;
      case "Scissors":
        if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
          userScore++;

          if (userScore > 2 && cpuScore < 3) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Spock" || CpuResponse == "Rock") {
          cpuScore++;

          if (userScore < 3 && cpuScore > 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }
        break;

      case "Lizard":
        if (CpuResponse == "Paper" || CpuResponse == "Spock") {
          userScore++;

          if (userScore > 2 && cpuScore < 3) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
          cpuScore++;

          if (userScore < 3 && cpuScore > 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }
        break;
      case "Spock":
        if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
          userScore++;

          if (userScore > 2 && cpuScore < 3) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Win! Choose Fighter";
          }
        } else if (CpuResponse == "Paper" || CpuResponse == "Lizard") {
          cpuScore++;

          if (userScore < 3 && cpuScore > 2) {
            rockBtn.className = "col-4 display";
            paperBtn.className = "col-4 display";
            scissorsBtn.className = "col-4 display";
            lizardBtn.className = "col-4 display";
            spockBtn.className = "col-4 fighter-three-margin display";
            playAgainBtn.className = "new-game-btn";
            mainMenuTwoBtn.className = "rules-btn";

            mainMargin.className = "container main-margin";

            titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
            userResponse = "";
            userScore = 0;
            cpuScore = 0;
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "You Lose! Choose Fighter";
          }
        } else {
          rockBtn.className = "col-4";
          paperBtn.className = "col-4";
          scissorsBtn.className = "col-4";
          lizardBtn.className = "col-4";
          spockBtn.className = "col-4 fighter-three-margin";
          mainMenuTitle.className = "container title-box";
          titleText.className = "col title-text";
          mainMargin.className = "container";
          playAgainBtn.className = "new-game-btn display";
          mainMenuTwoBtn.className = "rules-btn display";

          titleText.innerText = "Draw! Choose Fighter";
        }
        break;
      default:
        titleText.innerText = "Hmmmm something is wrong please try again!";
        break;
    }
  } else if (bestof7 == true) {
    {
      switch (userResponse) {
        case "Rock":
          if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
            userScore++;

            if (userScore > 3 && cpuScore < 4) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";

              titleText.innerText = "You Win! Choose Fighter";

              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";
            }
          } else if (CpuResponse == "Spock" || CpuResponse == "Paper") {
            cpuScore++;

            if (userScore < 4 && cpuScore > 3) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";

              titleText.innerText = "You Lose! Choose Fighter";

              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";
            }
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            titleText.innerText = "Draw! Choose Fighter";

            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";
          }
          break;
        case "Paper":
          if (CpuResponse == "Rock" || CpuResponse == "Spock") {
            userScore++;

            if (userScore > 3 && cpuScore < 4) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Win! Choose Fighter";
            }
          } else if (CpuResponse == "Scissors" || CpuResponse == "Lizard") {
            cpuScore++;

            if (userScore < 4 && cpuScore > 3) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Lose! Choose Fighter";
            }
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "Draw! Choose Fighter";
          }

          break;
        case "Scissors":
          if (CpuResponse == "Lizard" || CpuResponse == "Paper") {
            userScore++;

            if (userScore > 3 && cpuScore < 4) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Win! Choose Fighter";
            }
          } else if (CpuResponse == "Spock" || CpuResponse == "Rock") {
            cpuScore++;

            if (userScore < 4 && cpuScore > 3) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Lose! Choose Fighter";
            }
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "Draw! Choose Fighter";
          }
          break;

        case "Lizard":
          if (CpuResponse == "Paper" || CpuResponse == "Spock") {
            userScore++;

            if (userScore > 3 && cpuScore < 4) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Win! Choose Fighter";
            }
          } else if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
            cpuScore++;

            if (userScore < 4 && cpuScore > 3) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Lose! Choose Fighter";
            }
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "Draw! Choose Fighter";
          }
          break;
        case "Spock":
          if (CpuResponse == "Scissors" || CpuResponse == "Rock") {
            userScore++;

            if (userScore > 3 && cpuScore < 4) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Won The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Win! Choose Fighter";
            }
          } else if (CpuResponse == "Paper" || CpuResponse == "Lizard") {
            cpuScore++;

            if (userScore < 4 && cpuScore > 3) {
              rockBtn.className = "col-4 display";
              paperBtn.className = "col-4 display";
              scissorsBtn.className = "col-4 display";
              lizardBtn.className = "col-4 display";
              spockBtn.className = "col-4 fighter-three-margin display";
              playAgainBtn.className = "new-game-btn";
              mainMenuTwoBtn.className = "rules-btn";

              mainMargin.className = "container main-margin";

              titleText.innerText = `You Lost The Match ${userScore} - ${cpuScore}!!!`;
              userResponse = "";
              userScore = 0;
              cpuScore = 0;
            } else {
              rockBtn.className = "col-4";
              paperBtn.className = "col-4";
              scissorsBtn.className = "col-4";
              lizardBtn.className = "col-4";
              spockBtn.className = "col-4 fighter-three-margin";
              mainMenuTitle.className = "container title-box";
              titleText.className = "col title-text";
              mainMargin.className = "container";
              playAgainBtn.className = "new-game-btn display";
              mainMenuTwoBtn.className = "rules-btn display";

              titleText.innerText = "You Lose! Choose Fighter";
            }
          } else {
            rockBtn.className = "col-4";
            paperBtn.className = "col-4";
            scissorsBtn.className = "col-4";
            lizardBtn.className = "col-4";
            spockBtn.className = "col-4 fighter-three-margin";
            mainMenuTitle.className = "container title-box";
            titleText.className = "col title-text";
            mainMargin.className = "container";
            playAgainBtn.className = "new-game-btn display";
            mainMenuTwoBtn.className = "rules-btn display";

            titleText.innerText = "Draw! Choose Fighter";
          }
          break;
        default:
          titleText.innerText = "Hmmmm something is wrong please try again!";
          break;
      }
    }
  } else {
    titleText.innerText = "Somehow you broke it. You Auto Win";
  }
}

const gameRules = {
  rock: { scissors: "crushes", lizard: "crushes" },
  paper: { rock: "covers", spock: "disproves" },
  scissors: { paper: "cuts", lizard: "decapitates" },
  lizard: { spock: "poisons", paper: "eats" },
  spock: { scissors: "smashes", rock: "vaporizes" },
};



function determineWinner() {
  if (userResponse === userTwoResponse) {
    titleText.innerText = "It's a Draw!";
  } else if (
    gameRules[userResponse.toLowerCase()]?.[userTwoResponse.toLowerCase()]
  ) {
    titleText.innerText = `Player 1 Wins: ${userResponse} beats ${userTwoResponse}`;
  } else if (
    gameRules[userTwoResponse.toLowerCase()]?.[userResponse.toLowerCase()]
  ) {
    titleText.innerText = `Player 2 wins: ${userTwoResponse} beats ${userResponse}`;
  }

  playAgainBtn.className = "new-game-btn";
  mainMenuTwoBtn.className = "rules-btn";
}

newGameBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn";
  vsCpuBtn.className = "rules-btn";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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

CpuResponse = "";
userResponse = "";
userScore = 0;
cpuScore = 0;
userTwoResponse = "";

playerOneTurn = true;
oneVsOne = false;
suddenDeath = false;
bestof3 = false;
bestof5 = false;
bestof7 = false;
});

rulesBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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
  bestOf5Btn.className = "mode-btn mt-4";
  bestOf7Btn.className = "mode-btn mt-4";
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
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
  rockBtn.className = "col-4";
  paperBtn.className = "col-4";
  scissorsBtn.className = "col-4";
  lizardBtn.className = "col-4";
  spockBtn.className = "col-4 fighter-three-margin";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";
  mainMargin.className = "container";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";

  titleText.innerText = "Choose Fighter";

  suddenDeath = true;
});

bestOf3Btn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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
  mainMargin.className = "container";

  titleText.innerText = "Choose Fighter";

  bestof3 = true;
});

bestOf5Btn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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
  mainMargin.className = "container";

  titleText.innerText = "Choose Fighter";

  bestof5 = true;
});

bestOf7Btn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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
  mainMargin.className = "container";

  titleText.innerText = "Choose Fighter";

  bestof7 = true;
});

rockBtn.addEventListener("click", async function () {
  if (oneVsOne == false) {
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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
  }

  if (oneVsOne == true && playerOneTurn == true) {
    rockBtn.className = "col-4";
    paperBtn.className = "col-4";
    scissorsBtn.className = "col-4";
    lizardBtn.className = "col-4";
    spockBtn.className = "col-4 fighter-three-margin";
    mainMargin.className = "container";

    mainMenuTitle.className = "container title-box";
    titleText.className = "col title-text";

    userResponse = "Rock";
    playerOneTurn = false;
    titleText.innerText = "Player Two: Choose Fighter!";
  } else if (oneVsOne == true && playerOneTurn == false){
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userTwoResponse = "Rock";

    determineWinner();
  }
});

paperBtn.addEventListener("click", async function () {
  if (oneVsOne == false) {
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userResponse = "Paper";

    fetchCPU();
  }

  if (oneVsOne == true && playerOneTurn == true) {
    rockBtn.className = "col-4";
    paperBtn.className = "col-4";
    scissorsBtn.className = "col-4";
    lizardBtn.className = "col-4";
    spockBtn.className = "col-4 fighter-three-margin";
    mainMargin.className = "container";

    mainMenuTitle.className = "container title-box";
    titleText.className = "col title-text";

    userResponse = "Paper";
    playerOneTurn = false;
    titleText.innerText = "Player Two: Choose Fighter!";
  } else if (oneVsOne == true && playerOneTurn == false) {
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userTwoResponse = "Paper";

    determineWinner();
  }
});

scissorsBtn.addEventListener("click", async function () {
  if (oneVsOne == false) {
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userResponse = "Scissors";

    fetchCPU();
  }

  if (oneVsOne == true && playerOneTurn == true) {
    rockBtn.className = "col-4";
    paperBtn.className = "col-4";
    scissorsBtn.className = "col-4";
    lizardBtn.className = "col-4";
    spockBtn.className = "col-4 fighter-three-margin";
    mainMargin.className = "container";

    mainMenuTitle.className = "container title-box";
    titleText.className = "col title-text";

    userResponse = "Scissors";
    playerOneTurn = false;
    titleText.innerText = "Player Two: Choose Fighter!";
  } else if (oneVsOne == true && playerOneTurn == false){
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userTwoResponse = "Scissors";

    determineWinner();
  }
});

lizardBtn.addEventListener("click", async function () {
  if (oneVsOne == false) {
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userResponse = "Lizard";

    fetchCPU();
  }

  if (oneVsOne == true && playerOneTurn == true) {
    rockBtn.className = "col-4";
    paperBtn.className = "col-4";
    scissorsBtn.className = "col-4";
    lizardBtn.className = "col-4";
    spockBtn.className = "col-4 fighter-three-margin";
    mainMargin.className = "container";

    mainMenuTitle.className = "container title-box";
    titleText.className = "col title-text";

    userResponse = "Lizard";
    playerOneTurn = false;
    titleText.innerText = "Player Two: Choose Fighter!";
  } else if (oneVsOne == true && playerOneTurn == false) {
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userTwoResponse = "Lizard";

    determineWinner();
  }
});

spockBtn.addEventListener("click", async function () {
  if (oneVsOne == false) {
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userResponse = "Spock";

    fetchCPU();
  }
  if (oneVsOne == true && playerOneTurn == true) {
    rockBtn.className = "col-4";
    paperBtn.className = "col-4";
    scissorsBtn.className = "col-4";
    lizardBtn.className = "col-4";
    spockBtn.className = "col-4 fighter-three-margin";
    mainMargin.className = "container";

    mainMenuTitle.className = "container title-box";
    titleText.className = "col title-text";

    userResponse = "Spock";
    playerOneTurn = false;
    titleText.innerText = "Player Two: Choose Fighter!";
  } else if (oneVsOne == true && playerOneTurn == false) {
    rulesBtn.className = "rules-btn display";
    mainMenuBtn.className = "main-menu-btn display";
    oneVsOneBtn.className = "new-game-btn display";
    vsCpuBtn.className = "rules-btn display";
    suddenDeathBtn.className = "mode-btn display";
    bestOf3Btn.className = "mode-btn display";
    bestOf5Btn.className = "mode-btn mt-4 display";
    bestOf7Btn.className = "mode-btn mt-4 display";
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

    userTwoResponse = "Spock";

    determineWinner();
  }
});

playAgainBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn";
  vsCpuBtn.className = "rules-btn";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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

CpuResponse = "";
userResponse = "";
userScore = 0;
cpuScore = 0;
userTwoResponse = "";

playerOneTurn = true;
oneVsOne = false;
suddenDeath = false;
bestof3 = false;
bestof5 = false;
bestof7 = false;
});

mainMenuTwoBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn";
  rulesBtn.className = "rules-btn";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
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

oneVsOneBtn.addEventListener("click", function () {
  newGameBtn.className = "new-game-btn display";
  rulesBtn.className = "rules-btn display";
  mainMenuBtn.className = "main-menu-btn display";
  oneVsOneBtn.className = "new-game-btn display";
  vsCpuBtn.className = "rules-btn display";
  suddenDeathBtn.className = "mode-btn display";
  bestOf3Btn.className = "mode-btn display";
  bestOf5Btn.className = "mode-btn mt-4 display";
  bestOf7Btn.className = "mode-btn mt-4 display";
  rockBtn.className = "col-4";
  paperBtn.className = "col-4";
  scissorsBtn.className = "col-4";
  lizardBtn.className = "col-4";
  spockBtn.className = "col-4 fighter-three-margin";
  playAgainBtn.className = "new-game-btn display";
  mainMenuTwoBtn.className = "rules-btn display";
  mainMargin.className = "container";

  mainMenuTitle.className = "container title-box";
  titleText.className = "col title-text";
  rulesTitle.className = "container rules-box display";

  titleText.innerText = " Player One: Choose Fighter!";

  oneVsOne = true;
  playerOneTurn = true;
  userResponse = "";
  userTwoResponse = "";
});
