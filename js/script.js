
var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");
/* window.addEventListener('load', resize())
window.addEventListener('resize', () => {
    resize();
    drawPlayer();
}, true); */


class Player {

    constructor(x, y, radius, colour) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;

    }

    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.colour;
        c.fill();
        c.stroke();

    }

    oscillate() {

        var randomColour = Math.floor(Math.random() * 16777215).toString(16);

        setTimeout(() => {
            c.fillStyle = "#" + randomColour;
            c.fill();
            c.stroke();
        }, 1000)

    }

}


//Functions
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function randomEnemies() {

    let randomNum = () => {
        const arr = [16,17,18,19,20,21,22,23,24,25];
        const random = Math.floor(Math.random() * 10);
        const randomArr = arr[random];
        return randomArr;
    }
    const randomX = Math.floor(window.innerHeight / Math.floor(Math.random() * 10));
    const randomY = Math.floor(window.innerWidth / Math.floor(Math.random() * 10));
    const randomSize = randomNum();
    const randomSixDigit = Math.floor(Math.random() * 16777215).toString(16);
    const randomColour = "#" + randomSixDigit;

    //creates circles randomly
    const enemy = new Player(randomX, randomY, randomSize, randomColour)
    enemy.draw();

}

function drawPlayer() {

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    //Player start position
    const player = new Player(x, y, 20, "red");
    player.draw();

}

//Start game
drawPlayer();