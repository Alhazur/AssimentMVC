var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
        [['W'], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], ['P'], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
        [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
};

let xPosMove = 11;
let yPosMove = 11;

var xPos = 0;
var yPos = 0;

var xPosMove2 = 0;
var yPosMove2 = 0;

var limit = 6;
var counter = 0;
var goalList = [];


function drawMap() {
    var gameMap = document.getElementById('container');

    gameMap.style.width = 30 * tileMap01.width + "px";

    for (var i = 0; i < tileMap01.mapGrid.length; i++) {
        for (var j = 0; j < tileMap01.mapGrid[i].length; j++) {

            var mapblock = document.createElement("div");

            mapblock.id = j + "x" + i + "y";

            if (tileMap01.mapGrid[i][j][0] == ' ') {
                mapblock.classList.add("space");
            }
            else if (tileMap01.mapGrid[i][j][0] == "W") {
                mapblock.classList.add("wall");
            }
            else if (tileMap01.mapGrid[i][j][0] == "P") {
                mapblock.classList.add("space");
                mapblock.classList.add("player");
                xPos = j;
                yPos = i;
            }
            else if (tileMap01.mapGrid[i][j][0] == "B") {
                mapblock.classList.add("space");
                mapblock.classList.add("block");
            }
            else if (tileMap01.mapGrid[i][j][0] == "G") {
                mapblock.classList.add("goal");
                goalList.push(mapblock);
            }

            gameMap.appendChild(mapblock);

        }
    }
}
window.onload = function () {
    drawMap();

}
var htmlbody = document.getElementById("demo");

htmlbody.addEventListener('keydown', function (e) {


    xPosMove2 = xPos;
    yPosMove2 = yPos;
    xPosMove = xPos;
    yPosMove = yPos;

    switch (e.keyCode) {
        case 38:
            yPosMove += -1;
            yPosMove2 += -2;
            break;
        case 40:
            yPosMove += 1;
            yPosMove2 += 2;
            break;
        case 37:
            xPosMove += -1;
            xPosMove2 += -2;
            break;
        case 39:
            xPosMove += 1;
            xPosMove2 += 2;
            break;
        default:
            break;
    }

    console.log(xPos + "x" + yPos + "y" + " Old");
    console.log(xPosMove + "x" + yPosMove + "y" + " Now");
    console.log(xPosMove2 + "x" + yPosMove2 + "y" + " New");
    //console.log("can i move: " + playerMoveToElement.className);

    var playerElement = document.getElementById((xPos + "x") + (yPos + "y"));
    var playerMoveToElement = document.getElementById((xPosMove + "x") + (yPosMove + "y"));
    var playerMoveToElement2 = document.getElementById((xPosMove2 + "x") + (yPosMove2 + "y"));
    
    var step = document.getElementById("step");
    var goal = document.getElementById("goal");


    function playerGo() {
        if (playerMoveToElement.classList.contains("block") && playerMoveToElement2.classList.contains("block") || playerMoveToElement.classList.contains("block") && playerMoveToElement2.classList.contains("wall")) {

        } else {

            playerElement.classList.remove("player");
            playerMoveToElement.classList.add("player");
            xPos = xPosMove;
            yPos = yPosMove;
            step.innerHTML++;
        }
    }
    function blockGo() {

        if (playerMoveToElement2.classList.contains("block") || playerMoveToElement2.classList.contains("wall")) {

        }
        else if (playerMoveToElement.classList.contains("space") || playerMoveToElement.classList.contains("goal")) {

            playerMoveToElement.classList.remove("block");
            playerMoveToElement2.classList.add("block");
            playerGo();
            score();
        }
        console.log("and behind ------------- the block is " + playerMoveToElement.className);
        console.log("and behind ------------- the block is " + playerMoveToElement2.className);
    }
    function score() {

        //console.log("goal blocks contains:")
        let num = 0;
        goalList.forEach(element => {
            if(element.classList.contains("block")){
                num++;
            }
        });

        //console.log("goal block count: " + num);
        goal.innerHTML = num;

        if (num >= limit) {
            console.log("Gratis");

        }
        /*
        if (playerMoveToElement2.classList.contains("goal") && playerMoveToElement2.classList.contains("block")) {

            if (counter < limit) {

                var countBlock = document.getElementsByClassName("goal block").length;

                goal.innerHTML = countBlock;
                console.log("Gratis");
                counter++;
            }
        }
        */

    }
    

    function start() {
        //start 
        if (playerMoveToElement.classList.contains("space") || playerMoveToElement.classList.contains("goal")) {
            //console.log("move becose space or goal ++++++++++++++++++");
            // move the player
            if (counter < limit) {
                playerGo();
                if (playerMoveToElement.classList.contains("block")) {

                    blockGo();

                }
            } else {
                console.log("Gratis7777777777777");
            }
            //console.log("im was *************** her");
        }
        else {
            console.log("Stena");
        }
    }
    
    start();





});