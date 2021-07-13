let express = require('express');
let mongoose = require('mongoose');
let ejs = require('ejs');
let path = require('path');
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

//mongoose connector to database
mongoose.connect("mongodb://localhost/userStore", {useNewUrlParser : true, useUnifiedTopology : true}, (err) => {
    console.log("Connected", err ? false : true);
})

//app instansiate
let app = express();

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + "public"));

//set middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

//errorhandlers
app.use((req, res, next) => {
    res.send('Page not found');
})

app.use((err, req, res, next) => {
    res.send(err);
})

//server listener
app.listen(3000, () => {
    console.log('server is listening at port 3k');
})