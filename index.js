require('dotenv').config()
const express = require('express');

const app = express();
const port = process.env.PORT;
app.get('/', ((req, res)=>{
    res.send('hello world')
}))

app.get('/backend',((req, res)=>{
    res.send('<h1>practice backend </h1>')
}))

app.listen(port , ()=>{
    console.log(`app is running 0n ${port}`)
})