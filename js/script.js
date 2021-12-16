
var canvas = document.getElementById("mainCanvas");

function drawPlayer() {
    let player = canvas.getContext("2d");

    player.beginPath();
    player.arc(95, 50, 40, 0, 2 * Math.PI);
    player.stroke();

}