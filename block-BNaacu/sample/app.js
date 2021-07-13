let express = require('express');
let path = require('path');
let studentRouter = require('./routes/stuents')

let app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//set middlewares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'views'));

app.use('/students', studentRouter);

//server listener
app.listen(3000, () => {
    console.log('server is listening at port 3k');
})