const planets = ["me",'ve',"ea","ma","ju","sa","ur","ne","pl"];
let listPlanets = document.getElementsByClassName("listPlanets")[0];
for (let i in planets) {
    let planet = document.createElement('div');
    planet.setAttribute("class", `planet planet${i}`);
    listPlanets.appendChild(planet);
} 
const planet0 = document.getElementsByClassName("planet0")[0];
planet0.style.backgroundColor = "blue";
const planet1 = document.getElementsByClassName("planet1")[0];
planet1.style.backgroundColor = "red";
const planet2 = document.getElementsByClassName("planet2")[0];
planet2.style.backgroundColor = "green";
const planet3 = document.getElementsByClassName("planet3")[0];
planet3.style.backgroundColor = "yellow";
const planet4 = document.getElementsByClassName("planet4")[0];
planet4.style.backgroundColor = "brown";
const planet5 = document.getElementsByClassName("planet5")[0];
planet5.style.backgroundColor = "pink";
const planet6 = document.getElementsByClassName("planet6")[0];
planet6.style.backgroundColor = "purple";
const planet7 = document.getElementsByClassName("planet7")[0];
planet7.style.backgroundColor = "white";
const planet8 = document.getElementsByClassName("planet8")[0];
planet8.style.backgroundColor = "cyan";