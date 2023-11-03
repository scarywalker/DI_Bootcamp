// 1
// const promise1 = Promise.resolve(3);

// const promise2 = 42;

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
// .then((results) => {
// console.log(results);
// }).catch((error) => {
// console.log(error);
// });

// 2
function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

// the promise all waits for all promises to be resolved, so it first multiplies the array by two and only then it logs the result which is the array * 2