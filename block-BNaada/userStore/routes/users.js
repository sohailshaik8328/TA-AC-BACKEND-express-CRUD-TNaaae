let express = require('express');
let User = require('../models/userModel');
let router = express.Router();

router.get('/', (req, res, next) => {
    User.find({}, (err, users) => {
        if(err) return next(err);
        res.render('user', {users : users});
    })
})

router.get('/new', (req, res) => {
    res.render('usersForm');
})

router.post('/', (req, res, next) => {
    User.create(req.body, (err, userCreated) => {
        if(err) return next(err);
        res.redirect('/users');
    })
})

router.get('/:id', (req, res, next) => {
    let id = req.params.id;
    User.findById(id, (err, user) => {
        res.render('userDetails', {user : user});
    })
})




module.exports = router;