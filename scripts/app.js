let newGameBtn = document.getElementById("newGameBtn")
let rulesBtn = document.getElementById("rulesBtn")
let mainMenuBtn = document.getElementById("mainMenuBtn")
let oneVsOneBtn = document.getElementById("oneVsOneBtn")
let vsCpuBtn = document.getElementById("vsCpuBtn")
let suddenDeathBtn = document.getElementById("suddenDeathBtn")
let bestOf3Btn = document.getElementById("bestOf3Btn")
let bestOf5Btn = document.getElementById("bestOf5Btn")
let bestOf7Btn = document.getElementById("bestOf7Btn")
let rockBtn = document.getElementById("rockBtn")
let paperBtn = document.getElementById("paperBtn")
let scissorsBtn = document.getElementById("scissorsBtn")
let lizardBtn = document.getElementById("lizardBtn")
let spockBtn = document.getElementById("spockBtn")
let playAgainBtn = document.getElementById("playAgainBtn")
let mainMenuTwoBtn = document.getElementById("mainMenuTwoBtn")

let mainMenuTitle = document.getElementById("mainMenuTitle")
let titleText = document.getElementById("titleText")
let rulesTitle = document.getElementById("rulesTitle")
let mainMargin = document.getElementById("mainMargin")

function apiCall(){
    fetch(` https://rpslsgame-gaeheuhhhzchdeh9.westus-01.azurewebsites.net`)
    .then((response) => { 
        return response.json()

    })
    .then((data) => {
        console.log(data);
    })
}

/* apiCall(); */

newGameBtn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn"
    vsCpuBtn.className = "rules-btn"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"

    titleText.innerText = "Choose Game Mode"
   
});

rulesBtn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box display"
    titleText.className = "col title-text display"
    rulesTitle.className = "container rules-box"
    mainMargin.className = "container"
 
});

mainMenuBtn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn";
    rulesBtn.className = "rules-btn"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"

    titleText.innerText = "Rock Paper Scissors Lizard Spock"
  
});


vsCpuBtn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn"
    bestOf3Btn.className = "mode-btn"
    bestOf5Btn.className = "mode-btn"
    bestOf7Btn.className = "mode-btn"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"
    mainMargin.className = "container main-margin"

    mainMenuTitle.className = "container title-box"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"

    titleText.innerText = "Choose Number Of Games"
 
});

suddenDeathBtn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4"
    paperBtn.className = "col-4"
    scissorsBtn.className = "col-4"
    lizardBtn.className = "col-4"
    spockBtn.className = "col-4 fighter-three-margin"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box"
     titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container fighter-margin"

    titleText.innerText = "Choose Fighter"
  
});

bestOf3Btn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4"
    paperBtn.className = "col-4"
    scissorsBtn.className = "col-4"
    lizardBtn.className = "col-4"
    spockBtn.className = "col-4 fighter-three-margin"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box"
     titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container fighter-margin"

    titleText.innerText = "Choose Fighter"
    
});

bestOf5Btn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4"
    paperBtn.className = "col-4"
    scissorsBtn.className = "col-4"
    lizardBtn.className = "col-4"
    spockBtn.className = "col-4 fighter-three-margin"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box"
     titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container fighter-margin"

    titleText.innerText = "Choose Fighter"
   
});

bestOf7Btn.addEventListener("click", function(){
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4"
    paperBtn.className = "col-4"
    scissorsBtn.className = "col-4"
    lizardBtn.className = "col-4"
    spockBtn.className = "col-4 fighter-three-margin"
    playAgainBtn.className = "new-game-btn main-margin display"
    mainMenuTwoBtn.className = "main-menu-btn display"

    mainMenuTitle.className = "container title-box"
     titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container fighter-margin"

    titleText.innerText = "Choose Fighter"
  
});

rockBtn.addEventListener("click", function(){

    
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin"
    mainMenuTwoBtn.className = "main-menu-btn"

    mainMenuTitle.className = "container title-box display"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"


    if(){
        titleText.innerText = "You Win!"
    }else if(){
        titleText.innerText = "You Lose!"
    }else{
        titleText.innerText = "Draw!"
    }
        

  
});

paperBtn.addEventListener("click", function(){

    
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin"
    mainMenuTwoBtn.className = "main-menu-btn"

    mainMenuTitle.className = "container title-box display"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"
    

    if(){
        titleText.innerText = "You Win!"
    }else if(){
        titleText.innerText = "You Lose!"
    }else{
        titleText.innerText = "Draw!"
    }
        

  
});

scissorsBtn.addEventListener("click", function(){

    
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin"
    mainMenuTwoBtn.className = "main-menu-btn"

    mainMenuTitle.className = "container title-box display"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"
    

    if(){
        titleText.innerText = "You Win!"
    }else if(){
        titleText.innerText = "You Lose!"
    }else{
        titleText.innerText = "Draw!"
    }
        

  
});

lizardBtn.addEventListener("click", function(){

    
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin"
    mainMenuTwoBtn.className = "main-menu-btn"

    mainMenuTitle.className = "container title-box display"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"
    

    if(){
        titleText.innerText = "You Win!"
    }else if(){
        titleText.innerText = "You Lose!"
    }else{
        titleText.innerText = "Draw!"
    }
        

  
});

spockBtn.addEventListener("click", function(){

    
    newGameBtn.className = "new-game-btn display";
    rulesBtn.className = "rules-btn display"
    mainMenuBtn.className = "main-menu-btn display"
    oneVsOneBtn.className = "new-game-btn display"
    vsCpuBtn.className = "rules-btn display"
    suddenDeathBtn.className = "mode-btn display"
    bestOf3Btn.className = "mode-btn display"
    bestOf5Btn.className = "mode-btn display"
    bestOf7Btn.className = "mode-btn display"
    rockBtn.className = "col-4 display"
    paperBtn.className = "col-4 display"
    scissorsBtn.className = "col-4 display"
    lizardBtn.className = "col-4 display"
    spockBtn.className = "col-4 fighter-three-margin display"
    playAgainBtn.className = "new-game-btn main-margin"
    mainMenuTwoBtn.className = "main-menu-btn"

    mainMenuTitle.className = "container title-box display"
    titleText.className = "col title-text"
    rulesTitle.className = "container rules-box display"
    mainMargin.className = "container main-margin"
    

    if(){
        titleText.innerText = "You Win!"
    }else if(){
        titleText.innerText = "You Lose!"
    }else{
        titleText.innerText = "Draw!"
    }
        

  
});


