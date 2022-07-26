const express = require('express');
const app = express();
const port = 3000;

app.get('/hello',(req,res) => {
    res.send('<h1>Hello!</h1>')
})

app.get('/*',(req,res) => {
    res.send('<h1>Error 404!</h1>')
})

app.listen(port, () => {
    console.log('hello')
})