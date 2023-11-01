// 1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
          resolve(`${num} is less than or equal to 10`);
        } else {
          reject(`${num} is greater than 10`);
        }
      });
}

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// 2
function delay(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`success`);
      }, ms);
    });
  }

  delay(4000)
    .then(result => console.log(result))
    .catch(error => console.log(error));

// 3
const resolvedPromise = Promise.resolve(3);

resolvedPromise
  .then(value => {
    console.log( value); 
  })


const rejectedPromise = Promise.reject("Boo!");

rejectedPromise
  .then(value => {

  })
  .catch(error => {
    console.log(error);
  });
