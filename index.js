const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/todo_db', () => {
    console.log("Connected to MongoDB");
}, err => {
    console.log(err.message);
})

require('./routes/auth.routes')(app)
require('./routes/todo.routes')(app)

app.listen(3000, ()=>{
    console.log("Server is listening at port ",3000)
})