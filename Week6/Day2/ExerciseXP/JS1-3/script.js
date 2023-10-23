// 1
// const h1 = document.getElementsByTagName("h1")[0];
// console.log(h1);

// const article = document.getElementsByTagName("article")[0];
// article.removeChild(article.lastElementChild);

// const h2 = document.getElementsByTagName("h2")[0];
// function h2TurnRed(){
//     h2.style.backgroundColor = "red";
// }
// h2.addEventListener("click", h2TurnRed);

// const h3 = document.getElementsByTagName("h3")[0];
// function h3Vanish(){
//     h3.style.display = "none";
// }
// h3.addEventListener("click", h3Vanish);

// let btn = document.createElement('button');
// article.appendChild(btn);
// function bold(){
//     article.style.fontWeight = "bold";
// }
// btn.addEventListener("click", bold);

// 2
// const form = document.getElementsByTagName("form")[0];
// console.log(form)

// const fname = document.getElementById("fname");
// console.log(fname)
// const lname = document.getElementById("lname");
// console.log(lname)

// const fname = document.getElementsByName("firstname")[0];
// console.log(fname)
// const lname = document.getElementsByName("lastname")[0];
// console.log(lname)

// form.addEventListener("submit", getUser);
// function getUser(e){
//   e.preventDefault();
//   let first = fname.value;
//   let last = lname.value;
//   if (first != '' && last != '') {
//   console.log(`${first} ${last}`);
//   let user = document.createElement('li');
//   let usersAnswer = document.getElementsByClassName("usersAnswer")[0];
//   user.textContent = `${first} ${last}`;
//   usersAnswer.appendChild(user);
//  }
// }

// 3
// let allBoldItems = [];
// function getBoldItems() {
//     allBoldItems = document.getElementsByTagName("strong");    
//     return allBoldItems;
// }
// getBoldItems();
// function highlight() {
//     for (let i in allBoldItems) {
//         if (i <= 5) {
//             allBoldItems[i].style.color = "blue";
//         }
//     }
// };
// function returnItemsToDefault() {
//     for (let i in allBoldItems) {
//         if (i <= 5) {
//             allBoldItems[i].style.color = "black";
//         }
//     }
// };
// for (let i in allBoldItems) {
//     if (i <= 5) {
//         allBoldItems[i].addEventListener("mouseover",  highlight);
//         allBoldItems[i].addEventListener("mouseout",  returnItemsToDefault);
//     }
// } 
