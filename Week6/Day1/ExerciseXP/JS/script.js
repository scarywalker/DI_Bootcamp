// 1
// function displayNumbersDivisible(divisor) {
//     let sum = 0
//     for (let i=0; i < 501; i++) {
//         if (i % divisor == 0) {
//             console.log(i)
//             sum += i
//         }
//     }
//     console.log(sum)
// };
// displayNumbersDivisible(45);

// 2
// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// let shoppingList = ["banana",'orange','apple']

// function myBill() {
//     let bill = 0
//     for (let item in shoppingList) {
//         if (stock[shoppingList[item]] > 0) {
//             bill += prices[shoppingList[item]]
//         }
//     }
//     return bill
// }
// console.log(myBill())

// 3
// function changeEnough(itemPrice, amountOfChange) {
//     return amountOfChange[0]/4 + amountOfChange[1]/10 + amountOfChange[2]/20 + amountOfChange[3]/100 >= itemPrice
// }
// console.log(changeEnough(4.25, [25, 20, 5, 0]))
// console.log(changeEnough(14.25, [25, 20, 5, 0]))

// 4
// function hotelCost() {
//     var days = Number(prompt("How many nights"));
//     var price = days*140;
//     if (isNaN(price)){
//         return hotelCost();
//     }
//     return price;
// }

// function planeRideCost() {
//     let destination = prompt("Where to?")
//     var price = 0
//     if (destination == "London") {
//         price = 183
//     } else if (destination == "Paris") {
//         price = 220
//     } else if (destination != "") {
//         price = 300
//     } else {
//         return planeRideCost()
//     }
//     return price
// }

// function rentalCarCost() {
//     var days = Number(prompt("How many days with car"));
//     var price = days*40;
//     if (isNaN(price)){
//         return rentalCarCost();
//     }
//     if (price >= 400) {
//         price *= 0.95
//     }
//     return price;
// }

// function totalVacationCost() {
//     return hotelCost()+planeRideCost()+rentalCarCost()
// }

// console.log(totalVacationCost())

// 5
// const container = document.getElementById("container");
// console.log(container);
// const name2 = document.getElementById("name2");
// name2.textContent = "Richard";
// const name4 = document.getElementById("name4");
// name4.remove();
// const firstName = document.getElementsByClassName("firstName");
// for (let i in firstName) {
//     firstName[i].textContent = "Gabriel";
// }
// container.style.backgroundColor = "blue";
// container.style.padding = "2px";
// const name5 = document.getElementById("name5");
// name5.style.display = "none";
// name2.style.border = "solid 1px";
// const body = document.getElementsByTagName("body")[0];
// console.log(body)
// body.style.fontSize = "20px";

// 6
// const navBar = document.getElementById("navBar");
// navBar.setAttribute("id", "socialNetworkNavigation");
// const ul1 = document.getElementsByTagName("ul")[0];
// let li = document.createElement('li');
// li.textContent = "Logout"
// ul1.appendChild(li)
// console.log(ul1.firstElementChild.textContent)
// console.log(ul1.lastElementChild.textContent)
