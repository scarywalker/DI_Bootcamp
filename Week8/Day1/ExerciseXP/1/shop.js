const products = require('./products').products;

function search(name) {
    return products.find(product => product.name === name) || null;
  }

console.log(search("A"))
console.log(search("C"))
console.log(search("E"))