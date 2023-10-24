// 1
// function hello() {
//     alert("Hello World")
// }

// const timeout1 = setTimeout(hello, 2000);

// 2
const container = document.getElementById("container");
function addHello() {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
    if (container.childElementCount > 4) {
        stopFunction();
    }
}

// const timeout2 = setTimeout(addHello, 2000);

// 3
const inter = setInterval(addHello, 2000);

function stopFunction() {
    clearInterval(inter);
}

const btn = document.getElementById("clear");

btn.addEventListener("click",stopFunction);




