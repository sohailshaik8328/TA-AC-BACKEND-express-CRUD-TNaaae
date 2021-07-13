let express = require('express');
let ejs = require('ejs');
let mongoose = require('mongoose');
let path = require('path');

let school = express();

//ejs engine
school.set("view engine", "ejs");
school.set("views", path.join(__dirname, 'views'));

//routes
school.get('/', (req, res) => {
    res.render('index');
})

school.listen(3000, () => {
    console.log('server is listening at port 3k');
})