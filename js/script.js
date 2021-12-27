
var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");

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


let randomEnemies = () => {

    //creates circles randomly

}


let x = canvas.width / 2;
let y = canvas.height / 2;
//Player start position
const player = new Player(x, y, 20, "red");
player.draw();