const express = require('express')
const app = express()

app.get('/',(req, res) => {
    console.log(req);
    res.send('<h1>Hello World<h1>');
});

app.listen(3001, () => {
    console.log(`runing on port 3001`);
});

