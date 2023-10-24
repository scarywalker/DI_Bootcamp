const container = document.getElementById("container");
const animate = document.getElementById("animate");
let left = 1

function move1() {
    if (left <= 350) {
        animate.style.left = left+"px";
        left += 1;
    }
}

function myMove() {
    setInterval(move1, 1);
}

