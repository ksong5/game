// game

//canvas set up
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 800;

// variables
gamestate = "menu";

requestAnimationFrame(drawMenu);
function drawMenu() {
    //background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 800, 800);

    //start button
    ctx.fillStyle = "grey";
    ctx.fillRect(325, 337.5, 150, 75);
    
    // start button text
    ctx.font = "40px Arial";
    ctx.fillStyle = "white";
    ctx.fillText("START", 335, 390);

    requestAnimationFrame(drawMenu);
}