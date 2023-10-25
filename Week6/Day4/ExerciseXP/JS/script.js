// 1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let i in colors) {
//     console.log(`${i}# choice id ${colors[i]}`)
// }

// console.log(colors.some((value) => value == "Violet"));

// 2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// for (let i in colors) {
//     console.log(`${i}${ordinal[i] || "th"} choice id ${colors[i]}`)
// }

// 4
// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


// let newArr = users.filter(person => person.role === 'Full Stack Resident').map(val => `Hello ${val.lastName}`);

// console.log(newArr);

// 5

// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// const reducer = (accumulator, currentValue) => `${accumulator} ${currentValue}`;

// let veryEpic = epic.reduce(reducer);

// console.log(veryEpic);

// 6

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

let newArr = students.filter(person => person.isPassed === true).map(val => `Good job ${val.name}, you passed the course in ${val.course}`);

console.log(newArr)