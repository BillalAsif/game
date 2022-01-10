
var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");
resize();

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

    }

}

class Missile {

    constructor(x, y, radius, colour, velocity) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.velocity = velocity;

    }

    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.colour;
        c.fill();

    }

    update() {

        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;

    }
}

//complete code
class Enemies {

    constructor(x, y, radius, colour, velocity) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.colour = colour;
        this.velocity = velocity;

    }

    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        c.fillStyle = this.colour;
        c.fill();

    }

    update() {

        this.draw();
        this.x = this.x -this.velocity.x;
        this.y = this.y - this.velocity.y;

    }
}

//Event Listeners 
canvas.addEventListener('click', (event) => {

    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
    const velocity = { x: Math.cos(angle), y: Math.sin(angle) }
    fireMultipleMissiles.push(new Missile(canvas.width / 2, canvas.height / 2, 2, "blue", velocity));
    console.log(event.x, event.y);
    animateMissiles();

});


const fireMultipleMissiles = [];
const enemyApproach = [];


//Functions
function animateMissiles() {

    requestAnimationFrame(animateMissiles);
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    fireMultipleMissiles.forEach((missile) => {
        missile.update();
    })

}

function animateEnemies() {

    requestAnimationFrame(animateEnemies);
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();
    enemyApproach.forEach((enemy) => {
        enemy.update();
    })

}

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//complete code with Enemies class
function randomEnemies() {

    const randomNum = () => {
        const arr = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        const random = Math.floor(Math.random() * 10);
        const randomArr = arr[random];
        return randomArr;
    }


    const randomSize = randomNum();
    const randomSixDigit = Math.floor(Math.random() * 16777215).toString(16);
    const randomColour = "#" + randomSixDigit;
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const angle = Math.atan2(y - canvas.height / 2, x - canvas.width /2)
    const velocity = { x: Math.cos(angle), y: Math.sin(angle) }
    enemyApproach.push(new Enemies(x, y, randomSize, randomColour, velocity));
    animateEnemies();

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
randomEnemies()
//Create enemy

//anime same emeny

//collisation detect