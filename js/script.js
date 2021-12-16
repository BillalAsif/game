
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

}

const player = new Player(50, 45, 7, "green");
player.draw();