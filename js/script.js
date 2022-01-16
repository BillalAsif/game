var canvas = document.getElementById("mainCanvas");
var c = canvas.getContext("2d");
resize();
let startGame = setInterval(randomEnemies, 1000);
startGame;

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
        this.x = this.x - this.velocity.x;
        this.y = this.y - this.velocity.y;

    }
}

const fireMultipleMissiles = [];
const enemyApproach = [];

//Event Listeners - swpans missiles on click
canvas.addEventListener('click', (event) => {

    const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
    const velocity = { x: Math.cos(angle), y: Math.sin(angle) }
    fireMultipleMissiles.push(new Missile(canvas.width / 2, canvas.height / 2, 2, "blue", velocity));

});

//Functions
function animate() {

    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawPlayer();

    fireMultipleMissiles.forEach((missile) => {
        missile.update();
    })

    enemyApproach.forEach((enemy) => {
        
        enemy.update();
        
        if(enemy.x > 495 && enemy.x < 496 && enemy.y > 292 && enemy.y < 293) {

            alert("Game Over!");
            if(confirm) {

                endGame();
                c.clearRect(0, 0, canvas.width, canvas.height);

            }

        }

        //delete enemy on misile impact
        fireMultipleMissiles.forEach((missile) => {

            const distance = Math.hypot(missile.x - enemy.x, missile.y - enemy.y);

            if (distance - (enemy.radius - missile.radius) < 1) {
                enemyApproach.splice(enemyApproach.indexOf(enemy), 1);
                fireMultipleMissiles.splice(fireMultipleMissiles.indexOf(missile), 1);
                score.textContent = parseInt(score.textContent) + 1;
            }

        })

    })

}

function endGame() {

    clearInterval(startGame);

}

//resize canvas on refresh
function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

//spawns random enemies which drift towards the center of canvas
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
    const x = Math.random() * 2000;
    const y = Math.random() * 2000;
    const angle = Math.atan2(y - canvas.height / 2, x - canvas.width / 2)
    const velocity = { x: Math.cos(angle), y: Math.sin(angle) }

    enemyApproach.push(new Enemies(x, y, randomSize, randomColour, velocity));

}

//Score keeping
var score = document.getElementById("score");
score.textContent = 0;

//Start game
drawPlayer();
animate();

function drawPlayer() {

    let x = canvas.width / 2;
    let y = canvas.height / 2;
    const player = new Player(x, y, 20, "red");
    player.draw();

}


