let express = require('express');
let User = require('../models/userModel');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('user')
})

router.get('/new', (req, res) => {
    res.render('usersForm');
})

router.post('/', (req, res, next) => {
    // console.log(req.body);
    User.create(req.body, (err, userCreated) => {
        if(err) return next(err);
        // res.send(userCreated);
        res.redirect('/users');
    })
})




module.exports = router;