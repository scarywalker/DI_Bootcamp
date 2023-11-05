const fs = require("fs");

fs.readFile('./hello.txt',(err,data) => {
    if (err) {
        console.log('errrroooorrr')
    }
    console.log('1', data.toString('utf8'))
});

// const file = fs.readFileSync('./hello.txt');
// console.log('2', file.toString());

// fs.appendFile('./hello.txt', ' gjofdhguiohgosd', err => {
//     if (err) {
//         console.log(err)
//     }
// });

// fs.writeFile('bye.txt', 'Goodbye', err => {
//         if (err) {
//             console.log(err)
//         }
//     })

// fs.unlink('./bye.txt', err => {
//             if (err) {
//                 console.log(err)
//             }
//         })