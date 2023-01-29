const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('localhost:17027/todo', () => {
    console.log("Connected to MongoDB");
    init()
}, err => {
    console.log(err.message);
})

app.listen(3000, ()=>{
    console.log("Server is listening at port ",3000)
})