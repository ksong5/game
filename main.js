// game

//canvas set up
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;
ctx.translate(400, 400);

//mouse coordinates
let mouseX, mouseY;

// mousehandlers
document.addEventListener("mousemove", mousemoveHandler);
// document.addEventListener("mousemove", angleCalc);
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
    ctx.fillRect(-400, -400, cnv.width, cnv.height);

    // button1
    ctx.fillStyle = "grey";
    ctx.fillRect(-75, -30, 150, 60);

    // button1 text
    ctx.font = "40px Arial"
    ctx.fillStyle = "black";
    ctx.fillText("START", -65, 15);
}

// start button function
function click() {
    console.log(mouseX, mouseY);

    if (gamestate === "menu" && mouseX > 326 && mouseX < 475 && mouseY > 371 && mouseY < 429) {
        gamestate = "gaming";
        console.log(gamestate);
    }
}

function drawGame() {
    ctx.rotate(10 * Math.PI / 180);

    ctx.fillStyle = "white";
    ctx.fillRect(-200, -200, cnv.width, cnv.height);

    ctx.fillStyle = "grey";
    ctx.arc(0, 0, 35, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "grey";
    ctx.fillRect(-10, 0, 20, 70);
}

// setInterval(angleCalc, 100);

// function angleCalc(mouseX, mouseY) {
//     Math.atan2(mouseX, mouseY) * 180 / Math.PI;
// }

