// Exercise
// 1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people);

// people[2]="Jason";
// console.log(people);

// people.push("gabriel");
// console.log(people)

// console.log(people.indexOf("Mary"));

// let people2 = people.slice(1,3)
// console.log(people2)

// console.log(people.indexOf("Foo"));

// let last = people[people.length -1];
// console.log(last);

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// };

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
//     if (people[i] == "Devon"){
//         break
//     }
// };

// 2
// let colors = ["blue", "yellow", "green", "pink", "red" ];
// for (let i = 0; i < colors.length; i++) {
//     console.log(`My ${i}st choice is ${colors[i]}`);
// };

// 3
// let age = parseInt(prompt("Gime a number"),10);
// console.log(typeof age);
// while (age < 10) {
//     age = parseInt(prompt("Gime a number"),10);
// };

// 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// };

// console.log(building.numberOfFloors);

// console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);

// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] < building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] = 1200
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

// 5
// const family = {
//     numberOfMembers: 4,
//     dad: "Offer",
//     mom: "Claudia",
//     son: "Gabriel",
//     daugther: "Tali"
// };

// for (let key in family) {
//     console.log(key)
// }

// for (let key in family) {
//     console.log(family[key])
// }

// 6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// let statement = []
// for (let key in details) {
//     statement.push(key)
//     statement.push(details[key])
// }

// console.log(statement.join(' '))

// 7
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort()

// let secretName = ""
// for (let key in names) {
//     secretName += names[key][0]    
// }

// console.log(secretName)