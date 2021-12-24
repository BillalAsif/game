
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

        changeFill = () => {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            c.fillStyle = "green";
            c.fill();
            c.stroke();

        }

        setTimeout(changeFill, 10)

    }

}


let move = () => {

    const player = new Player(i, 45, 7, "red");
    player.draw();

}


let x = canvas.width / 2;
let y = canvas.height / 2;
//Player start position
const player = new Player(x, y, 20, "red");
player.draw();