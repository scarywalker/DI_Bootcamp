// 2

let experiencePoints = 0;

winBattle = x => x ? experiencePoints += 10 : experiencePoints += 1;

console.log(winBattle(true));
console.log(winBattle(false));

// 3

isString = x => typeof(x) === "string"

console.log(isString('hello'));
console.log(isString([1, 2, 4, 0]));

// 4

sum = (x,y) => x+y;

console.log(sum(4,5));

// 5

function kgToGramsDeclaration(weightInKg) {
    return weightInKg * 1000;
  }
  
console.log(kgToGramsDeclaration(2));
  
const kgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
  };
  
console.log(kgToGramsExpression(2)); 
  
// The main difference is that Function Declarations are hoisted, which means they can be used before they are declared in the code. Function Expressions are not hoisted, so they can only be used after they are defined.
  
const kgToGramsArrow = weightInKg => weightInKg * 1000;
  
console.log(kgToGramsArrow(2));

// 6

(function(numberOfChildren, partnerName, geographicLocation, jobTitle) {
    var sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  
    var paragraph = document.createElement('p');
    paragraph.textContent = sentence;
  
    document.body.appendChild(paragraph);
})(3, "Alice", "Israel", "Web Developer");

//   7

// (function(username) {
//     var userContainer = document.getElementById('navBar');
  
//     var userNameDiv = document.createElement('div');
//     userNameDiv.textContent = `Welcome, ${username}`;
  
//     var userProfilePicture = document.createElement('img');
//     userProfilePicture.src = '...';
  
//     userContainer.appendChild(userNameDiv);
//     userContainer.appendChild(userProfilePicture);
// })('John Doe');

// 8

function makeJuice(size){
    let ingredients = [];
    function addIngredients(ing1,ing2,ing3){
        ingredients.push(ing1,ing2,ing3);
        alert(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`);
    }
    function displayJuice(){
        alert(`The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}`);
    }
    addIngredients('a','b','c');
    addIngredients('d','e','f');
}

makeJuice("L")