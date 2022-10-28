// game

//canvas set up
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

//mouse coordinates
let mouseX, mouseY;

// mousehandlers
document.addEventListener("mousemove", mousemoveHandler);
document.addEventListener("mousedown", click);
      
function mousemoveHandler(event) {
    // Get rectangle info about canvas location
    let cnvRect = cnv.getBoundingClientRect(); 
      
    // Calc mouse coordinates using mouse event and canvas location info
    mouseX = Math.round(event.clientX - cnvRect.left);
    mouseY = Math.round(event.clientY - cnvRect.top);
}

// draw function
window.addEventListener("load", draw);

// gamestate function
let gamestate = "menu"

function draw() {
    if (gamestate === "menu") {
        drawMenu();
    } else if (gamestate === "ctrl-ttrl") {
        drawControlTutorial();
    } else if (gamestate === "gaming") {
        drawGame();
    } else if (gamestate === "gameover") {
        drawGameOver();
    }

    requestAnimationFrame(draw);
}

function drawMenu() {
    // background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // button1
    ctx.fillStyle = "grey";
    ctx.fillRect(400 - 175 / 2, 600, 175, 60);

    // button1 text
    ctx.font = "40px Arial"
    ctx.fillStyle = "black";
    ctx.fillText("START", 335, 645);
}

// start button function
function click() {
    console.log(mouseX, mouseY);

    if (gamestate === "menu" && mouseX > 314 && mouseX < 314 + 175 && mouseY > 600 && mouseY < 600 + 60) {
        gamestate = "gaming";
        console.log(gamestate);
    }
}

function drawGame() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
}
