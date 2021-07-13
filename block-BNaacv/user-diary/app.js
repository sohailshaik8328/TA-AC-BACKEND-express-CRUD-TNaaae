let express = require('express');
let ejs = require('ejs');
let path = require('path');
let usersRouter = require('./routes/users');

let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//set middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

//router middlewares
app.use('users', usersRouter)

//server listener
app.listen(3000, () => {
    console.log('server is listening at port 3k');
})