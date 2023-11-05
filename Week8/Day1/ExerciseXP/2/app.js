import persons from './data.js';

function calculateAverageAge(persons) {
  const totalAge = persons.reduce((acc, person) => acc + person.age, 0);
  return totalAge / persons.length;
}

const averageAge = calculateAverageAge(persons);
console.log(`Average age of all persons: ${averageAge}`);
