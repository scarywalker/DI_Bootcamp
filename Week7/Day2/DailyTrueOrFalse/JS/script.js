const allTruthy = (...args) => args.every(x=>x==true);

console.log(allTruthy(5, 4, 3, 2, 1))