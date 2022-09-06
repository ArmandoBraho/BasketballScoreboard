let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let newGameBtn = document.getElementById("new-game-btn");

let plus1BtnGuest = document.getElementById("plus-1-btn-guest");
let plus2BtnGuest = document.getElementById("plus-2-btn-guest");
let plus3BtnGuest = document.getElementById("plus-3-btn-guest");
let plus1BtnHome = document.getElementById("plus-1-btn-home");
let plus2BtnHome = document.getElementById("plus-2-btn-home");
let plus3BtnHome = document.getElementById("plus-3-btn-home");



function addPoints( squad, Points){
    let actualPointsHome = parseInt(scoreHome.textContent);
    let actualPointsGuest = parseInt(scoreGuest.textContent);
    
    if( squad === "home" ){
        scoreHome.textContent = actualPointsHome + Points;
        return;
    }
        scoreGuest.textContent = actualPointsGuest + Points;
}

function resetPoints(){
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
}