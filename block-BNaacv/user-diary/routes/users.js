let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('users');
})

router.get('/:id', (req, res) => {
    res.render('singleUser');
})

router.get('/new', (req, res) => {
    res.render('userForm');
})

module.exports = router;