const _ = require('lodash');
const math = require('./math');

const result1 = math.add(5, 3);
const result2 = math.multiply(4, 7);
const result3 = _.sum([2, 4, 6, 8]);

console.log(`Result of addition: ${result1}`);
console.log(`Result of multiplication: ${result2}`);
console.log(`Result of sum from lodash: ${result3}`);
