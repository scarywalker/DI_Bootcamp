// 1
// logs the string with the object values as cited

// 2
function displayStudentInfo(objUser){
    const {first, last} = objUser
    console.log(`'Your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// 3
const users = { user1: 18273, user2: 92833, user3: 90315 }
let entries = Object.entries(users)
let entries2 = entries.map((user) => [user[0],user[1]*2])
console.log(entries2);

// 4
// object

// 5
class Dog {
    constructor(name) {
      this.name = name;
    }
};
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
}; 
// 6
// 6.1
// false flase
const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object1.number)
// declared by value to four
console.log(object2.number)
// declared by instace of something declared by value to four
console.log(object3.number)
// declared by instace of something declared by value to four
console.log(object4.number)
// declared by value to five